import React from 'react';
import PropTypes from 'prop-types';
import { Star } from './star';

export class ListStar extends React.Component {
    static defaultProps = {
        length : 5
    }

    static propTypes = {
        length: PropTypes.number,
        rating: PropTypes.number,
    }

    constructor(props){
        super(props);
        this.state = {
            selected: props.rating || -1
        }
    }

    onClick = (selected) => {
        this.setState({selected})
    }

    render() {
        return (
            <div style={localStyles.container}>
                {
                    [...Array(this.props.length)].map((e, i) => {
                        return <Star key={i} selected={i < this.state.selected} onClick={this.onClick.bind(this, i + 1)} />
                    })
                }
            </div>
        )
    }
}

const localStyles = {
    container: {
        alignSelf: 'center',
    }
}