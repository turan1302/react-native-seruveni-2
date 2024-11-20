import React, {useEffect, useMemo, useState} from 'react'
import {FlatList, SafeAreaView, Text, TextInput, View} from "react-native";

const App = (props) => {
    const [data, setData] = useState(["ali", "veli", "sabri", "mete", "serkan"]);
    const [resultData, setResultData] = useState(data);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        if (searchText === "") {
            setResultData(data);
        } else {
            searchData(searchText);
        }
    }, [searchText]);

    const searchData = (text) => {
        const filteredData = data.filter(item => item.toLowerCase().includes(text.toLowerCase()));
        setResultData(filteredData);
    }

    const listHeader = useMemo(()=>(
        <View style={{backgroundColor: "#fff", flexDirection: "row", marginBottom: 20, borderRadius: 10}}>
            <TextInput onChangeText={(text)=>setSearchText(text)}
                       style={{flex: 1, backgroundColor: "#fff", borderRadius: 10, paddingLeft: 10, color: "#000"}}
                       placeholderTextColor={"#000"} placeholder={"Ara..."}/>
        </View>
    ),[searchText]);

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#ccc"}}>
            <FlatList
                style={{
                    paddingHorizontal: 10,
                    marginTop: 10
                }}
                ListHeaderComponent={listHeader}
                data={resultData} keyExtractor={(item, index) => index} renderItem={({item, index}) => (
                <View style={{marginBottom: 10, backgroundColor: "#727272", padding: 10, borderRadius: 14}}>
                    <Text style={{color: "#fff", fontWeight: "bold"}}>{item}</Text>
                </View>
            )}/>
        </SafeAreaView>
    )
}

export default App
