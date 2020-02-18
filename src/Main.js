import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import Header from './ortak/Header';
import LoginForm from './LoginForm';
import Card from './ortak/Card';
import CardSection from './ortak/CardSection';
import Spinner from './ortak/Spinner';
import Button from './ortak/Button';

class Main extends Component {
  state = {loggedIn: null};
  UNSAFE_componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBR-BmhPqRAWjEF3wfmLUlx-Ndldpqgrpc',
      authDomain: 'kimlikdogrulama-4f3e6.firebaseapp.com',
      databaseURL: 'https://kimlikdogrulama-4f3e6.firebaseio.com',
      projectId: 'kimlikdogrulama-4f3e6',
      storageBucket: 'kimlikdogrulama-4f3e6.appspot.com',
      messagingSenderId: '1087396168133',
      appId: '1:1087396168133:web:a14e414eee02d0c29f4bac',
      measurementId: 'G-ES4NG4Q8TD',
    });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }
  clickLogout() {
    firebase.auth().signOut();
  }
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={this.clickLogout.bind(this)}> ÇIKIŞ </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View>
            <Spinner size="large" />
          </View>
        );
    }
  }
  render() {
    return (
      <View>
        <Header headerText="Giris Ekranı" />
        {this.renderContent()}
      </View>
    );
  }
}
export default Main;
