This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Second Chronograph

小功能 - 秒表，使用react+mobx实现。
### 1、功能：
 - 按下右侧“启动”按钮，这个按钮就会变成“停止”，同时上面的数字时钟开始计时；按下“停止”按钮，数字时钟停止计时。
 - 左侧有一个按钮，初始状态显示“复位”，点击该铵钮会清空时钟； 开始计时之后，这个左侧按钮会变成“计次”，按一下“计次”，秒表底部就会增加一列时间，记录下按下“计次”这一瞬间的时刻。

### 2、环境部署&应用启动
 - 执行`npm run build` 部署环境
 - 执行`npm start` 启动应用
 
### 3、实现思路
 - 秒表：***App组件***
     - 上：标题栏（秒表）：***SecHeader组件***
     - 中：两部分：***SecMain组件***
        - 计时模块：***SecTimeShow组件***
            - 时间展示
            - 复位/计次按钮
            - 启动/停止按钮
        - 计次模块：***SecCountTime组件***
            - 点击一次计次，计次数添加一次
     - 底：导航栏（秒表&logo）：***SecFooter组件***
     
### 4、环境搭建过程 
 - `create-react-app react-mobx`
 - `npm install --save-dev mobx`
 - `npm install --save-dev mobx-react`
 - `git add .`
 - `git commit -m "mobx-react-demos-init"`
 - `git push origin master`
  
  注意：一定要同步到github，否则下面的步骤会报错

 - `npm run eject`
 - `npm install --save-dev babel-plugin-transform-decorators-legacy`
 - 配置package.json
```
babel: {
	"plugins": [
	    ["@babel/plugin-proposal-decorators", { "legacy": true }],
	 ]
  }
```