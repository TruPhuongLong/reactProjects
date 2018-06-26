import React, { Component } from 'react';
import { Provider } from 'react-redux';

import '../index.css';
import ListColorPage from './pages/list-color-page';
import ChatPage from './pages/home.page';
import { store } from '../redux/stores/store';
import SignalrChat from './pages/signalr.chat.page';
import {TestComponent} from './components/test.component';

export default class App extends Component {


    render() {
        return (
            // <div style={{ backgroundColor: 'white' }}>
            //     <ListColorPage />
            // </div>
            <Provider store={store}>
                <div style={{ backgroundColor: 'white' }}>
                    {/* <SignalrChat /> */}
                    <h1>welcome here</h1>
                    <TestComponent style={{backgroundColor: 'yellow', color: 'red'}}>
                        <p>im children</p>
                        <i>im children 2</i>
                        <i>im children3</i>
                        <i>im children 4</i>
                    </TestComponent>
                </div>
            </Provider>
        )
    }
}