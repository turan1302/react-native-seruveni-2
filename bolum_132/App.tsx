import React, {useEffect} from 'react'
import {Alert, BackHandler, Text, View} from "react-native";
import DeviceInfo from "react-native-device-info";
import RestClient from "./src/RestAPI/RestClient";
import AppUrl from "./src/RestAPI/AppUrl";

const App = () => {

    const dymanicLicence = async () => {
        const deviceId = await DeviceInfo.getUniqueId();
        await RestClient.postRequest(AppUrl.licenceControl, {
            lc_code: deviceId
        }).then((res) => {
            const status = res.status;
            if (status===200){
                Alert.alert("Lisans Başarılı","Hoşgeldin lisanslı kullanıcı");
            }else{
                if (status===404){
                    Alert.alert("Lisans Hatası","Bu cihaz lisanslı değil. Uygulama kapatılıyor");
                   setTimeout(()=>{
                       BackHandler.exitApp();
                   },2500);
                }else{
                    Alert.alert("Uygulama Hatası","Bir hata oluştu. Lütfen daha sonra tekrar deneyiniz");
                    setTimeout(()=>{
                        BackHandler.exitApp();
                    },1500);
                }
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    const checkLicence = async () => {
        //   const deviceId = await DeviceInfo.getUniqueId();
        //   const LICENSED_DEVICE_ID = "8c3e5kl225";

        //    if (deviceId === LICENSED_DEVICE_ID){
        //        Alert.alert("Lisans Başarılı","Hoşgeldin lisanslı kullanıcı");
        //    }else{
        //        Alert.alert("Lisans Hatası","Bu cihaz lisanslı değil. Uygulama kapatılıyor");
        //    }

        dymanicLicence();
    }

    useEffect(() => {
        checkLicence();
    }, []);

    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Text style={{
                color: "black",
                fontSize: 25,
                fontWeight: "500",
                textAlign: "center"
            }}>MFSoftware Blog Lisanslama Uygulaması</Text>
        </View>
    )
}

export default App
