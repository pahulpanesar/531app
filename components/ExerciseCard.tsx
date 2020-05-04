import { Ionicons } from '@expo/vector-icons';

import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

import Set from './Set';

export default function ExerciseCard(props) {
  return (
    <View style={styles.CardContainer}>
      {props.isMainExercise ? getMainExerciseCard(props.name) : getSupplementaryExerciseCard(props.name)}
      <View style={styles.Divider}></View>
      {getCardHeadings()}
      <Set setName="W" previousSet="45 lbs x 8" weight="45" reps="8"/>
      <Set setName="W" previousSet="95 lbs x 8" weight="95" reps="8"/>
      <Set setName="1" previousSet="125 lbs x 5" weight="130" reps="5"/>
      <Set setName="2" previousSet="125 lbs x 5" weight="130" reps="5"/>
      <Set setName="3" previousSet="125 lbs x 5" weight="130" reps="5"/>
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

function getCardHeadings() {
  return (
    <View style={styles.HeadingsContainer}>
      <Heading t="Set" />
      <Heading t="Previous Set" />
      <Heading t="lbs" />
      <Heading t="Reps" />
      <Heading t="check" />
    </View>
  )
}

function Heading(props) {
  if (props.t == "check") {
    return (
      <View style={{top: -6}}>
          <Ionicons name="ios-checkmark" size={32}/>
      </View>
    )
  }
  return (
      <View>
        <Text style={styles.HeadingsText}>{props.t}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  CardContainer: {
    "backgroundColor": "#B9BAA3",
    "borderRadius": 10,
    "alignItems": 'center',
    "textAlign": 'center',
    "width": Dimensions.get("screen").width * .9,
    "margin": 5,
    "padding": 3
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
  HeadingsContainer: {
    "flexDirection": 'row',
    "justifyContent": 'space-between',
    width: 325,
    height: 25
  },
  HeadingsText: {
    "fontFamily": "Futura",
    "fontWeight": "bold",
    "fontSize": 14,    
  },
  SupplementaryExerciseHeading: {
    "fontFamily": "Futura",
    "fontStyle": "normal",
    "fontWeight": "bold",
    "fontSize": 35,
    "lineHeight": 53,
    "color": "#902923",
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