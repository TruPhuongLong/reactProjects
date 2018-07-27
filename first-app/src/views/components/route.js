import React, { Component } from 'react';


class RouteComponent extends Component {

    redirect = () => {
        this.props.history.push('/event')
    }

  render() {
    return (
      <div >
        <button onClick={this.redirect}>Redirect /</button>
      </div>
    );
  }
}

export default RouteComponent;
