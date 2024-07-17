import { StatusBar } from 'expo-status-bar';
import { Button, Modal, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from "./Header";
import Login from "./Login"
import Scanner from './Scanner';
import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { TouchableOpacity} from 'react-native';
import Home from './Home';
import { NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from './Cart';
import Orders from './Orders';
import Search from './Search';
import { SearchBar } from 'react-native-screens';
import Welcome from './Welcome';
import Register from './Register';
import Password from './Password';
import Maps from './maps';

export default function App() {

const stack = createNativeStackNavigator();

  return (
<NavigationContainer>

  
 
<stack.Navigator>



{/*}
<stack.Screen name='Register' component={Register} options={
  {
    title:"register",
   headerStyle:{
    backgroundColor:"rgb(66, 144, 245)",
   },
  }
 }/>

 
<stack.Screen name='password' component={Password} options={
  {
    title:"password",
   headerStyle:{
    backgroundColor:"rgb(66, 144, 245)",
   },
  }
 }/>

*/}


<stack.Screen name='maps' component={Maps} options={
  {
    title:"maps",
    headerShown:false
  }
 }/>
 <stack.Screen name='home' component={Home} options={
  {
    title:"Home",
   headerStyle:{
    backgroundColor:"orange",
   },
headerShown:false
 
  }
 }>
  

</stack.Screen>


<stack.Screen name='scanner' component={Scanner}   
options={
  {
    title:"Scanner",
   headerStyle:{
    backgroundColor:"rgb(66, 144, 245)"
   }
  }
  }>

</stack.Screen>
<stack.Screen name='login' component={Login} options={
  {
    title:"Login",
   headerStyle:{
    backgroundColor:"rgb(66, 144, 245)",
   }
  }}>

</stack.Screen>

<stack.Screen name='cart' component={Cart} options={
  {
    title:"My Cart",
   headerStyle:{
  //  backgroundColor:"rgba(245, 200, 200, 1)",
  backgroundColor:"rgb(66, 144, 245)",

   }
  }
  }>

</stack.Screen>
<stack.Screen name='orders' component={Orders} options={
  {
    title:"My Orders",
  
   headerStyle:{
  backgroundColor:"rgb(66, 144, 245)",

   }
  }
  }>

</stack.Screen>
<stack.Screen name='search' component={Search} options={{
  headerShown:false
}
}>

</stack.Screen>


</stack.Navigator>

 </NavigationContainer>


  );
}




const styles = StyleSheet.create({
  container: {
marginLeft:"5%",
marginRight:"5%"
  },
 
  
});
