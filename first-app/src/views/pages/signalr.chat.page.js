import React, { Component } from 'react';
// import { HubConnection } from '@aspnet/signalr';
// import {HubConnection } from '@aspnet/signalr/dist/browser/signalr.js';

import {HubConnection} from '@aspnet/signalr/dist/browser/signalr.js';

// import { HubConnection } from '@aspnet/signalr-client/dist/src/HubConnection.d';


export default class SignalrChat extends Component {

    componentDidMount() {
        // let connection = new HubConnectionBuilder()
        //     .withUrl("http://localhost:60579")
        //     .build();

        // const connection = new HubConnection('http://localhost:60579');
        //     const connection = new HubConnection('http://localhost:60579') ;

        // connection.on("returnMessage", data => {
        //     console.log(data);
        // });

        // connection.start()
        //     .then(() => connection.invoke("returnMessage", "Hello"))
        //     .then(mes => console.log('get: ' + mes))

        var connection = new HubConnection('http://localhost:60579', (logger)=>{}, (protocol)=>{});
        var proxy = connection.createHubProxy('echo1');

        // atempt connection, and handle errors
        connection.start()
            .done(function () { console.log('Now connected, connection ID=' + connection.id); })
            .fail(function () { console.log('Could not connect'); });
    }

    render() {
        return (
            <div>
                <h1>hi im signalr</h1>
            </div>
        )
    }
}