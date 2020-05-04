import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Image, Dimensions } from 'react-native';

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function WorkoutCard(props) {
    return (
        <TouchableOpacity style={styles.mainCard} onPress={() => props.navigate()}>
            <Text style={styles.cardText}>
                BENCH DAY
        </Text>
            <Image source={require('./../assets/benchpress.png')} style={styles.cardImage} />
            <Text style={styles.cardSubtitle}>
                Estimated 1RM: 220 lbs
        </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainCard: {
        "width": width * .9,
        "height": height * .5,
        "backgroundColor": "#B9BAA3",
        "borderRadius": 10,
        "alignItems": 'center',
        bottom: height/10
      },
      cardText: {
        "fontStyle": "normal",
        "fontWeight": "bold",
        "fontSize": 55,
        "color": "#902923",
      },
      cardImage: {
        "width": 330,
        "height": 315,
      },
      cardSubtitle: {
        "fontStyle": "normal",
        "fontWeight": "bold",
        "fontSize": 18,
        "textAlign": "center",
        "color": "#222"
      },
})