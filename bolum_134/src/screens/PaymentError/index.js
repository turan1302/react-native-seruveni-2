import React from 'react'
import {Text, View} from 'react-native';

const PaymentError = () => {
  return (
    <View style={{
        flex : 1,
        backgroundColor : "#ff0000",
        justifyContent : "center",
        alignItems : "center"
    }}>
        <Text style={{
            color : "#fff",
            fontWeight : "bold",
            fontSize : 30
        }}>İşlem Başarısız</Text>
    </View>
  )
}

export default PaymentError
