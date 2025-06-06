import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Payment from '../screens/Payment';
import PaymentSuccess from '../screens/PaymentSuccess';
import PaymentError from '../screens/PaymentError';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
   <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown : false
        }} initialRouteName={"Home"}>
            <Stack.Screen name={"Home"} component={Home}/>
            <Stack.Screen name={"Payment"} component={Payment}/>
            <Stack.Screen name={"PaymentSuccess"} component={PaymentSuccess}/>
            <Stack.Screen name={"PaymentError"} component={PaymentError}/>
        </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Routes
