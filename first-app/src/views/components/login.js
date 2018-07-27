import React, { Component } from 'react';
import './App.css';
import firebase from '../../service/firebase-service';

class Login extends Component {

  login = (email, password) => {
    console.log('login')
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(res => console.log(res))
    .catch(error => console.log(error))
  }

  signup = (email, password) => {
    firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(res => console.log(res))
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <h1>Hi Firebase </h1>
        <button onClick={()=>this.login('teo@gmail.com', '123456')}>Login</button>
        <button onClick={()=>this.signup('teo@gmail.com', '123456')}>Signup</button>
      </div>
    );
  }
}

export default Login;
