import React, { useContext } from 'react';
import { View, Text, Button, AsyncStorage } from 'react-native';
import UserContext from './../contexts/UserContext';

class SettingsScreen extends React.Component {
  render(){
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings screen</Text>
        <Button
          title="Go to Details"
          onPress={() => 
            //this.props.navigation.navigate('Details')
            null
          }
        />
        <Button
          title="Logout"
          onPress={() => this.logout()}
        />
      </View>
    );
  }

  async logout () {
    console.log("NIGGA");
    console.log("NIGGA2");
    await AsyncStorage.removeItem(
        '@531-graphql:auth0'
    )
    this.context(null);
  }
}
  SettingsScreen.contextType = UserContext;
  export default SettingsScreen;