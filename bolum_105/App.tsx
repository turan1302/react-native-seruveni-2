import React, {useState} from 'react'
import {Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity} from "react-native";
import TagInput from 'react-native-tags-input';

const App = (props) => {
    const [tags, setTags] = useState({
        tag: '',
        tagsArray: []
    });

    const updateTagState = (state) => {
        setTags(state);

        console.log(state);
    };

    return (
        <SafeAreaView style={{flex: 1}}>
            <TagInput
                updateState={updateTagState}
                tags={tags}
                placeholder="Etiket Giriniz..."
                label='Etiket Dataları'
                labelStyle={{color: '#000',fontSize:20,marginBottom : 20,marginHorizontal : 7}}
                containerStyle={{width: (Dimensions.get('window').width)}}
                inputContainerStyle={[styles.textInput, {backgroundColor: "transparent"}]}
                inputStyle={{color: "red"}}
                autoCorrect={false}
                tagStyle={styles.tag}
                tagTextStyle={styles.tagText}
                keysForTag={','}/>
        </SafeAreaView>
    )
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "red",
    },
    textInput: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 8,
        borderRadius: 5,
        padding: 3,
    },
    tag: {
        backgroundColor: '#ff0000',
    },
    tagText: {
        color: "#fff",
    },
});
