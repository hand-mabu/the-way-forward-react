import React, { Component } from 'react';
import './App.css';


class ShowTime extends Component {
    render() {
        return (
            <div className="ShowTime">
                {this.props.currentTimer}
            </div>
        );
    }
}

class ShowTimer extends Component {
    render() {
        return (
            <div >
                <ShowTime currentTimer={this.props.currentTimer} />
                <button className="ResetOrCount" onClick={this.props.handlerClickResetOrCount}>
                    {!this.props.isResetTimer ? "复位" : "计次"}
                </button>
                <button className="StartOrPause" onClick={this.props.handlerClickStartOrPause}>
                    {!this.props.isStartTimer ? "开始" : "暂停"}
                </button>
            </div>

        );
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minute: 0,
            second: 0,
            miliSecond: 0,
            currentTimer: "00:00.00",
            isStartTimer: false,
            isResetTimer: false,
            history: []
        };
        this.handlerClickResetOrCount = this.handlerClickResetOrCount.bind(this);
        this.handlerClickStartOrPause = this.handlerClickStartOrPause.bind(this);
    }
    startTimer() {
        this.timerID = setInterval(
            () => this.tick(),
            10
        );
    }
    handlerClickStartOrPause() {
        let isStart = !this.state.isStartTimer;
        let isReset;
        if (isStart) {
            isReset = true;
        } else {
            isReset = false;
        }
        this.setState({
            isStartTimer: isStart,
            isResetTimer: isReset
        });
        if (isStart) {
            this.startTimer();
        } else {
            clearInterval(this.timerID);
        }
    }
    handlerClickResetOrCount() {
        if (!this.state.isResetTimer) {
            this.setState({
                minute: 0,
                second: 0,
                miliSecond: 0,
                currentTimer: "00:00.00",
                history: []
            });
        } else {
            this.setState({
                history: this.state.history.concat([
                    { record: this.state.currentTimer }
                ])
            });
        }
    }
    tick() {
        if (!this.state.isStartTimer) {
            return;
        }
        let minutes = this.state.minute;
        let seconds = this.state.second;
        let miliSeconds = this.state.miliSecond + 1;
        let currentTimer;
        if (miliSeconds === 100) {
            seconds = seconds + 1;
            miliSeconds = 0;
        }
        if (seconds === 60) {
            minutes = minutes + 1;
            seconds = 0;
        }
        if (minutes === 60) {
            minutes = 0
        }
        currentTimer = (minutes < 10 ? ("0" + minutes) : minutes) + ":" +
            (seconds < 10 ? ("0" + seconds) : seconds) + "." +
            (miliSeconds < 10 ? ("0" + miliSeconds) : miliSeconds);
        this.setState({
            minute: minutes,
            second: seconds,
            miliSecond: miliSeconds,
            currentTimer: currentTimer
        });
    }
    render() {
        const historyRecord = this.state.history.map((item, i) => {
            return (
                <li key={i}>
                    <p className="Count">计次&nbsp;{i + 1}</p>
                    <p className="SpecificTime">{item.record}</p>
                </li>
            );
        });
        return (
            <div className="App">
                <header className="Timer">
                    <h1>{"秒表"}</h1>
                </header>
                <ShowTimer className="ShowTimer"
                    isResetTimer={this.state.isResetTimer}
                    isStartTimer={this.state.isStartTimer}
                    handlerClickResetOrCount={this.handlerClickResetOrCount}
                    handlerClickStartOrPause={this.handlerClickStartOrPause}
                    currentTimer={this.state.currentTimer} />
                <div className="History">
                    <ul>
                        {historyRecord.reverse()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;
