import React, { useContext } from 'react';
import { View, Text, Button, AsyncStorage } from 'react-native';

export default function SettingsScreen(props) {

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings screen</Text>
        <Button
          title="Go to Details"
          onPress={() => 
            props.navigation.navigate('Details')
          }
        />
        <Button
          title="Logout"
          onPress={logout}
        />
      </View>
    );

  async function logout () {
    console.log("NIGGA");
    await AsyncStorage.removeItem(
        '@531-graphql:auth0'
    )
  }
}