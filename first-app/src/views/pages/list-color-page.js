import React from 'react';
import { ColorForm } from '../components/color.form';
import { List } from '../components/list';
import { Card } from '../components/card';
import {ListStar} from '../components/list.star';

export class ListColorPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            itemSource: []
        }
    }

    addItem(title, color) {
        const itemSource = [...this.state.itemSource, { title, color }]
        this.setState({ itemSource })
    }

    closeItem(item){
        const itemSource = this.state.itemSource.filter(_item => _item !== item );
        this.setState({ itemSource })
    }

    render() {
        const { itemSource } = this.state;
        return (
            <div>
                <ColorForm onSubmit={this.addItem.bind(this)} />
                <List
                    itemSource={itemSource}
                    renderRow={(item, i) =>
                        <Card item={item} key={i} close={this.closeItem.bind(this)}>
                            <h1>{item.title}</h1>
                            <div style={{height: 100, width: '100%', backgroundColor: item.color}}></div>
                            <br />
                            <ListStar numberStar={6} rating={3}/>
                            <br /><br/>
                        </Card>
                    }
                />
            </div>
        )
    }
}
