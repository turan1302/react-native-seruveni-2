import React from 'react'
import {SafeAreaView, Text} from "react-native";
import {SliderBox} from "react-native-image-slider-box";

const App = (props) => {

    const images = [
        "https://mfsoftware.net/storage/logo/mfsoftware-blog.png",
        "https://mfsoftware.net/storage/user/muhammed-fatih-bagcivan.jpg"
    ]

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#fff"}}>
            <SliderBox images={images} sliderBoxHeight={200}
                       dotColor="#000"
                       inactiveDotColor="#90A4AE"
                       dotStyle={{
                           width: 15,
                           height: 15,
                           borderRadius: 0,
                           marginHorizontal: -5,
                       }}
                       autoplay
                       circleLoop
                       autoplayInterval={10000}
                       resizeMode={"contain"}
            />
        </SafeAreaView>
    )
}

export default App
