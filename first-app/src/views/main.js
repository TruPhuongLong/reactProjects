import React, { Component } from 'react';
import '../index.css';

import {ListColorPage} from './pages/list-color-page';

export default class App extends Component {


    render() {
        return (
            <div style={{ backgroundColor: 'white' }}>
                <ListColorPage />
            </div>
        )
    }
}