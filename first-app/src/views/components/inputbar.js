import React, { Component } from 'react';

export default class InputBar extends Component {
    constructor() {
        super()
        this.state = {
            textInput: ''
        }
    }

    _onChange(event) {
        this.setState({
            textInput: event.target.value
        })
    }

    _onKeyDown(event) {
        if (event.key === 'Enter') {
            this._exportItem();
        }
    }

    _exportItem() {
        this.props.eventHandle(this.state.textInput)
        this.setState({
            textInput: ''
        })
    }

    render() {
        const { titleButton } = this.props;
        const { textInput } = this.state;
        return (
            <div style={localStyles.container}>
                <input style={localStyles.input}
                    value={textInput}
                    onChange={this._onChange.bind(this)}
                    onKeyDown={this._onKeyDown.bind(this)}
                />
                <button onClick={this._exportItem.bind(this)}>
                    {titleButton || 'ADD'}
                </button>
            </div>
        )
    }
}

const localStyles = {
    container: {
        margin: 1,
        padding: 3,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'gray',        
    },
    input: {
        flex: 1,
    }
}