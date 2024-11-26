import React, {useRef} from 'react'
import {SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

const App = (props) => {
    const refRBSheet = useRef();

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#ccc"
            }}>
                <TouchableOpacity
                    onPress={()=>refRBSheet.current.open()}
                    style={{
                        padding: 10,
                        backgroundColor: "#36ccff",
                        borderRadius: 10
                    }}>
                    <Text style={{fontWeight: "bold", color: "#000", fontSize: 15}}>Raw Bottom Open</Text>
                </TouchableOpacity>

                <RBSheet
                    ref={refRBSheet}
                    height={700}
                    openDuration={300}
                    closeDuration={300}
                    minClosingHeight={600}
                    closeOnPressMask={false}
                    customStyles={{
                        container: {
                            justifyContent: "center",
                            alignItems: "center"
                        }
                    }}
                >
                  <TouchableOpacity
                      onPress={()=>refRBSheet.current.close()}
                      style={{
                      padding: 10,
                      backgroundColor: "#ff0000",
                      borderRadius: 10
                  }}>
                      <Text style={{fontWeight: "bold", color: "#fff", fontSize: 15}}>Kapat</Text>
                  </TouchableOpacity>
                </RBSheet>
            </View>
        </SafeAreaView>
    )
}

export default App
