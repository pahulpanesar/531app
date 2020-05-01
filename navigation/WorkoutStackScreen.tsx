import React from 'react';
import NewWorkoutScreen from '../screens/NewWorkoutScreen';
import MainWorkoutScreen from '../screens/MainWorkoutScreen';
import StartedWorkoutScreen from '../screens/StartedWorkoutScreen';
import { MainStack } from './index';
import { DetailsScreen } from "./DetailsScreen";
export function WorkoutStackScreen() {
    return (<MainStack.Navigator screenOptions={{
        headerTintColor: '#222',
        headerStyle: { backgroundColor: '#B9BAA3' },
    }}>
        <MainStack.Screen name="New Workout" component={NewWorkoutScreen} />
        <MainStack.Screen name="Main Workout" component={MainWorkoutScreen} />
        <MainStack.Screen name="Started Workout" component={StartedWorkoutScreen} />
        <MainStack.Screen name="Details" component={DetailsScreen} />

    </MainStack.Navigator>);
}
