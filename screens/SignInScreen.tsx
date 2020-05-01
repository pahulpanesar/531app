import { AuthSession } from 'expo';
import React, { useContext } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  TouchableOpacity,
  Image
} from 'react-native';

import jwtDecoder from 'jwt-decode';
import UserContext from '../contexts/UserContext';
import Constants from '../Constants';

class SignInScreen extends React.Component {
  render() {
    return (
      <View style={this.styles.container}>
        <View>
          <TouchableOpacity
            /*style={styles.loginButton}*/
            onPress={() => this.loginWithAuth0()}
          >
            <Text style={{ backgroundColor: "white", fontSize: 36, padding: 20 }}> Login </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }


  styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D6D5C9',
      alignItems: 'center',
      justifyContent: "space-around"

    },
  });


  auth0ClientId = 'uEHmIDtqIzkkLFiwoo1XOo7DDnzZdD1u';
  auth0Domain = 'https://531.auth0.com';

  toQueryString(params) {
    return '?' + Object.entries(params)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
      .join('&');
  };

  async loginWithAuth0() {
    const redirectUrl = AuthSession.getRedirectUrl();
    const result = await AuthSession.startAsync({
      authUrl: `${this.auth0Domain}/authorize` + this.toQueryString({
        client_id: this.auth0ClientId,
        response_type: 'id_token',
        scope: 'openid profile',
        audience: 'https://531.auth0.com/api/v2/',
        redirect_uri: redirectUrl,
        nonce: "randomstring"
      }),
    });
    console.log("Result: ", result);
    if (result.type === 'success') {
      this.handleParams(result.params);
    } else {
      console.log("loginWithAuth0 problem");
    }
  }

  async handleParams (responseObj) {
    console.log("HIT");
    const encodedToken = responseObj.id_token;
    const decodedToken = jwtDecoder(encodedToken);
    console.log(decodedToken);
    let user = {
      token: encodedToken,
      name: decodedToken.given_name,
      id: decodedToken.sub,
      exp: decodedToken.exp
    }
    console.log("sign in users:", user);
    await AsyncStorage.setItem(
      Constants.UserStorageKey,
      JSON.stringify({
        user
      })
    );
    const get = await AsyncStorage.getItem(Constants.UserStorageKey);
    console.log("GETTING:< ", get);
    this.context(user);
  }
}

SignInScreen.contextType = UserContext;
export default SignInScreen;
