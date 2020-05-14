import React, { useState } from 'react';
import { StyleSheet, View, Modal } from 'react-native';

import SetPiece from './SetPiece';
import RestTimer from './RestTimer';
export default function Set(props) {
    const [checked, setChecked] = useState(false);
    const [restTimerActive, setRestTimerActive] = useState(false);
    
    return (
        <View style={styles.Container}>
            {checked && <RestTimer duration={props.restDuration} isVisible={restTimerActive} closeModal={() => setRestTimerActive(false)}/>}
            <SetPiece pieceName="setName" setName={props.setName} />
            <SetPiece pieceName="previousSet" previousSet={props.previousSet} />
            <SetPiece pieceName="weight" weight={props.weight} />
            <SetPiece pieceName="reps" reps={props.reps} />
            <SetPiece pieceName="check" isChecked={checked} toggleChecked={() => handleCheck()} />
        </View>
        
    )

    function handleCheck() {
        if (!checked) {
            setRestTimerActive(true);
        }
        setChecked(!checked)
    }
}

const styles = StyleSheet.create({
    Container: {
        "backgroundColor": "#D6D5C9",
        "borderRadius": 3,
        "padding": 5,
        "margin": 5,
        "width": 340,
        "flexDirection": 'row',
        "justifyContent": 'space-between'
    },

});