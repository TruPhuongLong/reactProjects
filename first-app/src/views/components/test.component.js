import React from 'react';
import { Button } from './button.compoent';
import { TestReceiveProps } from './test.receiveProps';
import FlipMove from 'react-flip-move';

export class TestComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        console.log('constructor')
    }

    xhr;

    componentWillMount() {
        console.log('component will mount')
    }

    componentDidMount() {
        // window.addEventListener('', this._handler);
        // console.log('compoenntDidMount')
        this.xhr = new XMLHttpRequest();
        this.xhr.open('GET', 'https://ipinfo.io/json', true);
        this.xhr.send();

        this.xhr.addEventListener('readystatechange', this.processrequest.bind(this))
    }

    processrequest() {
        if (this.xhr.readyState === 4 && this.xhr.status === 200) {
            const response = JSON.parse(this.xhr.responseText);
            console.log(response.ip);
        }
    }











    shouldComponentUpdate(newProps, newState) {
        console.log('should compoent update')
        return true;
    }

    componentWillUpdate() {
        console.log('componet will update')
    }

    componentDidUpdate() {
        console.log('component did update')
    }











    componentWillUnmount() {
        // window.removeEventListener('')
        console.log('component will unmount')
    }

    componentWillReceiveProps() {
        console.log('component will receive props')
    }



    componentDidCatch() {
        console.log('componet did catch')
    }













    _minusBtnClicked = e => {
        this.setState(preState => ({
            count: preState.count - 1
        }))
    }

    _plusBtnClicked = (e) => {
        this.setState(preState => ({
            count: preState.count + 1
        }))
        // const h1 = document.getElementById('h1')
        // h1.innerHTML = "what is going on"
    }

    // _onChange = e => {

    // }

    render() {
        const { children, style } = this.props;
        return (
            <div className="frame" style={{ ...style }}>
                <h3 id="h1">test component</h3>
                {children}
                <Button onClick={this._minusBtnClicked}> - </Button>
                <Button onClick={this._plusBtnClicked}> + </Button>
 
                <FlipMove duration={259} easing='ease-out'>
                    <TestReceiveProps count={this.state.count} />
                </FlipMove>
            </div>
        )
    }
}

/**
 * console.log("shiftKey: ", e.shiftKey)
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
 * 
 */