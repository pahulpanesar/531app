import React, { useContext } from 'react';
import { View, Text, Button, AsyncStorage } from 'react-native';
import UserContext from '../contexts/UserContext';

export default function SettingsScreen(props) {
  const setUser = useContext(UserContext);

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
    await AsyncStorage.removeItem(
        '@531-graphql:auth0'
    ).then(() => {
      setUser(null);
    })
  }
}