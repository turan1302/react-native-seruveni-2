import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

function HomeScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.screen}>
            <Text style={styles.text}>Ana Sayfa</Text>
            <Button title="Detay Sayfası" onPress={() => navigation.navigate('Details')} />
        </View>
    );
}

function DetailsScreen() {
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>Detay Sayfası</Text>
        </View>
    );
}

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={"Home"}
                screenOptions={{
                    headerShown: false,
                    gestureEnabled : true,
                    cardStyleInterpolator : ({current,next,layouts})=>{
                        const translateX = current.progress.interpolate({
                            inputRange : [0,1],
                            outputRange : [layouts.screen.width,0]
                        });

                        const translateY = next ? next.progress.interpolate({
                            inputRange : [0,1],
                            outputRange : [layouts.screen.height,0]
                        }) : 0;

                        return {
                            cardStyle : {
                                transform : [
                                    {translateX},
                                    {translateY},
                                ]
                            }
                        }
                    },
                    transitionSpec : {
                        open : {
                            animation : 'spring',
                            config : {
                                stiffness : 1000,
                                damping : 500
                            }
                        },
                        close : {
                            animation : 'spring',
                            config : {
                                stiffness : 1000,
                                damping: 500
                            }
                        }
                    }
                }}
            >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        marginBottom : 30
    },
});

export default App;
