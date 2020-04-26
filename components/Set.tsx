import { Ionicons } from '@expo/vector-icons';

import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

import SetPiece from './SetPiece';
export default function Set(props) {
    return (
        <View style={styles.Container}>
            <SetPiece pieceName="setName" setName={props.setName} />
            <SetPiece pieceName="previousSet" previousSet={props.previousSet} />
            <SetPiece pieceName="weight" weight={props.weight} />
            <SetPiece pieceName="reps" reps={props.reps} />
            <SetPiece pieceName="check" />
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        "backgroundColor": "#D6D5C9",
        "borderRadius": 3,
        "padding": 5,
        "margin": 3,
        "width": 340,
        "flexDirection": 'row',
        "justifyContent": 'space-between'
    },

});