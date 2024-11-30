import React from 'react'
import {SafeAreaView} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

const App = (props) => {
    return (
        <SafeAreaView style={{flex : 1,backgroundColor : "#fff"}}>
          <LinearGradient
              start={{x  :0, y : 0}}
              end={{x  :1, y : 0}}
              colors={["#ff0000","#001ac2","#000"]} style={{height : 50,margin : 10}}>
          </LinearGradient>
        </SafeAreaView>
    )
}

export default App
