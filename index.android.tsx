import * as React from 'react';
import {
  AppRegistry,
} from 'react-native';
import App from "./app/app";


export default class TW1LL_MSG extends React.Component<any,any> {
  render() {
    return (
      <App/>
    );
  }
}


AppRegistry.registerComponent('TW1LL_MSG', () => TW1LL_MSG);
