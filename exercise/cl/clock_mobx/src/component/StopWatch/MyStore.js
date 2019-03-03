import { observable, computed, action } from "mobx";

class MyStore {
  // 计次数组
  @observable count = [];
  // 左边按钮点击次数
  @observable left = 0;
  // 右边按钮点击次数
  @observable right = 0;
  // 当前秒数
  @observable mytime = 0;
  // 计时器名称
  @observable timer = 0;
  // 左边按钮内的文字
  @computed get leftstr() {
    if (this.right % 2 === 0) {
      return "复位";
    } else {
      return "计次";
    }
  }
  // 右边按钮内的文字
  @computed get rightstr() {
    if (this.right % 2 === 0) {
      return "启动";
    } else {
      return "停止";
    }
  }
  // 点击右边按钮触发事件
  @action.bound
  rightAdd() {
    if (this.right % 2 === 0) {
      // 获取开始时间
      this.timer = window.setInterval(this.calTime, 10);
    } else {
      window.clearInterval(this.timer);
    }
    this.right++;
  }
  // 计时器的回调函数
  @action.bound
  calTime() {
    this.mytime = this.mytime + 10;
    console.log(this.mytime);
  }
  // 将当前秒数转换成展示的格式
  @computed get time() {
    var min = Math.floor(this.mytime / 60000);
    if (min < 10) {
      min = "0" + min;
    }
    var sec = Math.floor(this.mytime / 1000);
    if (sec < 10) {
      sec = "0" + sec;
    }
    var ms = Math.round((this.mytime % 1000) / 10);
    if (ms === 0) {
      ms = "00";
    } else if (ms < 10) {
      ms = "0" + ms;
    }
    return min + ":" + sec + "." + ms;
  }
  // 点击左边按钮触发事件
  @action.bound
  leftAdd() {
    if (this.right % 2 === 0) {
      this.mytime = 0;
      this.count = [];
    } else {
      // 计次

      this.count.push(this.time);
    }
    this.left++;
  }
}
export default new MyStore();
