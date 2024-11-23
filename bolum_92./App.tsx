import React, {useRef} from 'react'
import {SafeAreaView, Text, TouchableOpacity, View} from "react-native";

const App = (props) => {

    const colors = ["red", "green", "blue", "purple", "cyan", "orange"];
    const viewRef = useRef(null);

    const changeBackgroundColor = ()=>{
      const randomColor = colors[Math.floor(Math.random()*colors.length)];
      if (viewRef.current){
        viewRef.current.setNativeProps({
          style : {backgroundColor : randomColor}
        });
      }
    }

    return (
        <SafeAreaView style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <View ref={viewRef} style={{
                width: 200,
                height: 200,
                padding: 11,
                backgroundColor: "#fff",
                justifyContent: "center",
                marginBottom: 20
            }}>
                <Text style={{textAlign: "center",color :"#000",fontWeight : "bold"}}>Renk değiştirme uygulaması</Text>
            </View>
            <TouchableOpacity onPress={changeBackgroundColor} style={{backgroundColor : "#2999ff",padding : 10,borderRadius : 10}}>
              <Text style={{color : "#000",fontWeight : "bold"}}>Arka plan değiştir</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default App
