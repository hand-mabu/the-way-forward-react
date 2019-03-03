import React from "react";
import {observer} from 'mobx-react';

import SecHeader from './SecHeader';
import SecMain from './SecMain';
import SecFooter from './SecFooter';

import '../css/App.css';
import {appState} from '../util/appState';

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