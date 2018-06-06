import React, { Component } from 'react';
import { Provider } from 'react-redux';

import '../index.css';
import ListColorPage from './pages/list-color-page';
import ChatPage from './pages/home.page';
import { store } from '../redux/stores/store';


export default class App extends Component {


    render() {
        return (
            // <div style={{ backgroundColor: 'white' }}>
            //     <ListColorPage />
            // </div>
            <Provider store={store}>
                <div style={{ backgroundColor: 'white' }}>
                    <ChatPage />
                </div>
            </Provider>
        )
    }
}