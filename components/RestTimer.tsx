import React from 'react';
import { Modal, View, StyleSheet, Text, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

export default function RestTimer(props) {
    return (
        <Modal transparent={true} visible={props.isVisible}>
            <View style={styles.container}>
                <View style={styles.circle} />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.finishButton} onPress={() => props.closeModal()}>
                        <Text style={styles.finishButtonText}>
                            Finish
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addTimeButton}>
                        <Text style={styles.addTimeButtonText}>
                            + 15s
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "space-between",
        top: height *.1,
        height: height *.6,
        width: width * .9,
        backgroundColor: "#4F4F4F",
        alignSelf: "center",
        borderRadius: 10,
        padding: 10
    },
    circle: {
        height: 100,
        width: 100,
        borderRadius: 100,
        color: "red"
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
    }
})