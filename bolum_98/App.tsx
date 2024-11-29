import React, {useRef} from 'react'
import {SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import ActionSheet from 'react-native-actionsheet'

const App = (props) => {
    const actionRef = useRef();

  return (
    <SafeAreaView style={{flex : 1,backgroundColor : "#fff"}}>
        <View style={{flex : 1,justifyContent : "center",alignItems : "center"}}>
            <TouchableOpacity onPress={()=>actionRef.current?.show()} style={{padding : 10,backgroundColor : "#71d7ff",borderRadius : 8}}>
                <Text style={{fontSize : 18,color : "#000",fontWeight : "bold"}}>İşlem</Text>
            </TouchableOpacity>
        </View>

        <ActionSheet
            tintColor={"green"}
            ref={actionRef}
            title={<Text style={{fontWeight : "bold",color : "#000",fontSize : 20}}>İşlem seçiniz</Text>}
            message={<Text style={{fontWeight : "bold",color : "#000",fontSize : 14}}>İşlem yapmak için tıklayınız</Text>}
            options={['Ekleme', 'Aktiflik','Güncelleme','Silme', 'İptal']}
            cancelButtonIndex={4}
            destructiveButtonIndex={3}
            onPress={(index) => {
                
            }}
        />
    </SafeAreaView>
  )
}

export default App
