/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import firebase from 'firebase';

import {Header, Spinner, Button,Card} from './src/components/common'
import LoginForm from './src/components/LoginForm'


export default class App extends Component<{}> {
  constructor(props){
    super(props);
    this.state={
      loggedIn:null
    }
  }
  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyCo00jvnLf1E0BMy2UMUoNO8_LygHdg9Z8",
      authDomain: "authentication-20d1d.firebaseapp.com",
      databaseURL: "https://authentication-20d1d.firebaseio.com",
      projectId: "authentication-20d1d",
      storageBucket: "authentication-20d1d.appspot.com",
      messagingSenderId: "437816281882"
    });

    firebase.auth().onAuthStateChanged((user)=>{
      if (user){
        this.setState({loggedIn:true})
      }
      else{
        this.setState({loggedIn:false})
      }
    })
  }


  renderContent(){
    switch(this.state.loggedIn){
      case true:
        return <View style={styles.containerStyle}><Button onPress={()=>firebase.auth().signOut()}>Log Out</Button></View>
      case false:
        return <LoginForm />
      default:
        return <View style={styles.containerStyle}><Spinner /></View>
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        {this.renderContent()}
      </View>
    );
  }
}

const styles={
  containerStyle:{
    height:50,
    paddingTop:10,
  }
}