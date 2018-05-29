import React from 'react';
import { Star } from './star';

export class ListStar extends React.Component {
    static defaultProps = {
        length : 5
    }

    constructor(props){
        super(props);
        const {length} = props;
        const arr = new Array(length).fill(false);
        this.state = {
            arrSelecteds: [...arr]
        }
    }

    onClick = (index) => {
        // console.log('onclick + ' + index)
        const arrSelecteds = this.state.arrSelecteds.map((e, i)=> i <= index ? true : false )
        this.setState({arrSelecteds})
    }

    render() {
        return (
            <div>
                {
                    this.state.arrSelecteds.map((e, i) => {
                        console.log(e, i)
                        return <Star key={i} selected={e} onClick={this.onClick.bind(this, i)} />
                    })
                }
            </div>
        )
    }
}