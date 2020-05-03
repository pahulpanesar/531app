import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { CalendarStackScreen } from "./CalendarStackScreen";
import { SettingsStackScreen } from "./SettingsStackScreen";
import { WorkoutStackScreen } from "./WorkoutStackScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function MainNavigation() {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator initialRouteName="New Workout" screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'New Workout') {
                    iconName = focused
                        ? 'ios-add-circle'
                        : 'ios-add-circle-outline';
                }
                else if (route.name === 'Settings') {
                    iconName = 'ios-settings';
                }
                else if (route.name === 'Calendar') {
                    iconName = 'ios-calendar';
                }
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
        })} tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            style: {
                backgroundColor: '#B9BAA3',
            }
        } }>
            <Tab.Screen name="Calendar" component={CalendarStackScreen} />
            <Tab.Screen name="New Workout" component={WorkoutStackScreen} options={{ title: 'Start New Workout' }} />
            <Tab.Screen name="Settings" component={SettingsStackScreen} />
        </Tab.Navigator>
    );
}
