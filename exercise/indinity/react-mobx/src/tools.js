// import React from "react";

var calTime = (time) => {
    var msec = parseInt(time % 100);
    var sec = parseInt(time / 100 % 60);
    var min = parseInt(time / 100 / 60 % 60);
    var hour = parseInt(time / 100 / 60 / 60);

    return (hour < 10 ? '0' + hour : hour) + ' : ' + (min < 10 ? '0' + min : min) + ' : ' + (sec < 10 ? '0' + sec : sec) + ' : ' + (msec < 10 ? '0' + msec : msec);
};

export default {
    calTime: calTime
};