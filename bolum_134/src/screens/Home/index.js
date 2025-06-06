import React from 'react'
import {Button, View} from 'react-native';

const Home = (props) => {
    const {navigation} = props;

  return (
    <View style={{
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    }}>
        <Button title={"Ödeme Yap"} onPress={()=>{
            navigation.navigate("Payment");
        }}/>
    </View>
  )
}

export default Home
