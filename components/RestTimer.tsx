import React, { useState, useEffect } from 'react';
import { Modal, View, StyleSheet, Text, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const {height, width} = Dimensions.get("screen");

export default function RestTimer(props) {
    const [currentCount, setCount] = useState(props.duration);
    const timer = () => setCount(currentCount - 1);

    useEffect(
        () => {
            if (currentCount == 0) {
                setTimeout(() => props.closeModal(), 1000);
                return;
            }
            const id = setInterval(timer, 1000);
            return () => clearInterval(id);
        },
        [currentCount]
    );
    return (
        <Modal transparent={true} visible={props.isVisible}>
            <View style={styles.container}>
                <View style={styles.timerContainer}>

                    <Text style={styles.timerText}>
                        {currentCount}
                    </Text>

                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.finishButton} onPress={() => props.closeModal()}>
                        <Text style={styles.finishButtonText}>
                            Finish
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addTimeButton} onPress={() => addTime()}>
                        <Text style={styles.addTimeButtonText}>
                            + 15s
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );

    function addTime() {
        setCount(currentCount + 15);
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "space-between",
        top: height * .1,
        height: height * .6,
        width: width * .9,
        backgroundColor: "#4F4F4F",
        alignSelf: "center",
        borderRadius: 10,
        padding: 10
    },
    circle: {
        height: 300,
        width: 300,
        borderRadius: 150,
        borderColor: "red",
        borderWidth: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "blue"
    },
    finishButton: {
        "backgroundColor": "#CD5E57",
        "borderRadius": 100,
        "width": 100,
        "height": 50,
        "alignItems": 'center',
        "justifyContent": 'center',
    },
    finishButtonText: {
        fontSize: 24,
        color: "#ddd",
    },
    addTimeButton: {
        "backgroundColor": "#A3BAA4",
        "borderRadius": 100,
        "width": 100,
        "height": 50,
        "alignItems": 'center',
        "justifyContent": 'center',
    },
    addTimeButtonText: {
        fontSize: 24,
        color: "#ddd",
    },
    buttonContainer: {
        "flexDirection": 'row',
        "justifyContent": 'space-between',
        "alignSelf": "center",
        "width": height / 3 - height / 12,
    },
    timerContainer: {
        backgroundColor: "#bbb",
        borderRadius: 5,
        width: width *.85,
        height: height*.5,
        alignItems: "center",
        justifyContent: "center"
    },
    timerText: {
        fontSize: 250,
    }
})