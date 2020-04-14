import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

import WorkoutCards from "../components/WorkoutCards";


export default function StartedWorkoutScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <WorkoutCards workoutName="bench" />
      </View>
    );
  }
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D6D5C9',
      alignItems: 'center',
    },
  });