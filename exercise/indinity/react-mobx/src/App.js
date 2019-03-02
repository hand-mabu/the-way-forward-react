import React from "react";
import {observer} from 'mobx-react';
import './App.css';
import seconds from './seconds.png';
import Tool from './tools.js';
import {appState} from './appState';

// 创建SecHeader组件，即为秒表工具的顶部标题栏
class SecHeader extends React.Component {
    render() {
        return (
            <div className="header">
                <h1>秒表</h1>
            </div>
        );
    }
}

// 创建SecTimeShow组件,即为计时模块
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

// SecCountTime组件,即计次模块
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

// 创建SecMain组件，即为秒表工具的主要部门——计时模块，包括SecTimeShow组件、SecCountTime组件两部分
class SecMain extends React.Component {
    render() {
        return (<div className="main">
            <SecTimeShow appState={this.props.appState}/>
            <SecCountTime appState={this.props.appState}/>
        </div>);
    }
}

// 创建SecFooter组件，即为秒表工具的底部导航栏部分
class SecFooter extends React.Component {
    render() {
        return (<div className="footer">
            <ul>
                <li>
                    <img alt="Sec" src={seconds} className="sec-logo"/>
                    <span>秒表</span>
                </li>
            </ul>
        </div>);
    }
}

// 将SecHeader、SecMain、SecFooter三部分组件组合
@observer
class App extends React.Component {
    render() {
        return (
            <div className="container">
                <SecHeader/>
                <SecMain appState={appState}/>
                <SecFooter/>
            </div>
        );
    }
}

export default App;