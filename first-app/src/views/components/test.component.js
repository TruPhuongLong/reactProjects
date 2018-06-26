import React from 'react';
import { Button } from './button.compoent';

export class TestComponent extends React.Component {

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    _minusBtnClicked = e => {

    }

    _plusBtnClicked = (e) => {
        console.log("shiftKey: ", e.shiftKey)
        console.log("altKey: ", e.altKey)
        console.log("ctrlKey: ", e.ctrlKey)
        console.log("X ", e.clientX)
        console.log("Y ", e.clientY)
        console.log("pageX ", e.pageX)
        console.log("pageY ", e.pageY)
        console.log("screenX ", e.screenX)
        console.log("screenY ", e.screenY)

        console.log("shiftKey: ", e.shiftKey)
        console.log("altKey: ", e.altKey)
        console.log("ctrlKey: ", e.ctrlKey)
        console.log("charCode : ", e.charCode)
        console.log("key : ", e.key)
        console.log("keyCode : ", e.keyCode)
        console.log("locale : ", e.locale)
        console.log("location : ", e.location)

        console.log("metaKey : ", e.metaKey)
        console.log("repeat : ", e.repeat)
        console.log("which : ", e.which)
    }

    _onChange = e => {
        console.log("shiftKey: ", e.shiftKey)
        console.log("altKey: ", e.altKey)
        console.log("ctrlKey: ", e.ctrlKey)
        console.log("charCode : ", e.charCode)
        console.log("key : ", e.key)
        console.log("keyCode : ", e.keyCode)
        console.log("locale : ", e.locale)
        console.log("location : ", e.location)

        console.log("metaKey : ", e.metaKey)
        console.log("repeat : ", e.repeat)
        console.log("which : ", e.which)
    }

    render() {
        const { children, style } = this.props;
        return (
            <div className="frame" style={{ ...style }}>
                <h3>test component</h3>
                {children}
                <Button onClick={this._minusBtnClicked}> - </Button>
                <Button onClick={this._plusBtnClicked}> + </Button>
                <input placeholder="type some text" onChange={this._onChange}/>
            </div>
        )
    }
}

/**
 * 
 * 
 */