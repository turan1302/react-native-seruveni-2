import React from 'react'
import {SafeAreaView, Text} from "react-native";
import Select2 from "react-native-select-two"

const App = (props) => {

    const items = [
        { id: 1, name: "React Native Developer"},
        { id: 2, name: "Android Developer" },
        { id: 3, name: "iOS Developer" }
    ];

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#fff",justifyContent : "center",alignItems : "center"}}>
            <Select2
                cancelButtonText={"Vazgeç"}
                selectButtonText={"Seç"}
                searchPlaceHolderText={"Arama Yap"}
                listEmptyTitle={"Kayıt Bulunamadı"}
                colorTheme="brown"
                title="Pozisyon"
                popupTitle="Pozizyon Seçiniz"
                data={items}
                onSelect={data => {
                    console.log(data);
                }}
                onRemoveItem={data => {
                    console.log("Silinen, ",data);
                }}
            />
        </SafeAreaView>
    )
}

export default App
