import React from 'react';
import { StyleSheet,View } from 'react-native';

import ExerciseCards from "../components/ExerciseCards";
import { ScrollView } from 'react-native-gesture-handler';


export default function StartedWorkoutScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <ScrollView>
          <ExerciseCards workoutName="bench" />
        </ScrollView>
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
  });