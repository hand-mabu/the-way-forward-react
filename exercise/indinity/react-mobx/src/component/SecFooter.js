import React from "react";
import seconds from '../img/seconds.png';

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

export default SecFooter;