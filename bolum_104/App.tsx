import React from 'react'
import {SafeAreaView, Text} from "react-native";

import { SketchCanvas } from "@wwimmo/react-native-sketch-canvas";

const App = () => {
  return (
    <SafeAreaView style={{flex : 1}}>
        <SketchCanvas style={{ flex: 1 }}
                      strokeColor={"black"}
                      strokeWidth={1}
                      onStrokeStart={(x,y)=>{
                          console.log("Başlangıç: ",x,y);
                      }}
                      onStrokeEnd={(x,y)=>{
                          console.log("Bitiş: ",x,y);
                      }}
                      onStrokeChanged={(x,y)=>{
                            console.log(x,y);
                        }}
        />
    </SafeAreaView>
  )
}

export default App
