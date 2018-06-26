import React, { Component } from 'react';
import { Provider } from 'react-redux';

import '../index.css';
import ListColorPage from './pages/list-color-page';
import ChatPage from './pages/home.page';
import { store } from '../redux/stores/store';
import SignalrChat from './pages/signalr.chat.page';
import {TestComponent} from './components/test.component';
import {Animation} from './components/animation';

import {MenuContainer} from './components/menucontainer';

export default class App extends Component {


    render() {
        return (
            // <div style={{ backgroundColor: 'white' }}>
            //     <ListColorPage />
            // </div>
            <Provider store={store}>
                <div style={{ backgroundColor: 'white' }} className="container">
                    {/* <ListColorPage /> */}
                    <h1>Welcome</h1>
                    <MenuContainer />
                </div>
            </Provider>
        )
    }
}