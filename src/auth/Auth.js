import { AuthSession } from 'expo';
import React from 'react';
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
const auth0ClientId = 'uEHmIDtqIzkkLFiwoo1XOo7DDnzZdD1u';
const auth0Domain = 'https://531.auth0.com';



const toQueryString = (params) => {
  return '?' + Object.entries(params)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
};

export default class Auth extends React.Component {

  state = {
    isLoggedIn: false
  }

  loginWithAuth0 = async () => {
    // get redirect URL to redirect after log in
    const redirectUrl = AuthSession.getRedirectUrl();
    console.log(redirectUrl);
    // perform login
    const result = await AuthSession.startAsync({
      authUrl: `${auth0Domain}/authorize` + toQueryString({
        client_id: auth0ClientId,
        response_type: 'id_token',
        scope: 'openid profile',
        audience: 'https://531.auth0.com/api/v2/',
        redirect_uri: redirectUrl,
        nonce: "randomstring"
      }),
    });
    console.log(result);
    // if success, handle the result
    if (result.type === 'success') {
      this.handleParams(result.params);
    }
  }

  handleParams = (responseObj) => {
    // handle error
    if (responseObj.error) {
      Alert.alert('Error', responseObj.error_description
        || 'something went wrong while logging in');
      return;
    }
    // store session in storage and redirect back to the app
    const encodedToken = responseObj.id_token;
    const decodedToken = jwtDecoder(encodedToken);
    AsyncStorage.setItem(
      '@531-graphql:auth0',
      JSON.stringify({
        token: encodedToken,
        name: decodedToken.name,
        id: decodedToken.sub,
        exp: decodedToken.exp
      })
    ).then(() => {
      this.props.login(decodedToken.sub, decodedToken.name, encodedToken)
    })
  }

  logout = () => {
    AsyncStorage.removeItem(
      '@531-graphql:auth0'
    ).then(() => {
      this.props.logout();
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity
            /*style={styles.loginButton}*/
            onPress={this.loginWithAuth0}
          >
            <Text style={{backgroundColor: "white", fontSize: 36, padding: 20}}> Login </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{backgroundColor: "red", fontSize: 36, padding: 20}}
            onPress={this.logout}
          >
            <Text /*style={styles.buttonText}*/ > Logout </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6D5C9',
    alignItems: 'center',
    justifyContent: "space-around"

  },
});