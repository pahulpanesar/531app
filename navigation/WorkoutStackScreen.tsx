import React from 'react';
import NewWorkoutScreen from '../screens/NewWorkoutScreen';
import MainWorkoutScreen from '../screens/MainWorkoutScreen';
import StartedWorkoutScreen from '../screens/StartedWorkoutScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { DetailsScreen } from "./DetailsScreen";

export function WorkoutStackScreen() {
    const MainStack = createStackNavigator();

    return (
        <MainStack.Navigator headerMode="none" >
            <MainStack.Screen name="New Workout" component={NewWorkoutScreen} />
            <MainStack.Screen name="Main Workout" component={MainWorkoutScreen} />
            <MainStack.Screen name="Started Workout" component={StartedWorkoutScreen} />
            <MainStack.Screen name="Details" component={DetailsScreen} />
        </MainStack.Navigator>);
}

