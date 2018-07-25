import React, {Children} from 'react';
import './slideshow.css'

export default class SlideShow extends React.Component{

    buttons = Children.map(this.props.children, child => {
        return (
            <button>
                {child}
            </button>
        )
    });

    state = {
        total: 0,
        current: 0
    }

    componentDidMount(){
        this.setState({
            total: Children.count(this.props.children)
        })
        this.timerId = setInterval(this.next, 2000);
    }

    componentWillUnmount(){
        clearInterval(this.timerId)
    }

    next = () => {
        this.setState({
            current: this.state.current >= this.state.total - 1 ? 0 : this.state.current + 1
        })
    }

    render(){

        let circleReview = Array(this.state.total).fill('o');
        circleReview[this.state.current] = 'i'

        return (
            <div className="center">
                <h4>{circleReview}</h4>
                <br/>
                {Children.toArray(this.props.children)[this.state.current]}
            </div>
        )
    }
}