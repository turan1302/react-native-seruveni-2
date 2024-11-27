import React, {useState} from 'react'
import {SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import Modal from "react-native-modal";

const App = (props) => {
    const [visibleModal, setVisibleModal] = useState(false);

    return (
        <SafeAreaView style={{flex: 1}}>
            <TouchableOpacity onPress={() => setVisibleModal(!visibleModal)}>
                <Text>Modal Aç</Text>
            </TouchableOpacity>

            <Modal isVisible={visibleModal}
                   animationInTiming={300}
                   animationOutTiming={500}
                   backdropColor={"orange"}
                   backdropOpacity={0.4}
                   style={{
                       flex: 1,
                       justifyContent: "center",
                       alignItems: "center"
                   }}>
                <View style={{flex: 0.3,backgroundColor : "#fff",width : "100%",justifyContent : "center",alignContent : "center"}}>
                    <TouchableOpacity style={{alignItems : "center"}} onPress={() => setVisibleModal(!visibleModal)}>
                        <Text>Kapat!</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

export default App;
