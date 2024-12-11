import React, {useEffect, useRef, useState} from 'react'
import {SafeAreaView, Text} from "react-native";
import {ColorPicker} from "react-native-color-picker-light";

const App = (props) => {

    const [color, setColor] = useState("");
    const picker = useRef();

    useEffect(() => {
        if (picker.current){
            picker.current.setColor("#d97cf3");
        }
    }, []);

    return (
        <SafeAreaView style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <ColorPicker
                ref={picker}
                type="color"
                style={{width: 350, height: 350}}
                onColorChange={color => {
                    setColor(color);
                }}
            />
            {color !== "" && (<Text style={{fontSize: 20, marginTop: 20}}>Renk Değeriniz: {color}</Text>)}
        </SafeAreaView>
    )
}

export default App
