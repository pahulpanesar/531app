import React from 'react';
import AuthNavigation from "./navigation";
import MainNavigation from "./navigation/MainNavigation";
import Auth from './src/auth/Auth';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';

export default class App extends React.Component {
  state = {
    isLoggedIn: false,
    userId: null,
    username: null,
    jwt: null,
    loading: false
  }
  login = (userId, name, token) => {
    this.setState({
      isLoggedIn: true,
      userId,
      name,
      jwt: token,
      loading: false
    });
  }

  logout = () => {
    this.setState({
      isLoggedIn: false,
      loading: false
    })
  }

  async componentDidMount() {
    AsyncStorage.getItem('@531-graphql:auth0').then((session) => {
      if (session) {
        const obj = JSON.parse(session);
        if (obj.exp > Math.floor(new Date().getTime() / 1000)) {
          this.login(obj.id, obj.name, obj.token)
        } else {
          this.logout();
        }
      } else {
        this.logout()
      }
    })
  }

  render = () => {
    const { isLoggedIn, userId, username, loading } = this.state;
    if (loading) {
      return <View><Text>Loading...</Text></View>
    }
    if (isLoggedIn) {
      return (<AuthNavigation />)
    } else {
      return (
        <AuthNavigation />
        // <Auth login={this.login} />
        )
    }
  }
  
}
