
import React, {useState} from 'react'
import {SafeAreaView, Text, TouchableOpacity, View} from "react-native";

const App = (props) => {
  const [count,setCount] = useState(0);
  const countIncrement = ()=>{
    setCount(count+1);
  }

  const countDecrement = ()=>{
    setCount(count+1);
  }


  return (
  <SafeAreaView style={{flex : 1,justifyContent :"center",alignItems : "center"}}>
    <View style={{alignItems : "center"}}>
      <Text style={{fontWeight : "bold",color : "#000",fontSize : 30}}>{count}</Text>
      <View style={{marginTop : 10,flexDirection : "row",alignContent : "center",justifyContent : "center"}}>
        <TouchableOpacity
            onPress={countIncrement}
            style={{backgroundColor : "#ccc",padding : 10,borderRadius : 10}}>
          <Text style={{color : "#000"}}>Artır</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={countDecrement}
            style={{marginLeft : 20,backgroundColor : "#ccc",padding : 10,borderRadius : 10}}>
          <Text style={{color : "#000"}}>Azalt</Text>
        </TouchableOpacity>
      </View>
    </View>
  </SafeAreaView>
  )
}

export default App;

