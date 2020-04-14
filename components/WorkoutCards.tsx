import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';


export default function WorkoutCards(props) {
    return (
      <View style={{flex: 1, backgroundColor: '#999', }}>
        <Text>Workout Name: {props.workoutName}</Text>
        <View style={{flex: 1}}>
            <Text>Exercise 1</Text>
        </View>

        <View style={styles.mainCard}>
            <Text>Exercise 2</Text>
        </View>

        <View style={{flex: 1, backgroundColor: '#777'}}>
            <Text>Exercise 3</Text>
        </View>
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
      flex: 1
    },
    cardText: {
      "fontStyle": "normal",
      "fontWeight": "bold",
      "fontSize": 55,
      "color": "#902923",
    },
});