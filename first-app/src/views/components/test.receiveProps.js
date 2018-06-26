import React from 'react';

export class TestReceiveProps extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
        console.log('TestReceiveProps constructor')
    }

    componentWillMount(){
        console.log('TestReceiveProps component will mount')
    }

    componentDidMount() {
        // window.addEventListener('', this._handler);
        console.log('TestReceiveProps compoenntDidMount')
    }











    shouldComponentUpdate(){
        console.log('TestReceiveProps should compoent update')
        return true;
    }

    componentWillUpdate(){
        console.log('TestReceiveProps componet will update')
    }

    componentDidUpdate(){
        console.log('TestReceiveProps component did update')
    }




    






    componentWillUnmount() {
        // window.removeEventListener('')
        console.log('TestReceiveProps component will unmount')
    }

    componentWillReceiveProps(){
        console.log('TestReceiveProps component will receive props')
    }

    render(){
        return (
            <div>
                <h1>{this.props.count}</h1>
            </div>
        )
    }
}