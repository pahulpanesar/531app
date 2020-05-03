import React from 'react';
import SettingsScreen from '../screens/SettingsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { DetailsScreen } from "./DetailsScreen";

export function SettingsStackScreen() {
    const SettingsStack = createStackNavigator();

    return (<SettingsStack.Navigator headerMode="none" screenOptions={{
        headerTintColor: '#222',
        headerStyle: { backgroundColor: '#B9BAA3' },
    }}>
        <SettingsStack.Screen name="Settings" component={SettingsScreen} />
        <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>);
}
