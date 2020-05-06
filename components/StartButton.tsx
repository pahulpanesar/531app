import { StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import React from 'react'; 

const height = Dimensions.get("screen").height;

export default function StartButton(props) {
    return (
        <TouchableOpacity
            activeOpacity={0}
            style={styles.container}
            onPress={() => props.navigate()}
        >
            <Text style={styles.text}>START ></Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        "backgroundColor": "#A3BAA4",
        "borderRadius": 10,
        "width": 260,
        "height": 100,
        "alignItems": 'center',
        "justifyContent": 'center',
        zIndex: 10,
        position: "absolute",
        top: height - 200
    },
    text: {
        "fontStyle": "normal",
        "fontWeight": "bold",
        "lineHeight": 65,
        "color": "#222",
        "fontSize": 55,
    },
})