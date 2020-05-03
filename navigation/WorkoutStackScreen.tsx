import React from 'react';
import { StyleSheet } from 'react-native';
import NewWorkoutScreen from '../screens/NewWorkoutScreen';
import MainWorkoutScreen from '../screens/MainWorkoutScreen';
import StartedWorkoutScreen from '../screens/StartedWorkoutScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { DetailsScreen } from "./DetailsScreen";

export function WorkoutStackScreen() {
    const MainStack = createStackNavigator();

    return (
        <MainStack.Navigator headerMode="none" screenOptions={{
            headerTintColor: '#222',
            headerStyle: { backgroundColor: '#B9BAA3' },
        }}>
            <MainStack.Screen name="New Workout" component={NewWorkoutScreen} />
            <MainStack.Screen name="Main Workout" component={MainWorkoutScreen} />
            <MainStack.Screen name="Started Workout" component={StartedWorkoutScreen} />
            <MainStack.Screen name="Details" component={DetailsScreen} />

        </MainStack.Navigator>);
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D6D5C9',
        alignItems: 'center',
        justifyContent: "space-around",
    },
});

