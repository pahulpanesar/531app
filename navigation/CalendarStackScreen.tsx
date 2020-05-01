import React from 'react';
import CalendarScreen from '../screens/CalendarScreen';
import { CalendarStack } from './index';
import { DetailsScreen } from "./DetailsScreen";
export function CalendarStackScreen() {
    return (<CalendarStack.Navigator screenOptions={{
        headerTintColor: '#222',
        headerStyle: { backgroundColor: '#B9BAA3' },
    }}>
        <CalendarStack.Screen name="Calendar" component={CalendarScreen} />
        <CalendarStack.Screen name="Details" component={DetailsScreen} />
    </CalendarStack.Navigator>);
}
