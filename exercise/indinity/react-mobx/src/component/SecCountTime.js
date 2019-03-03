// SecCountTime组件,即计次模块
import {observer} from "mobx-react";
import React from "react";

@observer
class SecCountTime extends React.Component {
    render() {
        var length = this.props.appState.length;
        var colorArr = ['red', 'green', 'white'];
        return (
            <div className="count">
                <ul>
                    <li>计次</li>
                    {
                        this.props.appState.timeLog.map(function (item, index) {
                            var classStr = "item " + colorArr[index % colorArr.length];
                            return (
                                <li className={classStr} key={index}>
                                    <span>计次{length - index}</span>
                                    <span>{item}</span>
                                </li>);
                        })
                    }
                </ul>
            </div>
        );
    }

}
export default SecCountTime;