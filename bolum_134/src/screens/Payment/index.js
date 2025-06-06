import React from 'react';
import {View} from 'react-native';
import WebView from 'react-native-webview';

const Payment = (props) => {
    const {navigation} = props;

    const handleNavigation = (navState)=>{
        const {url} = navState;

        if (url.includes("/payment/success")){
            navigation.navigate("PaymentSuccess");
        }else if (url.includes("/payment/error")){
            navigation.navigate("PaymentError");
        }else{
            // duruma göre yaz işte :)
        }
    }

    return (
        <View style={{
            flex: 1,
        }}>
            <WebView onNavigationStateChange={handleNavigation} source={{uri: 'http://127.0.0.1:8000/payment'}}/>
        </View>
    );
};

export default Payment;
