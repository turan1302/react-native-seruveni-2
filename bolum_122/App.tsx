import React, {useState} from 'react'
import {FlatList, SafeAreaView, StyleSheet, Text, View} from "react-native";

import Animated,{FlipInYLeft,FlipInYRight,FadeInDown,BounceInRight,BounceInLeft,LightSpeedInLeft,LightSpeedInRight,RollInLeft,RollInRight} from "react-native-reanimated";

const App = (props) => {
    const [departments,setDepartments] = useState([
        {
            id : 1,
            name : "Ar-Ge"
        },
        {
            id : 2,
            name : "Üretim"
        },
        {
            id : 3,
            name : "Planlama"
        },
        {
            id : 4,
            name : "Satın Alma"
        },
        {
            id : 5,
            name : "Kalite"
        },
        {
            id : 6,
            name : "Paketleme"
        },
        {
            id : 7,
            name : "İnsan Kaynakları"
        },
        {
            id : 8,
            name : "Bilgi İşlem & IT"
        },
    ]);

    const listItem = ({item,index})=>{
        return (
            <Animated.View entering={(index%2===0) ? FlipInYLeft.duration(400).delay((index+1)*100) : FlipInYRight.duration(400).delay((index+1)*100)} style={styles.list_item_area}>
                <Text style={styles.list_item_text}>{item.name}</Text>
            </Animated.View>
        )
    }

    return (
        <SafeAreaView style={styles.welcome_area}>
            <Text style={styles.welcome_text}>
                Şirket Departmanları
            </Text>
            <View style={styles.list_area}>
                <FlatList data={departments} renderItem={listItem}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    welcome_area : {
        flex : 1
    },
    welcome_text : {textAlign: "center", marginTop: 20, color: "#000", fontSize: 20, fontWeight: "bold"},

    list_area : {marginTop : 30,marginHorizontal : 10},
    list_item_area : {padding : 15,backgroundColor : "#ccc",marginBottom : 15,borderRadius : 20},
    list_item_text : {
        color : "#000",
        fontWeight : "500",
        fontSize : 15
    }
})


export default App;
