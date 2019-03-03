// 创建SecTimeShow组件,即为计时模块
import {observer} from "mobx-react";
import React from "react";
import Tool from "../util/tools";

@observer
class SecTimeShow extends React.Component {
    render() {
        var resCountStr = this.props.appState.resCount ? '计次' : '复位';
        var onOffStr = this.props.appState.onOff ? '关闭' : '启动';
        return (
            <div className="showTime">
                <p>{Tool.calTime(this.props.appState.time)}</p>
                <label className="resCountLab">
                    <button className="resCountBtn" onClick={this.resCountTime.bind(this)}>{resCountStr}</button>
                </label>
                <label className="onOffLab">
                    <button className="onOffBtn" onClick={this.onOffTime.bind(this)}>{onOffStr}</button>
                </label>
            </div>
        );
    }

    resCountTime() {
        this.props.appState.resCountTime();
    }

    onOffTime() {
        this.props.appState.onOffTime();
    }
}
export default SecTimeShow;