import React, { Component } from 'react';
import { Provider } from 'react-redux';

import '../index.css';
import ListColorPage from './pages/list-color-page';
import ChatPage from './pages/home.page';
import { store } from '../redux/stores/store';
import SignalrChat from './pages/signalr.chat.page';
import {TestComponent} from './components/test.component';
import {Animation} from './components/animation';
import Responsive from './components/responsive';

import {MenuContainer} from './components/menucontainer';
import EventComponent from './components/event';
import {BrowserRouter, Route} from 'react-router-dom';
import RouteComponent from './components/route';

export default class App extends Component {



    render() {
        return (
            // <div style={{ backgroundColor: 'white' }}>
            //     <Responsive onClicked={()=>console.log('it work')}/>

                
            // </div>









            // <Provider store={store}>
            //     <div style={{ backgroundColor: 'white' }} className="container">
            //         {/* <ListColorPage /> */}
            //         <h1>Welcome</h1>
            //         <MenuContainer />
            //     </div>
            // </Provider>






                <div>
                    <Route path="/" exact strict component={RouteComponent} />
                    <Route path="/event" exact strict component={EventComponent} />

                </div>
        )
    }
}