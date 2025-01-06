import React, {useState} from 'react'
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Animated, {Easing, useSharedValue, withTiming, useAnimatedStyle, withRepeat} from "react-native-reanimated";

const App = (props) => {
    const rotation = useSharedValue(0);
    const [isRotating, setIsRotating] = useState(false);

    const startRotation = () => {
        setIsRotating(true);
        rotation.value = withRepeat(
            withTiming(360, {duration: 2000, easing: Easing.linear}),
            -1,
            false
        );
    }

    const stopRotation = () => {
        setIsRotating(false);
        rotation.value = rotation.value;
    }

    const reverseRotation = () => {
        setIsRotating(true);
        rotation.value = withRepeat(
            withTiming(-360,{duration : 2000,easing : Easing.linear}),
            -1,
            false
        )
    }

    const resetRotation = ()=>{
        setIsRotating(false);
        rotation.value = withTiming(0,{duration : 500,easing : Easing.linear});
    }


    const animatedStyle = useAnimatedStyle(()=>{
        return {
            transform : [{rotate : `${rotation.value}deg`}],
        }
    })

    return (
        <SafeAreaView style={styles.welcome_area}>
            <Animated.View style={[styles.rotate_view,animatedStyle]}/>

            <View style={styles.buttons_area}>
                <TouchableOpacity onPress={reverseRotation} style={styles.left_button}>
                    <Text style={styles.button_text}>Sola Dön</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={(isRotating) ? stopRotation : resetRotation} style={styles.middle_button}>
                    <Text style={styles.button_text}>{isRotating ? "Dur" : "Sıfırla"}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={startRotation} style={styles.right_button}>
                    <Text style={styles.button_text}>Sağa Dön</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    welcome_area: {flex: 1, justifyContent: "center", alignItems: "center"},
    rotate_view: {backgroundColor: "#cdcdcd", width: 150, height: 150},

    buttons_area: {marginTop: 60, flexDirection: "row"},

    left_button: {backgroundColor: "#fca7a7", padding: 10, borderRadius: 10},
    middle_button: {backgroundColor: "#fca7a7", padding: 10, borderRadius: 10, marginHorizontal: 20},
    right_button: {backgroundColor: "#fca7a7", padding: 10, borderRadius: 10},

    button_text: {color: "#050505", fontWeight: "bold"},
})

export default App
