import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

export default function WorkoutCard(props) {
    return (
        <View style={styles.CardContainer}>
           {props.isMainExercise ? getMainExerciseCard(props.name) : getSupplementaryExerciseCard(props.name)}
           <View style={styles.Divider}></View>

        </View>
      );
    }

    function getMainExerciseCard(name) {
        return (
            <View style={styles.CardContainer}>
                <Text style={styles.MainExerciseHeading}>{name}</Text>
                <Text style={styles.RepsText}>Estimated 1RM: 220 lbs</Text>
                <Text style={styles.RepsText}>Reps Needed: 10</Text>
            </View>
        );
    }

    function getSupplementaryExerciseCard(name) {
        return (
            <View>
                <Text style={styles.SupplementaryExerciseHeading}>{name}</Text>
            </View>
        )
    }
  
    const styles = StyleSheet.create({
    CardContainer: {
        "backgroundColor": "#B9BAA3",
        "borderRadius": 10,
        "alignItems": 'center',
        "textAlign": 'center',
        "width": Dimensions.get("screen").width*.9,
        "margin": 5,
    },
      MainExerciseHeading: {
        "fontFamily": "Futura",
        "fontStyle": "normal",
        "fontWeight": "bold",
        "fontSize": 45,
        "lineHeight": 53,
        "color": "#902923",
        "padding": 10
      },
      RepsText: {
        "display": "flex",
        "flexDirection": "row",
      },
      Divider: {
        "borderBottomColor": 'black',
        "borderBottomWidth": 1,
      },
      HeadingsText: {
        "fontFamily": "Open Sans",
        "fontStyle": "normal",
        "fontWeight": "bold",
        "fontSize": 14,
        "lineHeight": 19,
        "color": "#000000"
      },
      SupplementaryExerciseHeading: {
        "display": "flex",
        "flexDirection": "row",
        "padding": 10
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