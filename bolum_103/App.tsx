import React from 'react'
import {SafeAreaView, StyleSheet, Text} from "react-native";
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = () => {
  return (
    <SafeAreaView style={{flex : 1,justifyContent : "center",alignItems : "center"}}>
        <Stars
            default={2.5}
            count={5}
            half={true}
            starSize={50}
            fullStar={<Icon size={70} name={'tree'} style={[styles.myStarStyle]}/>}
            emptyStar={<Icon size={70} name={'clock'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
            halfStar={<Icon size={70} name={'close-thick'} style={[styles.myStarStyle]}/>}
        />
    </SafeAreaView>
  )
}

export default App;

const styles = StyleSheet.create({
    myStarStyle: {
        color: 'green',
        backgroundColor: 'transparent',
        textShadowColor: 'black',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 2,
    },
    myEmptyStarStyle: {
        color: 'white',
    }
});
