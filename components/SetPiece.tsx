import { Ionicons } from '@expo/vector-icons';

import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export default function SetPiece(props) {
    return (
        <View style={container}>
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
        if (props.isChecked) {
            container = StyleSheet.compose(checkedStyle.PieceContainerChecked, styles.PieceContainerUnchecked);
        } else {
            container = StyleSheet.compose(styles.PieceContainerUnchecked, checkedStyle.PieceContainerChecked);
        }
        props.toggleChecked();
    }
}

const styles = StyleSheet.create({
    PieceContainerUnchecked: {
        "backgroundColor": "#C4C4C4",
        "borderRadius": 3,
        "padding": 5,
        "justifyContent": "center",
        height: 26
    },
    PieceContainerChecked: {
        "backgroundColor": "blue",
        width: 25,
        top: -5,
        left: 8
    },
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
        // top: -5,
        // left: 10
    }
})

const checkedStyle = StyleSheet.create({
    PieceContainerChecked: {
        backgroundColor: "#8BEC8E"
    }
})

let container = StyleSheet.compose(checkedStyle.PieceContainerChecked, styles.PieceContainerUnchecked);