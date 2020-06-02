import React, {useReducer, useEffect} from 'react';
import { StyleSheet,View, Button } from 'react-native';

import ExerciseCards from "../components/ExerciseCards";
import { ScrollView, FlatList } from 'react-native-gesture-handler';

import { getData, setData } from '../mockData.js';
import ExerciseCard from '../components/ExerciseCard';

let dataObj: any = {};
export default function StartedWorkoutScreen({ navigation }) {
  const [exercises, dispatch] = useReducer((exercises, { type, value }) => {
    switch (type) {
      case "init":
        if (exercises.length > 0) return [...exercises];
        for (const exercise of value){
          exercises.push(exercise);
        }
        return [...exercises];
      case "add":
        let newExercise = { ...exercises[exercises.length - 1] }
        newExercise.name = "new exercise";
        return [...exercises, newExercise];
      case "remove":
        return null; //TODO
      default:
        return exercises;
    }
  }, []);

  useEffect(() => {
    let dataString = getData(); //TODO ideally do this in a parent component, passing only the specific exercises data
    dataObj = JSON.parse(dataString);
    if (exercises.length == 0) {
      dispatch({ type: "init", value: dataObj.data.users[0].workouts[0].exercises });
    }
    return () => {
      setData(dataObj);
    }
  }, [dataObj]);

    return (
      <View style={styles.container}>
        <FlatList data={exercises} keyExtractor = { (item, index) => index.toString() } renderItem={({ item }) =>
        <ExerciseCard name={item.name}/>
      } />
        <Button title="add new exercise" onPress={() => dispatch({ type: "add", value: null })}></Button>
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