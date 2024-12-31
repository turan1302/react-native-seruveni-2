import React, {useEffect} from 'react'
import {SafeAreaView, Text} from "react-native";
import io from "socket.io-client";

const App = (props) => {

    const connectionConfig = {
        jsonp: false,
        reconnection: true,
        reconnectionDelay: 100,
        reconnectionAttempts: 100000,
        transports: ["websocket"],
    };

    useEffect(() => {
        const socket = io("http://localhost:5000", connectionConfig);
    }, []);


    return (
        <SafeAreaView style={{flex: 1}}>
            <Text>Soket Sorunu</Text>
        </SafeAreaView>
    )
}

export default App
