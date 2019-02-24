import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import seconds from './seconds.png';

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

// 创建SecMain组件，即为秒表工具的主要部门——计时模块
class SecMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // 若为false即为复位按钮，为true即计次按钮
            resCount: false,
            // 若为false即为启动按钮，为true即为关闭按钮
            onOff: false,
            time: 0,
            timeLog: [],
            length: 0
        };
        // 启停计时
        this.onOffTime = this.onOffTime.bind(this);
        this.startTime = this.startTime.bind(this);
        this.stopTime = this.stopTime.bind(this);

        // 计次或重置
        this.resCountTime = this.resCountTime.bind(this);
        this.countTime = this.countTime.bind(this);
        this.resetTime = this.resetTime.bind(this);
    }

    // 判断是开始计时还是停止计时
    onOffTime(e) {
        if (this.state.onOff) {
            this.stopTime();
        } else {
            this.startTime();
        }
        this.setState({
            resCount: !this.state.resCount,
            onOff: !this.state.onOff
        });
    }

    // 开始计时
    startTime() {
        this.timer = setInterval(() => {
            this.setState({
                time: ++this.state.time
            })
        }, 10);
    }

    // 停止计时
    stopTime() {
        clearInterval(this.timer);
    }

    // 计次或复位
    resCountTime() {
        if (this.state.onOff) {
            this.countTime();
        } else {
            this.resetTime();
        }
    }

    // 计次
    countTime() {
        var tempArr = this.state.timeLog;
        tempArr.unshift(this.refs.timeInfo.innerHTML);


        this.setState({
            timeLog: tempArr,
            length: this.state.timeLog.length
        });
    }

    // 复位
    resetTime() {
        this.setState({
            time: 0,
            timeLog: [],
            length: 0
        })
    }

    render() {
        var resCountStr = this.state.resCount ? '计次' : '复位';
        var onOffStr = this.state.onOff ? '关闭' : '启动';
        var length = this.state.length;
        var colorArr = ['red', 'green', 'white'];

        var msec = parseInt(this.state.time % 100);
        var sec = parseInt(this.state.time / 100 % 60);
        var min = parseInt(this.state.time / 100 / 60 % 60);
        var hour = parseInt(this.state.time / 100 / 60 / 60);

        return (<div className="main">
            <div className="showTime">
                <p ref="timeInfo">{hour < 10 ? '0' + hour : hour}:{min < 10 ? '0' + min : min}:{sec < 10 ? '0' + sec : sec}.{msec < 10 ? '0' + msec : msec}</p>
                <label className="resCountLab">
                    <button className="resCountBtn" onClick={this.resCountTime}>{resCountStr}</button>
                </label>
                <label className="onOffLab">
                    <button className="onOffBtn" onClick={this.onOffTime}>{onOffStr}</button>
                </label>
            </div>
            <div className="count">
                <ul>
                    <li>计次</li>
                    {

                        this.state.timeLog.map(function (item, index) {
                            var classStr = "item " + colorArr[index % colorArr.length];
                            return (
                                <li className={classStr}>
                                    <span>计次{length - index}</span>
                                    <span>{item}</span>
                                </li>)
                                ;
                        })
                    }
                </ul>
            </div>
        </div>);
    }
}


// 创建SecFooter组件，即为秒表工具的底部导航栏部分
class SecFooter extends React.Component {
    render() {
        return (<div className="footer">
            <ul>
                <li>
                    <img src={seconds} className="sec-logo"/>
                    <span>秒表</span>
                </li>
            </ul>
        </div>);
    }
}

// 将SecHeader、SecMain、SecFooter三部分组件组合
class App extends React.Component {
    render() {
        return (
            <div className="container">
                <SecHeader/>
                <SecMain/>
                <SecFooter/>
            </div>
        );
    }
}

export default App;