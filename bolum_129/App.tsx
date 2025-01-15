import React, {useEffect, useState} from 'react'
import {Platform, SafeAreaView, Text} from "react-native";
import SmsListener from "react-native-android-sms-listener";
import {checkMultiple, openSettings, PERMISSIONS, requestMultiple} from "react-native-permissions";

const App = () => {

    const [lotp,setLotp] = useState("");

    let subsCribe: { remove: () => void; };
    const checkPermissions = async () => {
        const checkReadSms = Platform.select({
            android: PERMISSIONS.ANDROID.READ_SMS
        });

        const checkReceiveSms = Platform.select({
            android: PERMISSIONS.ANDROID.RECEIVE_SMS
        });

        await checkMultiple([checkReadSms, checkReceiveSms]).then((status) => {
            if ((status[checkReadSms] === "denied" || status[checkReceiveSms] === "denied") ||
                (status[checkReadSms] === "blocked" || status[checkReceiveSms] === "blocked")
            ) {
                requestMultiple([checkReadSms, checkReceiveSms]).then(status => {
                    if (
                        (status[checkReadSms] === "denied" || status[checkReceiveSms] === "denied") ||
                        (status[checkReadSms] === "blocked" || status[checkReceiveSms] === "blocked")
                    ) {
                        openSettings().catch((e) => console.log(e));
                    }
                })
            }
        }).catch((err) => {
            console.log(err);
        });
    }

    const startSmsListener = async () => {
        subsCribe = await SmsListener.addListener((message) => {
            const code = message.body;
            const regex = /(\d{6})/;
            const otp = code.match(regex);

            if (otp){
                setLotp(otp[0]);
            }
        })
    }

    const stopSmsListener = () => {
        if (subsCribe) {
            subsCribe.remove();
        }
    }

    // @ts-ignore
    useEffect(() => {
        checkPermissions();
        startSmsListener();

        return async () => {
            await stopSmsListener();
        }
    }, []);


    return (
        <SafeAreaView style={{flex: 1, justifyContent: "center"}}>
            <Text style={{textAlign: "center", fontSize: 20}}>OTP Uygulaması</Text>
            <Text style={{textAlign : "center",marginTop : 30}}>{lotp}</Text>
        </SafeAreaView>
    )
}

export default App;
