import React from 'react';
import SettingsScreen from '../screens/SettingsScreen';
import { SettingsStack } from './index';
import { DetailsScreen } from "./DetailsScreen";
export function SettingsStackScreen() {
    return (<SettingsStack.Navigator screenOptions={{
        headerTintColor: '#222',
        headerStyle: { backgroundColor: '#B9BAA3' },
    }}>
        <SettingsStack.Screen name="Settings" component={SettingsScreen} />
        <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>);
}
