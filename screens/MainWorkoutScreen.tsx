import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';

import ExerciseCards from "../components/ExerciseCards";
import StartButton from '../components/StartButton';


export default function MainWorkoutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <ExerciseCards workoutName="bench" />
      </ScrollView>
      <StartButton navigate={() => navigation.navigate('Started Workout')} />

{/* 
      <TouchableOpacity
        activeOpacity={0}
        style={styles.startButtonContainer}
        onPress={() => navigation.navigate('Started Workout')}
      >
        <Text style={styles.startButtonText}>START ></Text>
      </TouchableOpacity> */}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6D5C9',
    alignItems: 'center',
    justifyContent: "space-around",
    paddingTop: 50
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
  
});