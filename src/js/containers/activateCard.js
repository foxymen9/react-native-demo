import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Text,
  View,
  Alert,
  Keyboard,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Actions} from 'react-native-router-flux'
import {CreditCardInput} from "react-native-credit-card-input";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import * as commonStyles from '../styles/commonStyles';


export default class ActivateCard extends Component {

  constructor(props) {
    super(props);

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


  onContinue() {
    Keyboard.dismiss();
    Actions.SetPassword();
  }


  onChangeCreditCard(form) {
    console.log(form);
  };

  
  render() {
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <CreditCardInput onChange={this.onChangeCreditCard.bind(this)} />
          <TouchableOpacity activeOpacity={.5} style={styles.buttonWrapper} onPress={this.onContinue.bind(this)}>
            <Text style={ styles.textButton }>Continue</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: commonStyles.mainBackgroundColor,
  },
  rightButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  buttonWrapper: {
    flex: 1,
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: commonStyles.buttonColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 5,
    borderColor: commonStyles.buttonColor,
    borderStyle: 'solid',
    marginHorizontal: 15,
    marginVertical: 25,
  },
  textButton: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: 20,
  },
});
