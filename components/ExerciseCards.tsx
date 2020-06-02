import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ExerciseCard from './ExerciseCard';


export default function ExerciseCards(props) {
    return (
      <View>
        <ExerciseCard name={getExerciseFromWorkoutName(props.workoutName)} isMainExercise={true} />
        <ExerciseCard name="Dips" />
        <ExerciseCard name="Incline Press" />
      </View>
    );
  }

  function getExerciseFromWorkoutName(name) {
    if (name == "bench press") {
      return "Bench Press"
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D6D5C9',
      alignItems: 'center',
      justifyContent: "space-around",
      "width": 450,
    },
    welcomeText: {
      "fontStyle": "normal",
      "fontWeight": "bold",
      "fontSize": 36,
      "color": "#222",
    },
    mainCard: {
      "width": 350,
      "height": 420,
      "backgroundColor": "#B9BAA3",
      "borderRadius": 10,
      "alignItems": 'center',
      flex: 1
    },
    cardText: {
      "fontStyle": "normal",
      "fontWeight": "bold",
      "fontSize": 55,
      "color": "#902923",
    },
});