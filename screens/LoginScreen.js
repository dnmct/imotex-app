import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import { inject, observer } from 'mobx-react/native';

import Box from '../commons/Box';
import { NavigationService } from '../api/NavigationService';
import { images } from '../constants/Images';
import theme from '../constants/Theme';

@inject('currentUser')
class LoginScreen extends Component {
  state = {
    username: '',
    password: '',
    loginError: false,
  };
  componentDidMount() {
    // setTimeout(() => {
    //   NavigationService.navigate('Main');
    // }, 2000);
  }

  handleLogin = () => {
    if (this.state.username === 'user' && this.state.password === 'password') {
      NavigationService.navigate('Main');
    } else {
      this.setState({ loginError: true });
    }
  };

  render() {
    return (
      <ImageBackground
        style={styles.image}
        resizeMode="cover"
        source={images.loginScreen}
      >
        <View style={styles.loginBox}>
          <Text style={styles.title}>Anmelden</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Benutzername oder Email"
              onChangeText={username =>
                this.setState({ username: username.toLocaleLowerCase() })
              }
              value={this.state.username}
              style={styles.input}
            />
            <TextInput
              placeholder="Passwort"
              onChangeText={password =>
                this.setState({ password: password.toLocaleLowerCase() })
              }
              value={this.state.password}
              style={styles.input}
            />
            {this.state.loginError && (
              <Text style={styles.errorMsg}>Falsche Daten</Text>
            )}
          </View>
          <TouchableOpacity style={styles.forgot}>
            <Text style={styles.forgotText}>Passwort vergessen?</Text>
          </TouchableOpacity>
          <View style={styles.submitContainer}>
            <TouchableOpacity
              style={[styles.button, styles.firstButton]}
              onPress={() => NavigationService.back()}
            >
              <Text style={styles.buttonText}>Abbruch</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
              <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: undefined,
    height: undefined,
    paddingBottom: '25%',
  },
  loginBox: {
    width: '80%',
    backgroundColor: theme.colors.grey,
    borderRadius: 10,
    opacity: 0.9,
  },
  title: {
    textAlign: 'center',
    color: theme.colors.red,
    marginVertical: 10,
    fontWeight: '600',
  },
  inputContainer: {
    marginHorizontal: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.darkGrey,
    padding: 5,
    marginBottom: 5,
  },
  errorMsg: {
    color: theme.colors.red,
  },
  forgot: {
    marginTop: 5,
    marginBottom: 10,
  },
  forgotText: {
    textAlign: 'center',
  },
  submitContainer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: theme.colors.darkGrey,
  },
  button: {
    flex: 1,
  },
  firstButton: {
    borderRightWidth: 1,
    borderColor: theme.colors.darkGrey,
  },
  buttonText: {
    padding: 10,
    textAlign: 'center',
  },
});

export default LoginScreen;
