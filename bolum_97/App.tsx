import React, {useEffect, useState} from 'react'
import {SafeAreaView, Text, View} from "react-native";
import {
  PacmanIndicator,
} from 'react-native-indicators';

const App = (props) => {
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },5000);
  },[]);

  return (
    <SafeAreaView style={{flex : 1,backgroundColor : "#fff"}}>
      {loading ? (
          <PacmanIndicator size={50}/>
      ) : (
          <View>
            <Text>Sayfa açıldı</Text>
          </View>
      )}
    </SafeAreaView>
  )
}

export default App
