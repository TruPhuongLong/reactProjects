import React, { Component } from 'react';
import { Header } from './components/header';
import { List } from './components/list';
import { fetchDataDummy, createNewItem } from '../service/api-service';
import InputBar from './components/inputbar';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            itemSource: []
        }
    }

    componentDidMount() {
        fetchDataDummy()
            .then(itemSource => this.setState({itemSource}));
    }

    _itemClose(item) {
        const itemSource = this.state.itemSource.filter(_item => _item.id !== item.id);
        this.setState({ itemSource });
    }

    _addNewItem(text){
        this.setState({
           itemSource: [...this.state.itemSource, createNewItem(text)]
        })
    }

    render() {
        const { itemSource } = this.state;
        return (
            <div >
                <Header bodyColor='white'>
                    <h1 style={{ textAlign: 'center' }}> im header </h1>
                </Header>
                <InputBar titlebutton="Add" eventHandle={this._addNewItem.bind(this)}/>
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