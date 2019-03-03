import React from "react";
import {observer} from 'mobx-react';

import SecTimeShow from './SecTimeShow';
import SecCountTime from './SecCountTime';

// 创建SecMain组件，即为秒表工具的主要部门——计时模块，包括SecTimeShow组件、SecCountTime组件两部分
@observer
class SecMain extends React.Component {
    render() {
        return (<div className="main">
            <SecTimeShow appState={this.props.appState}/>
            <SecCountTime appState={this.props.appState}/>
        </div>);
    }
}

export default SecMain;