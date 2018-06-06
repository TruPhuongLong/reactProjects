import React, { Component } from 'react';
import {socket} from '../../service/socket.io';
import InputBar from '../components/inputbar';

export default class ChatPage extends Component {
//
    constructor(props){
        super(props)
    }

    _sendMessage(mes){
        
    }

    render() {
        return (
            <div>
                <InputBar titleButton='Send' eventHandle={this._sendMessage.bind(this)}/>
                <h1>im chat page </h1>
            </div>
        )
    }
}