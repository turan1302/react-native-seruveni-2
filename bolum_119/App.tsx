import React from 'react'
import {SafeAreaView, Text} from "react-native";
import QRCode from 'react-native-qrcode-svg';

const App = (props) => {

    const url = "https://mfsoftware.net";
    const image_url = "https://mfsoftware.net/storage/logo/mfsoftware-blog.png";

  return (
    <SafeAreaView style={{flex : 1,justifyContent : "center",alignItems : "center",backgroundColor : "green"}}>
     <QRCode
     value={image_url}
     size={300}
     color={"#fff"}
     backgroundColor={"transparent"}
     //logo={image_url}
     />
    </SafeAreaView>
  )
}

export default App
