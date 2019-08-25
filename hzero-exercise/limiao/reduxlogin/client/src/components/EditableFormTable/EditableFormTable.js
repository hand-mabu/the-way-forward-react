import React from 'react';
import { Popconfirm, Form, Table, Button, message } from 'antd';
import PropTypes from 'prop-types';
import { Tabledata } from './TableData';
import { EditableContext } from './TableContext';
import EditableCell from './EditableCell';

class EditableTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: Tabledata,
            editingKey: '',
        };
        this.columns = [
            {
                title: 'name',
                dataIndex: 'name',
                width: '25%',
                editable: true,
            },
            {
                title: 'age',
                dataIndex: 'age',
                width: '15%',
                editable: true,
            },
            {
                title: 'address',
                dataIndex: 'address',
                width: '40%',
                editable: true,
            },
            {
                title: 'operation',
                dataIndex: 'operation',
                render: (text, record) => {
                    const { editingKey } = this.state;
                    const editable = this.isEditing(record);
                    return editable ? (
                        <span>
                            <EditableContext.Consumer>
                                {(form) => (
                                    <button
                                        onClick={() => this.save(form, record.key)}
                                        style={{ marginRight: 8 }}
                                        type="button"
                                    >
                                        Save
                                    </button>
                                )}
                            </EditableContext.Consumer>
                            <Popconfirm
                                title="Sure to cancel?"
                                onConfirm={() => this.cancel(record.key)}
                            >
                                <button style={{ marginRight: 8 }} type="button">
                                    Cancel
                                </button>
                            </Popconfirm>
                            <Popconfirm
                                title="Sure to delete?"
                                onConfirm={() => this.delete(record.key)}
                            >
                                <button type="button">delete</button>
                            </Popconfirm>
                        </span>
                    ) : (
                        <button
                            type="button"
                            disabled={editingKey !== ''}
                            onClick={() => this.edit(record.key)}
                        >
                            Edit
                        </button>
                    );
                },
            },
        ];
    }

    isEditing = (record) => {
        const { editingKey } = this.state;
        return record.key === editingKey;
    };

    cancel = (key) => {
        if (key.length > 6) {
            const { data } = this.state;
            const newData = data;
            newData.splice(data.length - 1, 1);
            this.setState({ data: newData, editingKey: key });
        }
        this.setState({ editingKey: '' });
    };

    delete = (key) => {
        const { data } = this.state;
        const newData = data;
        const index = newData.findIndex((item) => key === item.key);
        newData.splice(index, 1);
        this.setState({ data: newData, editingKey: '' });
    };

    save(form, key) {
        form.validateFields((error, row) => {
            if (error) {
                return;
            }
            const { data } = this.state;
            const newData = [...data];
            const index = newData.findIndex((item) => key === item.key);
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row,
                });
                this.setState({ data: newData, editingKey: '' });
            } else {
                newData.push(row);
                this.setState({ data: newData, editingKey: '' });
            }
        });
    }

    edit = (key) => {
        this.setState({ editingKey: key });
    };

    handleAdd = () => {
        const { data, editingKey } = this.state;
        if (editingKey !== '') {
            message.error('请先保存');
            return;
        }
        const key = new Date().toString();
        const row = {
            key,
            name: '',
            age: '',
            address: '',
        };
        console.log(data);
        console.log(row);
        const newData = data;
        newData.splice(data.length, 1, row);
        this.setState({ data: newData, editingKey: key });
        console.log(newData);
    };

    render() {
        const components = {
            body: {
                cell: EditableCell,
            },
        };
        const columns = this.columns.map((col) => {
            if (!col.editable) {
                return col;
            }
            return {
                ...col,
                onCell: (record) => ({
                    record,
                    inputType: col.dataIndex === 'age' ? 'number' : 'text',
                    dataIndex: col.dataIndex,
                    title: col.title,
                    editing: this.isEditing(record),
                }),
            };
        });
        const { data } = this.state;
        const { form } = this.props;
        return (
            <EditableContext.Provider value={form}>
                <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }}>
                    Add a row
                </Button>
                <Table
                    components={components}
                    bordered
                    dataSource={data}
                    columns={columns}
                    rowClassName="editable-row"
                    pagination={{
                        onChange: this.cancel,
                    }}
                />
            </EditableContext.Provider>
        );
    }
}

const EditableFormTable = Form.create()(EditableTable);
export default EditableFormTable;

EditableTable.propTypes = {
    form: PropTypes.object,
};