import React, { Component } from 'react';

import { socket } from '../../service/socket.io';
import InputBar from '../components/inputbar';
import { List } from '../components/list';

export default class ChatPage extends Component {
    //
    constructor(props) {
        super(props)
        this.state = {
            messages: []
        }
        socket.on('message', message => {
            console.log('on message work')
            const messages = [...this.state.messages, message]
            this.setState({ messages })
        })
    }

    _sendMessage(mes) {
        socket.emit('message', mes)
    }

    _renderRow(item, index) {
        return (
            <div key={index} style={localstyles.item}>
                <p>{index}: </p>
                <p>{item}</p>
            </div>
        )
    }

    render() {
        const { messages } = this.state;
        return (
            <div>
                <InputBar titleButton='Send' eventHandle={this._sendMessage.bind(this)} />
                <h1>im chat page </h1>
                <List itemSource={messages} renderRow={this._renderRow} />
            </div>
        )
    }
}

const localstyles = {
    item: {
        display: 'flex',
        flexDirection: 'row'
    }
}