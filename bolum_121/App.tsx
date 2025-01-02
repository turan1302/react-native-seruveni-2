import React, {useEffect, useState} from 'react'
import {SafeAreaView, Text} from "react-native";
import io from "socket.io-client";

const App = (props) => {
    const [data,setData] = useState("");

    const connectionConfig = {
        jsonp: false,
        reconnection: true,
        reconnectionDelay: 100,
        reconnectionAttempts: 100000,
        transports: ["websocket"],
    };

    useEffect(() => {
        const socket = io("http://localhost:3000", connectionConfig);


        socket.on("sender",function (data){
            setData(data.message);
        })


    }, []);

    return (
        <SafeAreaView style={{flex: 1,justifyContent : "center",alignItems : "center"}}>
            <Text style={{textAlign : "center",fontSize : 50,color : "#000"}}>{data}</Text>
        </SafeAreaView>
    )
}

export default App
