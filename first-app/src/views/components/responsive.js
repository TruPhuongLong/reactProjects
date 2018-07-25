import React, {Component} from 'react';
import './responsive.css';

export default class Responsive extends Component{
    render(){
        return (
            <div className="">
                <div className="header">
                    <h1>Header</h1>
                </div>
                <div className="clearfix">
                    <div className="col-3">
                        <ul>
                            <li><a>Home</a></li>
                            <li><a>About</a></li>
                            <li><a>Help</a></li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <p>content</p>
                    </div>
                    <div className="col-3" >
                        <p>right</p>
                    </div>
                </div>
                
                <div className="footer">
                    <h3>footer</h3>
                </div>
            </div>
        )
    }
}