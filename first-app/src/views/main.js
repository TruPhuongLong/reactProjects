import React, { Component } from 'react';
import {ColorForm} from './components/color.form';

export default class App extends Component {
    log(title, color) {
        console.log(`title: ${title}, and color: ${color}`);
    }

    render(){
        return <ColorForm onSubmit={this.log} />
    }
}