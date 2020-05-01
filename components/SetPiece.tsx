import { Ionicons } from '@expo/vector-icons';

import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, Dimensions } from 'react-native';


export default function SetPiece(props) {    
    return (
        <View style={container}>
            {renderPiece(props)}
        </View>
    );
}

function renderPiece(props) {
    const [checked, setChecked] = useState(false);
    
    switch(props.pieceName) {
        case 'setName':
            return <Text style={styles.AlignSetName}>{props.setName}</Text>
        case 'previousSet':
            return <Text style={styles.AlignPrevious}>{props.previousSet}</Text>
        case 'weight':
            return <Text style={styles.AlignWeight}>{props.weight}</Text>
        case 'reps':
            return <Text style={styles.AlignReps}>{props.reps}</Text>
        case 'check':
            return (
            <TouchableOpacity style={styles.AlignCheck} onPress={()=> {
                if(checked) {
                    container = StyleSheet.compose(checkedStyle.PieceContainerChecked, styles.PieceContainerUnchecked);
                 } else {
                    container = StyleSheet.compose(styles.PieceContainerUnchecked, checkedStyle.PieceContainerChecked);
                 }
                 setChecked(!checked);
            }}>
                <Ionicons name="ios-checkmark" size={24} />
            </TouchableOpacity>
            );
        default:
            break;
    }   
}

function toggleCheck() {
 
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
        width: 25
    },
    AlignReps: {
        textAlignVertical: "center",
        textAlign: "center",
        width: 25
    },
    AlignCheck: {
        width: 25,
        top: -5,
        left: 8
    }
})

const checkedStyle = StyleSheet.create({
    PieceContainerChecked: {
        backgroundColor: "#8BEC8E"
    }
})

let container = StyleSheet.compose(checkedStyle.PieceContainerChecked, styles.PieceContainerUnchecked);