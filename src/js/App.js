import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import {Scene, Router} from 'react-native-router-flux';

import Introduce from './containers/introduce';
import ActivateCard from './containers/activateCard';
import SetPassword from './containers/setPassword';
import InputPinCode from './containers/inputPinCode';

import * as commonStyles from './styles/commonStyles';


export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="Introduce" component={Introduce} hideNavBar={true} />
          <Scene key="ActivateCard" component={ActivateCard} title="ActivateCard" titleStyle={styles.textTitle} />
          <Scene key="SetPassword" component={SetPassword} title="Set Your Password" titleStyle={styles.textTitle} />
          <Scene key="InputPinCode" component={InputPinCode} title="ActivateCard" titleStyle={styles.textTitle} />
        </Scene>
      </Router>
    );
  }
}


const styles = StyleSheet.create({
  textTitle: {
    color: commonStyles.buttonColor,
    fontSize: 22,
  },
});

