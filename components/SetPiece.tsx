import { Ionicons } from '@expo/vector-icons';

import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export default function SetPiece(props) {
    return (
        <View style={props.isChecked === true ? styles.checkedContainer : styles.container}>
            {renderPiece(props)}
        </View>
    );

    function renderPiece(props) {
        switch (props.pieceName) {
            case 'setName':
                return <TextInput style={styles.AlignSetName}>{props.setName}</TextInput>
            case 'previousSet':
                return <Text style={styles.AlignPrevious}>{props.previousSet}</Text>
            case 'weight':
                return <TextInput keyboardType="number-pad" maxLength={4} style={styles.AlignWeight}>{props.weight}</TextInput>
            case 'reps':
                return <TextInput keyboardType="number-pad" maxLength={3} style={styles.AlignReps}>{props.reps}</TextInput>
            case 'check':
                return (
                    <TouchableOpacity style={styles.AlignCheck} onPress={() => toggleCheck(props)}>
                        <Ionicons name="ios-checkmark" size={32} />
                    </TouchableOpacity>
                );
            default:
                break;
        }
    }

    function toggleCheck(props) {
        props.toggleChecked();
    }
}

const styles = StyleSheet.create({
    AlignSetName: {
        textAlignVertical: "center",
        textAlign: "center",
        width: 25
    },
    AlignPrevious: {
        textAlignVertical: "center",
        textAlign: "center",
        width: 85
    },
    AlignWeight: {
        textAlignVertical: "center",
        textAlign: "center",
        width: 35
    },
    AlignReps: {
        textAlignVertical: "center",
        textAlign: "center",
        width: 25
    },
    AlignCheck: {
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center"
    },
    
container: {
    backgroundColor: "#C4C4C4",
    borderRadius: 3,
    padding: 5,
    justifyContent: "center",
    height: 26
},
checkedContainer: {
        backgroundColor: "#8BEC8E",
        borderRadius: 3,
        padding: 5,
        justifyContent: "center",
        height: 26
    }
})
