import React from 'react';
import CalendarScreen from '../screens/CalendarScreen';
import { DetailsScreen } from "./DetailsScreen";
import { createStackNavigator } from '@react-navigation/stack';

export function CalendarStackScreen() {
    const CalendarStack = createStackNavigator();

    return (
        <CalendarStack.Navigator headerMode="none" screenOptions={{
            headerTintColor: '#222',
            headerStyle: { backgroundColor: '#B9BAA3' },
        }}>
            <CalendarStack.Screen name="Calendar" component={CalendarScreen} />
            <CalendarStack.Screen name="Details" component={DetailsScreen} />
        </CalendarStack.Navigator>);
}
