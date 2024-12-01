import React from 'react'
import {SafeAreaView, Text, TouchableOpacity} from "react-native";
import Share from 'react-native-share';

const App = (props) => {

  const shareButton = ()=>{
    const message = "Adam harbiden yapmış uygulamayı :)";

    Share.open({
      message : message,
      forceDialog : true
    }).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err);
    })
  }

  return (
   <SafeAreaView style={{flex : 1,backgroundColor : "#fff",justifyContent : "center",alignItems : "center"}}>
      <TouchableOpacity onPress={shareButton} style={{backgroundColor : "#ccc",padding : 15,borderRadius : 10}}>
        <Text style={{color : "#000",fontWeight : "bold"}}>Paylaş</Text>
      </TouchableOpacity>
   </SafeAreaView>
  )
}

export default App
