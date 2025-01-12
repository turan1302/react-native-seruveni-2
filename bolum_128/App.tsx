import React from 'react'
import {Dimensions, SafeAreaView, Text, View} from "react-native";

import {
  BarChart,
  LineChart, ProgressChart
} from "react-native-chart-kit";

const App = (props) => {

    const chartConfig = {
        backgroundGradientFrom: "#ff5b47",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#ffb23d",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(20, 20, 20, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };

    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [50, 45, 55, 80, 99, 65],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2 // optional
            }
        ],
        legend: ["Rainy Days"] // optional
    };

    const progress_data = {
        labels: ["Yüzme", "Motor", "Koşu"], // optional
        data: [0.4, 0.6, 0.8]
    };


  const bar_data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43]
      }
    ]
  };

    const screenWidth = Dimensions.get("window").width;

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{justifyContent: "center", alignItems: "center", marginTop: 20}}>

                {/*
            <LineChart
            data={{
              labels: ["January", "February", "March", "April", "May", "June"],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100
                  ]
                }
              ]
            }}
            width={Dimensions.get("window").width*0.95} // from react-native
            height={200}
            yAxisLabel="₺"
            yAxisSuffix="B"
            chartConfig={{
              backgroundColor: "transparent",
              backgroundGradientFrom: "#ff7979",
              backgroundGradientTo: "#ffd8ae",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#000000"
              }
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16
            }}
        />
        */}


                {/*
           <LineChart
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
        />
        */}


                {/*

        <ProgressChart
            data={progress_data}
            style={{
              borderRadius : 20
            }}
            width={screenWidth*0.95}
            height={220}
            strokeWidth={16}
            radius={32}
            chartConfig={chartConfig}
            hideLegend={false}
        />
        */}


              <BarChart
                  style={{
                    borderRadius : 20,
                  }}
                  data={data}
                  width={screenWidth*0.95}
                  height={220}
                  yAxisLabel="₺"
                  chartConfig={chartConfig}
                  verticalLabelRotation={13}
              />

            </View>
        </SafeAreaView>
    )
}

export default App
