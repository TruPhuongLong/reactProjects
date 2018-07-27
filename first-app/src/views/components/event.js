import React, { Component } from 'react';
import './event.css'


class Event extends Component {

    constructor(){
        super();
        // window.addEventListener('scroll', this.scroll);
        window.addEventListener('resize', this.resize);
    }

    scroll = (e) => {
        console.dir(e.target.body)
    }

    resize = (e) => {
        console.dir(e.target.innerWidth)
    }

  render() {
    return (
      <div className="container">

      </div>
    );
  }
}

export default Event;
