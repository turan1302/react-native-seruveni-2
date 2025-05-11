import React, {useEffect} from 'react'
import {Alert, BackHandler, Text, View} from "react-native";
import DeviceInfo from "react-native-device-info";

const App = () => {

    const checkLicence = async ()=>{
        const deviceId = await DeviceInfo.getUniqueId();
        const LICENSED_DEVICE_ID = "8c3e5kl225";

        if (deviceId === LICENSED_DEVICE_ID){
            alert("Hoşgeldin lisanslı kullanıcı");
        }else{
            Alert.alert("Lisans Hatası","Bu cihaz lisanslı değil. Uygulama kapatılıyor");
            setTimeout(()=>{
                BackHandler.exitApp();
            },2000);
        }

    }

    useEffect(() => {
        checkLicence();
    }, []);

  return (
    <View style={{
      flex : 1,
      justifyContent : "center",
      alignItems : "center"
    }}>
      <Text style={{
        color : "black",
        fontSize : 25,
        fontWeight : "500",
        textAlign : "center"
      }}>MFSoftware Blog Lisanslama Uygulaması</Text>
    </View>
  )
}

export default App
