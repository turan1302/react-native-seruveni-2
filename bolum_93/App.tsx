import React, {useEffect, useLayoutEffect, useRef, useState} from 'react'
import {SafeAreaView, Text, TouchableOpacity, View} from "react-native";

const App = () => {
    const [size, setSize] = useState({width: 0, height: 0});
    const viewRef = useRef(null);

    useLayoutEffect(() => {
        if (viewRef.current) {
            viewRef.current.measure((x, y, width, height, pageX, pageY) => {
                setSize({width, height});
            });
        }

        console.log("İlk çalıştı");
    }, []);

    useEffect(() => {
        console.log("layout effect sonrası çalıştı");
    }, []);

    return (
        <SafeAreaView style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <View ref={viewRef} style={{
                width: 200,
                height: 300,
                backgroundColor: "#ccc",
                justifyContent: "center",
                alignItems: "center",

            }}>
                <Text
                    style={{fontWeight: "bold", color: "#000", fontSize: 20}}>Boyut: {size.width} x {size.height}</Text>
            </View>
            <TouchableOpacity
                onPress={()=>{
                    setSize({width: 0,height: 0});
                }}
                style={{marginTop: 20, backgroundColor: "#00a9b6", paddingVertical: 10, paddingHorizontal: 20,borderRadius : 10}}>
                <Text style={{fontWeight : "bold",color : "#fff"}}>Sıfırla</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default App
