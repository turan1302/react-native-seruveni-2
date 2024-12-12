import React, {useRef} from 'react'
import {SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import GestureFlipView from 'react-native-gesture-flip-card';

const App = (props) => {

    const card = useRef();
  const renderFront = () => {
    return (
        <View style={{backgroundColor : "gray",width : 300,height : 500,justifyContent : "center",alignItems : "center"}}>
          <Text style={{fontSize: 25, color: '#000'}}>{'Ön Yüz'}</Text>
        </View>
    );
  };

  const renderBack = () => {
    return (
        <View style={{backgroundColor : "green",width : 300,height : 500,justifyContent : "center",alignItems : "center"}}>
          <Text style={{fontSize: 25, color: '#000'}}>{'Arka Yüz'}</Text>
        </View>
    );
  };

  return (
    <SafeAreaView style={{flex : 1,justifyContent : "center",alignItems : "center"}}>
        <View style={{flexDirection : "row",marginBottom : 20}}>
            <TouchableOpacity onPress={()=>card.current.flipRight()} style={{padding :10,margin : 10,backgroundColor : "#dc6363",borderRadius : 15}}>
                <Text style={{color : "#fff"}}>Sola Döndür</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>card.current.flipLeft()} style={{padding :10,margin : 10,backgroundColor : "#004d13",borderRadius : 15}}>
                <Text style={{color : "#fff"}}>Sağa Döndür</Text>
            </TouchableOpacity>
        </View>
      <GestureFlipView
          ref={card}
          width={300}
          height={500}
          renderBack={renderBack}
          renderFront={renderFront}

          onFlipEnd={(face) => {
              // trigger when flip animation ended
                //console.log(face)
          }}
      />
    </SafeAreaView>
  )
}

export default App
