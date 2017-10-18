import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Alert,
} from 'react-native';

import AppIntro from 'react-native-app-intro';
import {Actions} from 'react-native-router-flux'
import * as commonStyles from '../styles/commonStyles';


export default class Introduce extends Component {
  
  constructor(props) {
    super(props);
  }

  
  onSlideChangeHandle(index, total) {
    console.log(index, total);
  }
  

  onLogin() {
    Alert.alert('Tapped login button!');    
  }


  onSignup() {
    Actions.ActivateCard();
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.introduceContainer}>
          <AppIntro
            customStyles={customIntroStyles}
            dotColor='#4062b0'
            onSlideChange={this.onSlideChangeHandle.bind(this)}
            showSkipButton={false}
            showDoneButton={false}
          >
            <View style={styles.slide}>
              <Text style={styles.textDescription}>Let's Get Started!</Text>          
            </View>
            <View style={styles.slide}>
              <Text style={styles.textDescription}>Let's Get Started!</Text>
            </View>
            <View style={styles.slide}>
              <Text style={styles.textDescription}>Let's Get Started!</Text>
            </View>
          </AppIntro>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity activeOpacity={.5} style={styles.buttonWrapper} onPress={this.onLogin.bind(this)}>
            <Text style={ styles.textButton }>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.5} style={styles.buttonWrapper} onPress={this.onSignup.bind(this)}>
            <Text style={ styles.textButton }>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: commonStyles.introduceBackgroundColor,
  },
  introduceContainer: {
    flex: 1,
  },
  slide: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    marginLeft: 10,
    marginBottom: 60,
  },
  textDescription: {
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold',
  },
  buttonContainer: {
    height: 50,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginBottom: 20,
  },
  buttonWrapper: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    borderRadius: 5,
    borderWidth: 5,
    borderColor: '#fff',
    borderStyle: 'solid',
  },
  textButton: {
    justifyContent: 'center',
    alignItems: 'center',
    color: commonStyles.buttonColor,
    fontSize: 20,
  },
});


const customIntroStyles = {
  dotStyle: {
    width: 7,
    height: 7,
    borderRadius: 7,
    marginLeft: 7,
    marginRight: 7,
    marginTop: 7,
    marginBottom: 7,
  },
  paginationContainer: {
    flex: 1,    
    marginLeft: 20,
    marginBottom: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  btnContainer: {
    flex: 0,
  },
};
