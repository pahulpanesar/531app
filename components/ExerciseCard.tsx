import { Ionicons } from '@expo/vector-icons';

import React, { useReducer, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, FlatList, Button } from 'react-native';

import Set from './Set';
import { getData, setData } from '../mockData.js';

let dataObj: any = {};
export default function ExerciseCard(props) {
  const [sets, dispatch] = useReducer((sets, { type, value }) => {
    switch (type) {
      case "init":
        if (sets.length > 0) return [...sets];
        for (const set of value){
          sets.push(set);
        }
        return [...sets];
      case "add":
        let newSet = { ...sets[sets.length - 1] }
        newSet.name = isNaN(newSet.name) ? newSet.name : parseInt(newSet.name) + 1;
        return [...sets, newSet];
      case "remove":
        return null; //TODO
      default:
        return sets;
    }
  }, []);

  useEffect(() => {
    let dataString = getData(); //TODO ideally do this in a parent component, passing only the specific exercises data
    dataObj = JSON.parse(dataString);
    if (sets.length == 0) {
      dispatch({ type: "init", value: dataObj.data.users[0].workouts[0].exercises[0].sets });
    }
    return () => {
      setData(dataObj);
    }
  }, [dataObj]);

  return (
    <View style={styles.CardContainer}>
      {props.isMainExercise ? getMainExerciseCard(props.name) : getSupplementaryExerciseCard(props.name)}
      <View style={styles.Divider}></View>
      {getCardHeadings()}
      <FlatList scrollEnabled={false} data={sets} keyExtractor = { (item, index) => index.toString() } renderItem={({ item }) =>
        <Set setName={item.name} previousSet="-" weight={item.weight} reps={item.reps} restDuration={60} />
      } />
      <Button title="add new set" onPress={() => dispatch({ type: "add", value: null })}></Button>
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
      <View style={{ top: -6 }}>
        <Ionicons name="ios-checkmark" size={32} />
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
    "alignSelf": "flex-start",
    marginLeft: 25,
    width: 310,
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