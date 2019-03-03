import {observable, action} from "mobx";
import Tool from './tools.js';

var appState = observable({
    // 若为false即为复位按钮，为true即计次按钮
    resCount: false,
    // 若为false即为启动按钮，为true即为关闭按钮
    onOff: false,
    timer: null,
    time: 0,
    timeLog: [],
    length: 0
});

// 开始计时
appState.startTime = action(function () {
    appState.timer = setInterval(() => {
        appState.time++;
    }, 10);
});

// 停止计时
appState.stopTime = action(function () {
    clearInterval(appState.timer);
});

// 计次
appState.countTime = action(function () {
    var tempArr = appState.timeLog;
    tempArr.unshift(Tool.calTime(appState.time));
    appState.timeLog = tempArr;
    appState.length = appState.timeLog.length;
});

// 复位
appState.resetTime = action(function () {
    appState.time = 0;
    appState.timeLog = [];
    appState.length = 0;
});

// 判断是开始计时还是停止计时
appState.onOffTime = action(function () {
    if (appState.onOff) {
        appState.stopTime();
    } else {
        appState.startTime();
    }
    appState.resCount = !appState.resCount;
    appState.onOff = !appState.onOff;
});

// 计次或复位
appState.resCountTime = action(function () {
    if (appState.onOff) {
        appState.countTime();
    } else {
        appState.resetTime();
    }
});
export {
    appState
};