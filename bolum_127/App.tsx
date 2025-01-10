import React from 'react'
import {FlatList, SafeAreaView, Text, View} from "react-native";
import { FlashList } from "@shopify/flash-list";

const App = (props) => {

  const DATA = [
    {
      id : 1,
      title: "React Native",
    },
    {
      id : 2,
      title: "Flutter",
    },
    {
      id : 3,
      title: "Swift",
    },
    {
      id : 4,
      title: "Kotlin",
    },
    {
      id : 5,
      title: "Java",
    },
    {
      id : 6,
      title: "React",
    },
    {
      id : 7,
      title: "Angular",
    },
    {
      id : 8,
      title: "Vue",
    },
  ];


  return (
    <SafeAreaView style={{flex : 1}}>
      <FlashList
          data={DATA}
          keyExtractor={(item, index)=>item.id}
          renderItem={({ item }) =>(
              <View style={{height : 300,justifyContent : "center",alignItems : "center",borderWidth : 1,borderColor : "#000"}}>
                <Text style={{textAlign : "center"}}>{item.title}</Text>
              </View>
          )}
          estimatedItemSize={300}
      />
    </SafeAreaView>
  )
}

export default App
