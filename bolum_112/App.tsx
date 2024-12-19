import React, {useRef, useState} from 'react'
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from "react-native";
import Video from 'react-native-video';

const App = () => {

    const videoRef = useRef();

    const [paused,setPaused] = useState(true);

    return (
        <SafeAreaView style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Video
                source={{uri: "https://www.w3schools.com/html/movie.mp4"}}
                ref={videoRef}
                onError={(e) => {
                    console.log(e);
                }}
                style={styles.video}
                controls={true}
                paused={paused}
                volume={1}
                playInBackground={true}
                onLoadStart={()=>{
                    console.log("Video yüklenmeye başlandı");
                }}
                onLoad={()=>{
                    console.log("Video Yüklendi");
                }}
                muted={true}
            />

            <TouchableOpacity onPress={()=>setPaused(false)}>
                <Text>Başlat</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
   video :  {
       width: "100%",
       height: 280,
   }
});

export default App;
