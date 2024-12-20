import React from 'react'
import {SafeAreaView, Text} from "react-native";
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

const App = () => {
  return (
    <SafeAreaView style={{flex : 1,justifyContent : "center",alignItems : "center"}}>
    <CountdownCircleTimer
        size={230}
        strokeWidth={10}
        onComplete={()=>alert("Sayaç Sonlandı")}
        isPlaying={true}
        duration={10}
        colors={['#208300', '#ff7400', '#ffd836', '#A30000']}
        colorsTime={[10, 5, 3, 0]}
    >
      {({ remainingTime }) => <Text style={{fontSize : 35}}>{remainingTime}</Text>}
    </CountdownCircleTimer>
    </SafeAreaView>
  )
}

export default App
