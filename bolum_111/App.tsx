import React, {useEffect} from 'react'
import {Platform, SafeAreaView, Text} from "react-native";
import SmsListener from "react-native-android-sms-listener";
import {checkMultiple, openSettings, PERMISSIONS, requestMultiple} from "react-native-permissions";

const App = () => {

    let subsCribe: { remove: () => void; };
    const checkListenSms = async () => {
        const checkReadSms = Platform.select({
            android: PERMISSIONS.ANDROID.READ_SMS
        });

        const checkReceiveSms = Platform.select({
            android: PERMISSIONS.ANDROID.RECEIVE_SMS
        });

        await checkMultiple([checkReadSms, checkReceiveSms]).then((status) => {
          if ((status[checkReadSms]==="denied" || status[checkReceiveSms]==="denied") ||
              (status[checkReadSms]==="blocked" || status[checkReceiveSms]==="blocked")
          ){
            requestMultiple([checkReadSms,checkReceiveSms]).then(status=>{
              if (
                  (status[checkReadSms]==="denied" || status[checkReceiveSms]==="denied") ||
                  (status[checkReadSms]==="blocked" || status[checkReceiveSms]==="blocked")
              ){
                openSettings().catch((e)=>console.log(e));
              }
            })
          }
        }).catch((err) => {
            console.log(err);
        })
    }

    const listenSms = async ()=>{
      subsCribe = await SmsListener.addListener(message=>{
        console.log("Gelen Sms: ",message);
      })
    }

    const stopListening = ()=>{
      if (subsCribe){
        subsCribe.remove();
      }
    }

  useEffect(() => {
     checkListenSms();
     listenSms();

     return async ()=>{
       await stopListening();
     }
  }, []);

    return (
        <SafeAreaView style={{flex: 1, justifyContent: "center"}}>
            <Text style={{textAlign: "center", fontSize: 20}}>Mesaj dinleme uygulaması</Text>
        </SafeAreaView>
    )
}

export default App
