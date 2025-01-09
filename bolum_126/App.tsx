import React, {useEffect} from 'react'
import {SafeAreaView} from "react-native";

const App = (props) => {

  /*
      resim optimizasyonu (fast-image)
      useNativeDriver  --> animayonlarda kullanılacak
      useEffect e boğma, oluşturulan listenerları sil
      flatlist kullanılacak
      usecallback kullanımı çok dikkatli olacak
      virtualized List Kullanımı
   */


  /*
  useEffect(() => {
    const order = navigation.addListener("");

    return ()=>{
      order.remove;
    }
  }, []);

  */


  return (
    <SafeAreaView style={{flex : 1}}>

    </SafeAreaView>
  )
}

export default App
