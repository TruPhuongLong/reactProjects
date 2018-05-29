import React, { Component } from 'react';
import { Header } from './components/header';
import { List } from './components/list';
import { fetchDataDummy, createNewItem } from '../service/api-service';
import InputBar from './components/inputbar';
// import {fromJS} from 'immutable';

export default class ListCardPage extends Component {
    constructor() {
        super();
        this.state = {
            itemSource: [],
            time: new Date()

        }
    }
    //oke

    componentDidMount() {
        fetchDataDummy()
            .then(itemSource => this.setState({ itemSource }));
        this.timeid = setInterval(()=> this._tick(), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timeid);
    }

    _itemClose(item) {
        const itemSource = this.state.itemSource.filter(_item => _item.id !== item.id);
        this.setState({ itemSource });
    }

    _addNewItem(text) {
        this.setState({
            itemSource: [...this.state.itemSource, createNewItem(text)]
        })
    }

    _tick() {
        this.setState({
            time: new Date()
        })
    }

    render() {
        const { itemSource } = this.state;
        const newElement = <h2>It is {this.state.time.getHours()} {this.state.time.getMinutes()} {this.state.time.getSeconds()} .</h2>
        return (
            <div >
                <Header bodyColor='white'>
                    <h1 style={{ textAlign: 'center' }}> im header </h1>
                </Header>
                <InputBar titlebutton="Add" eventHandle={this._addNewItem.bind(this)} />
                {newElement}
                <List itemSource={itemSource} itemClose={this._itemClose.bind(this)}>
                    <h1>oke</h1>
                </List>
                <Header bodyColor='white'>
                    <h1 style={{ textAlign: 'center' }}> im footer </h1>
                </Header>
            </div>
        )
    }
}