import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Alert,
  Switch,
  AsyncStorage,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Actions} from 'react-native-router-flux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PinInput from 'react-native-pin-input';

import * as commonStyles from '../styles/commonStyles';


export default class InputPinCode extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pinCode: '',
      isKeep: false,
    };
  }


  static renderRightButton(props) {
    return (
      <TouchableOpacity onPress={() => alert("Right button")} style={styles.rightButton}> 
        <MaterialCommunityIcons name="close" size={30} color={commonStyles.grayColor} /> 
      </TouchableOpacity>
    );
  }


  static renderLeftButton(props) {
    return (
      <TouchableOpacity onPress={() => Actions.pop()} style={styles.rightButton}> 
        <MaterialCommunityIcons name="chevron-left" size={40} color={commonStyles.grayColor} /> 
      </TouchableOpacity>
    );
  }


  onPinCompleted(pin) {
    this.setState({pinCode: pin});

    //save pin code in local storage
    if (this.state.isKeep) {
      AsyncStorage.setItem(commonStyles.PinCode, pin, () => {
        
      });
    }
  }


  onChangeKeepPin(value) {
    this.setState({isKeep: value});

    let pinCode = "";
    if (value === true) {
      pinCode = this.state.pinCode;
    }
    //save pin code in local storage
    AsyncStorage.setItem(commonStyles.PinCode, pinCode, () => {
      
    });
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textDescription}>Please set the PIN for your new card. Remember to always keep your PIN private and do not share the number with anyone.</Text>
        <View style={styles.pinContainer}>
          <PinInput
            ref={pin => this.pin = pin}
            autoFocus={false}
            pinLength={4}
            pinItemStyle={{width: 50, height: 50}}
            pinItemProps={{keyboardType: 'number-pad', returnKeyType: 'done', secureTextEntry: true}}
            onPinCompleted={this.onPinCompleted.bind(this)}
          />
        </View>
        <View style={styles.keepPinContainer}>
          <Switch
            onValueChange={this.onChangeKeepPin.bind(this)}
            value={this.state.isKeep}
          />
          <Text style={styles.textKeepPin}>Keep my existing PIN</Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: commonStyles.mainBackgroundColor,
    padding: 20,
  },
  rightButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  pinContainer: {
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textDescription: {
    color: '#2b2c32',
    fontSize: 20,
  },
  textKeepPin: {
    color: '#2b2c32',
    fontSize: 16,
    marginLeft: 20,
  },
  keepPinContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
