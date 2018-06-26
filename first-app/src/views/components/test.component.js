import React from 'react';
import { Button } from './button.compoent';
import {TestReceiveProps} from './test.receiveProps';

export class TestComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
        console.log('constructor')
    }

    componentWillMount(){
        console.log('component will mount')
    }

    componentDidMount() {
        // window.addEventListener('', this._handler);
        console.log('compoenntDidMount')
    }











    shouldComponentUpdate(){
        console.log('should compoent update')
        return true;
    }

    componentWillUpdate(){
        console.log('componet will update')
    }

    componentDidUpdate(){
        console.log('component did update')
    }











    componentWillUnmount() {
        // window.removeEventListener('')
        console.log('component will unmount')
    }

    componentWillReceiveProps(){
        console.log('component will receive props')
    }

    

    componentDidCatch(){
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
    }

    // _onChange = e => {

    // }

    render() {
        const { children, style } = this.props;
        return (
            <div className="frame" style={{ ...style }}>
                <h3>test component</h3>
                {children}
                <Button onClick={this._minusBtnClicked}> - </Button>
                <Button onClick={this._plusBtnClicked}> + </Button>
                {
                    this.state.count > 2 ? 
                    null 
                    :
                    <TestReceiveProps count={this.state.count} />
                }
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