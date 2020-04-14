import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

import WorkoutCards from "../components/WorkoutCards";


export default function MainWorkoutScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <WorkoutCards workoutName="bench" />
        
        <TouchableOpacity
          style={styles.startButtonContainer}
          onPress={() => navigation.navigate('Started Workout')}
        >
          <Text style={styles.startButtonText}>START ></Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D6D5C9',
      alignItems: 'center',
      justifyContent: "space-around"
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
    },
    cardText: {
      "fontStyle": "normal",
      "fontWeight": "bold",
      "fontSize": 55,
      "color": "#902923",
    },
    cardImage: {
      "width": 330,
      "height": 315,
    },
    cardSubtitle: {
      "fontStyle": "normal",
      "fontWeight": "bold",
      "fontSize": 18,
      "textAlign": "center",
      "color": "#222"
    },
    startButtonContainer: {
      "backgroundColor": "#A3BAA4",
      "justifyContent": 'center',
      "borderRadius": 10,
      "width": 260,
      "height": 100,
      "alignItems": 'center',
      "margin": 75,
    },
    startButtonText: {
      "fontStyle": "normal",
      "fontWeight": "bold",
      "lineHeight": 65,
      "color": "#222",
      "fontSize": 55,
    },
  });