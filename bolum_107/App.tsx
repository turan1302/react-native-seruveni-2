import React, {useEffect} from 'react'
import {SafeAreaView, Text, TouchableOpacity} from "react-native";
import { Root,Popup,Toast } from 'popup-ui';

const App = (props) => {

    const alertButton = ()=>{
      Popup.show({
        type: 'Warning',
        title: 'Dikkat!!',
        button: true,
        textBody: 'Kayıt silinecektir. Onaylıyor Musunuz ?',
        buttonText: 'Onayla',
        callback: () => {
          console.log("Kayıt silindi");
        }
      })
    }

    const toastButton = ()=>{
      Toast.show({
        title: 'Hata',
        text: 'İşlem Başarısız',
        color: '#ff0000',
        timing : 4000
      })
    }


  useEffect(() => {

    setTimeout(()=>{
      /*
      Popup.show({
        type: 'Success',
        title: 'Upload complete',
        button: true,
        textBody: 'Congrats! Your upload successfully done',
        buttonText: 'Ok',
        callback: () => Popup.hide()
      })

       */
    },2000);


  }, []);

  return (
      <Root>
        <SafeAreaView style={{flex : 1}}>
          <TouchableOpacity onPress={alertButton}>
            <Text>Mesaj Göster</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={toastButton} style={{marginTop : 20}}>
            <Text>Toast Göster</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Root>
  )
}

export default App
