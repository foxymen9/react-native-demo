import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Alert,
  Keyboard,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {Actions} from 'react-native-router-flux'
import TextField from 'react-native-md-textinput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import * as commonStyles from '../styles/commonStyles';


export default class SetPassword extends Component {

  constructor(props) {
    super(props);

    this.state = {
      newPassword: '',
      confirmNewPassword: '',
      isEightCharacters: false,
      isCapitalLetter: false,
      isOneNumber: false,
      isMatch: false,
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


  onContinue() {
    Keyboard.dismiss();
    if (!this.state.isMatch) {
      return;
    }

    Actions.InputPinCode();
  }

  
  checkCapitalLetter(text) {
    // match all capital letters and store in array letters
    const letters = text.match(/[A-Z]/g);

    if(!letters){
      return false;
    } else {
      return true;
    }    
  }


  checkNumberOne(text) {
    // match all capital letters and store in array letters
    const letters = text.match(/\d/g);

    if(!letters){
      return false;
    } else {
      return true;
    }    
  }


  onChangeNewPassword(text) {
    this.setState({newPassword: text});

    // check 8 characters
    if (text.length >= 8) {
      this.setState({isEightCharacters: true});
    } else {
      this.setState({isEightCharacters: false});
    }

    // check capital letter
    if (this.checkCapitalLetter(text)) {
      this.setState({isCapitalLetter: true});
    } else {
      this.setState({isCapitalLetter: false});
    }

    // check one number
    if (this.checkNumberOne(text)) {
      this.setState({isOneNumber: true});
    } else {
      this.setState({isOneNumber: false});
    }

    //check match
    if ((text.length > 0) && (text === this.state.confirmNewPassword)) {
      this.setState({isMatch: true});
    } else {
      this.setState({isMatch: false});
    }
  }


  onChangeConfirmNewPassword(text) {
    this.setState({confirmNewPassword: text});

    //check match
    if ((text.length > 0) && (text === this.state.newPassword)) {
      this.setState({isMatch: true});
    } else {
      this.setState({isMatch: false});
    }
  }

  
  render() {
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={styles.mainContentContainer}>
            <TextField
              ref="newPassword"
              label='Password'
              autoCorrect={false}
              inputStyle={inputStyle}
              labelStyle={labelStyle}
              wrapperStyle={wrapperStyle}
              highlightColor='#fff'
              borderColor='#fff'
              secureTextEntry={true}
              returnKeyType='next'
              value={this.state.newPassword}
              onChangeText={this.onChangeNewPassword.bind(this)}
              onSubmitEditing={() => this.refs.confirmPassword.focus()}
            />
            <View style={styles.checkContainer}>
              <View style={styles.checkRowContainer}>
                <MaterialCommunityIcons name="check" size={20} color={this.state.isEightCharacters ? commonStyles.buttonColor : commonStyles.grayColor} /> 
                <Text style={[styles.textDescription, {color: this.state.isEightCharacters ? commonStyles.buttonColor : commonStyles.grayColor}]}>8 characters</Text>
              </View>
              <View style={styles.checkRowContainer}>
                <MaterialCommunityIcons name="check" size={20} color={this.state.isCapitalLetter ? commonStyles.buttonColor : commonStyles.grayColor} /> 
                <Text style={[styles.textDescription, {color: this.state.isCapitalLetter ? commonStyles.buttonColor : commonStyles.grayColor}]}>Capital letter</Text>
              </View>
              <View style={styles.checkRowContainer}>
                <MaterialCommunityIcons name="check" size={20} color={this.state.isOneNumber ? commonStyles.buttonColor : commonStyles.grayColor} /> 
                <Text style={[styles.textDescription, {color: this.state.isOneNumber ? commonStyles.buttonColor : commonStyles.grayColor}]}>One number</Text>
              </View>
            </View>
            <TextField
              ref="confirmPassword"
              label='Confirm new password'
              autoCorrect={false}
              inputStyle={inputStyle}
              labelStyle={labelStyle}
              wrapperStyle={wrapperStyle}
              highlightColor='#fff'
              borderColor='#fff'
              secureTextEntry={true}
              returnKeyType='done'
              value={this.state.confirmNewPassword}
              onChangeText={this.onChangeConfirmNewPassword.bind(this)}
              onSubmitEditing={() => this.onContinue()}
            />
            <View style={styles.checkRowContainer}>
              <Entypo name="check" size={24} color={this.state.isMatch ? commonStyles.matchColor : commonStyles.grayColor} /> 
              <Text style={[styles.textMatch, {color: this.state.isMatch ? commonStyles.matchColor : commonStyles.grayColor}]}>Match!</Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity activeOpacity={.5} style={styles.buttonWrapper} onPress={this.onContinue.bind(this)}>
              <Text style={ styles.textButton }>Continue</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: commonStyles.mainBackgroundColor,
  },
  rightButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  mainContentContainer: {
    alignSelf: 'stretch',
    margin: 20,
  },
  checkContainer: {
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  checkRowContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textDescription: {
    color: commonStyles.grayColor,
    fontSize: 18,
    marginLeft: 10,
  },
  textMatch: {
    color: commonStyles.grayColor,
    fontSize: 22,
    marginLeft: 10,
  },
  buttonContainer: {
    width: commonStyles.screenWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',    
  },
  buttonWrapper: {
    flex: 1,
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: commonStyles.buttonColor,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,    
    borderRadius: 5,
    borderWidth: 5,
    borderColor: commonStyles.buttonColor,
    borderStyle: 'solid',
  },
  textButton: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: 20,
  },
});


const inputStyle = {
  fontSize: 16,
  borderBottomWidth: 1,
  borderBottomColor: commonStyles.grayColor,
};


const labelStyle={
  color: commonStyles.grayColor,
  fontSize: 14,
};


const wrapperStyle={
};
