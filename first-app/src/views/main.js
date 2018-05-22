import React, {Component} from 'react';
import {Header} from './components/header';
import {List} from './components/list';

export default class App extends Component{
    constructor(){
        super();
        this.itemSource = [1,2,3,4,5,6,'mot', 'hai']
    }

    render(){
        const {itemSource} = this;
        return (
            <div>
                <Header bodyColor='white'>
                    <h1 style={{textAlign: 'center'}}> im header </h1>
                </Header>
                <List itemSource={itemSource}/>
            </div>
        )
    }
}