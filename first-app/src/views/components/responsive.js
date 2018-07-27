import React, {Component} from 'react';
import './responsive.css';

export default class Responsive extends Component{



    render(){

        return (
            <div className="">

                <h1>hi</h1>
                {this.props.onClicked && <button onClick={this.props.onClicked}>ok</button>}
            </div>
        )
    }
}