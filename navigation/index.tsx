import { Ionicons } from '@expo/vector-icons';

import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import NewWorkoutScreen from '../screens/NewWorkoutScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CalendarScreen from '../screens/CalendarScreen';
import MainWorkoutScreen from '../screens/MainWorkoutScreen';
import StartedWorkoutScreen from '../screens/StartedWorkoutScreen';



const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function DetailsScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
        </View>
    );
}

const CalendarStack = createStackNavigator();

function CalendarStackScreen() {
    return (
        <CalendarStack.Navigator
            screenOptions={{
                headerTintColor: '#222',
                headerStyle: { backgroundColor: '#B9BAA3' },
            }}
        >
            <CalendarStack.Screen name="Calendar" component={CalendarScreen} />
            <CalendarStack.Screen name="Details" component={DetailsScreen} />
        </CalendarStack.Navigator>
    );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
    return (
        <SettingsStack.Navigator
            screenOptions={{
                headerTintColor: '#222',
                headerStyle: { backgroundColor: '#B9BAA3' },
            }}
        >
            <SettingsStack.Screen name="Settings" component={SettingsScreen} />
            <SettingsStack.Screen name="Details" component={DetailsScreen} />
        </SettingsStack.Navigator>
    );
}

function WorkoutStackScreen() {
    return (
        <MainStack.Navigator
            screenOptions={{
                headerTintColor: '#222',
                headerStyle: { backgroundColor: '#B9BAA3' },
            }}
        >
            <MainStack.Screen name="New Workout" component={NewWorkoutScreen} />
            <MainStack.Screen name="Main Workout" component={MainWorkoutScreen} />
            <MainStack.Screen name="Started Workout" component={StartedWorkoutScreen} />
            <MainStack.Screen name="Details" component={DetailsScreen} />

        </MainStack.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'New Workout') {
                            iconName = focused
                                ? 'ios-add-circle'
                                : 'ios-add-circle-outline';
                        } else if (route.name === 'Settings') {
                            iconName = 'ios-settings';
                        } else if (route.name === 'Calendar') {
                            iconName = 'ios-calendar';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                    style: {
                        backgroundColor: '#B9BAA3',
                    }
                }}
            >
                <Tab.Screen name="Calendar" component={CalendarStackScreen} />
                <Tab.Screen name="New Workout" component={WorkoutStackScreen}  options={{ title: 'Start New Workout' }} />
                <Tab.Screen name="Settings" component={SettingsStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}