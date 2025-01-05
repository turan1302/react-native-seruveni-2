import React, {useEffect} from 'react'
import {SafeAreaView, StyleSheet, Text} from "react-native";
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withSequence,
    withTiming
} from "react-native-reanimated";

const App = (props) => {

    const translateX = useSharedValue(0);

    useEffect(() => {
        translateX.value = withRepeat(
            withSequence(
                withTiming(10, {duration: 100, easing: Easing.linear}),
                withTiming(-10, {duration: 100, easing: Easing.linear}),
                withTiming(0, {duration: 100, easing: Easing.linear}),
            ),
            -1,  // -1 sürekli, normal değer girerseniz o kadar tekrarlar
            false
        );
    }, []);

    const animatedStyle = useAnimatedStyle(()=>{
        return {
            transform : [{translateX : translateX.value}],
        }
    })

    return (
        <SafeAreaView style={styles.welcome_area}>
            <Animated.Text style={[styles.text,animatedStyle]}>Titreyen Yazı</Animated.Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    welcome_area : {flex: 1, justifyContent: "center"},
    text : {textAlign: "center", fontWeight: "bold", fontSize: 20, color: "#f15151"}
})

export default App;
