import React from 'react'
import {Text, View} from 'react-native';

const PaymentSuccess = () => {
  return (
    <View style={{
        flex : 1,
        backgroundColor : "#439f00",
        justifyContent : "center",
        alignItems : "center"
    }}>
        <Text style={{
            color : "#fff",
            fontWeight : "bold",
            fontSize : 30
        }}>İşlem Başarılı</Text>
    </View>
  )
}

export default PaymentSuccess
