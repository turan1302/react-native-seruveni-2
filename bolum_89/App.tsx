import React, {useEffect, useState} from 'react'
import {SafeAreaView, Text, TouchableOpacity, View} from "react-native";

const App = (props) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Derlendi");  // component did mount

        /*
        let navigationListener = navigation.addListener("focus",()=>{
           // işlemler
        });

         */

        return () => {
         //   navigationListener?.remove;   component will unmount
          alert("Sayfadan çıkış yapıldı");
        }
    }, []);


    useEffect(() => {
        console.log("Count değişti");
        if (count === 10) {
            alert("Sayaç 10'a geldi"); // component did update
        }
    }, [count]);


    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <View style={{alignItems: "center"}}>
                    <Text style={{fontSize: 20, fontWeight: "bold", color: "#000"}}>{count}</Text>
                    <View style={{marginTop: 10, flexDirection: "row"}}>
                        <TouchableOpacity onPress={() => setCount(count + 1)}
                                          style={{padding: 10, backgroundColor: "#ccc", borderRadius: 10}}>
                            <Text style={{fontWeight: "bold", color: "#000"}}>Artır</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setCount(count - 1)} style={{
                            padding: 10,
                            backgroundColor: "#ccc",
                            borderRadius: 10,
                            marginLeft: 10
                        }}>
                            <Text style={{fontWeight: "bold", color: "#000"}}>Azalt</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default App;
