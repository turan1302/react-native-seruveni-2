import React from 'react'
import {SafeAreaView, Text} from "react-native";
import * as Progress from 'react-native-progress';

const App = () => {
  return (
    <SafeAreaView style={{flex : 1,backgroundColor : "#fff",justifyContent : "center",alignItems : "center"}}>
      <Progress.Bar
          animated={true}
          progress={0.6}
          width={200}
          color={"green"}
          borderColor={"#000"}
          unfilledColor={"#e0e0e0"}
          borderWidth={2}
          indeterminate={true}
          indeterminateAnimationDuration={500}
      />

    </SafeAreaView>
  )
}

export default App
