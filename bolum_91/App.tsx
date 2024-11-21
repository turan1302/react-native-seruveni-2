import React, {useCallback, useState} from 'react'
import {SafeAreaView, Text, TouchableOpacity, View} from "react-native";

const App = (props) => {
    const [count, setCount] = useState(0);

    const incrementCount = useCallback(() => {
        if (count > 10) {
            console.log("Sayaç 10'u geçti");
            setCount(prevCount => prevCount + 1);
        } else {
            setCount(prevCount => prevCount + 1);
        }
    }, [count]);

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text style={{fontWeight: "400", fontSize: 25, color: "#000"}}>Sayaç: {count}</Text>
                <TouchableOpacity
                    onPress={incrementCount}
                    style={{
                    marginTop: 20,
                    backgroundColor: "#00aeff",
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    borderRadius: 10
                }}>
                    <Text style={{color: "#fff", fontWeight: "bold"}}>Artır</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default App
