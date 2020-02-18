import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Main from './src/Main';
import LoginForm from './src/LoginForm';
import firebase from 'firebase';

AppRegistry.registerComponent('kimlikdogrulama', () => Main);
