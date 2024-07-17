import { View ,Text,StyleSheet, SafeAreaView, Button, Pressable,Image} from "react-native";
import Header from "./Header";
import { NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Scanner from "./Scanner";
import { useNavigation } from "@react-navigation/native";
import Cart from "./Cart";
import HomeIcon from "./assets/home.png";
import whiteHomeIcon from "./assets/home (2).png"
import cartIcon from "./assets/shoppingCart.png";
import whiteCartIcon from "./assets/shopping-cart (2).png"
import bagIcon from "./assets/bag.png"
import whiteBagIcon from "./assets/bag (1).png"
import { Ionicons,MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import SearchBar from "./SearchBar";



function Home({navigation}) {

  
 
    const tab = createBottomTabNavigator();

    return ( 
      

        <View>
  <HomeScreen/>


        </View>
      
      /*
        <tab.Navigator >
            <tab.Screen name="home"  component={HomeScreen} options={{
                   headerShown:false,
                   tabBarLabel:"Home",
                   tabBarStyle:{
                    height:60,
                    backgroundColor:"orange"
                   }
                   ,
                   tabBarIcon:()=>{
                    <MaterialCommunityIcons name="home-variant" size={24} color="black" />
                   }
                   
            }}>

            </tab.Screen>
            <tab.Screen name="scan" component={Scanner} >

            </tab.Screen>
            <tab.Screen name="Cart" component={Cart}  options={
  {

   headerStyle:{
    backgroundColor:"rgba(245, 200, 200, 1)",
   }
  }}>

</tab.Screen>
        </tab.Navigator>

*/
     );
}



const HomeScreen=({navigation})=>{
  
return (
    <View style={style.container}>
    <Header />

     <BottomNavigation/>
    </View>
)
}



export const BottomNavigation=(props)=>{
    const naviagte = useNavigation();
    const [tabSelector , setTabSelector] = useState(1)
    return (
    <View style={style.bottom}>  
        <View style={style.navButton}>
            <View>
            <Pressable  onPress={
                ()=>{
                    naviagte.navigate("home");
                    setTabSelector(1);   
                } }>
                 
         <Image source={HomeIcon} style={style.icons}></Image>    
<Text style={style.bottomButtonText}>Home</Text>

</Pressable>
            </View>
<View > 
<Pressable    onPress={()=>{
    naviagte.navigate("orders")
    setTabSelector(2);   
}}>
        <Image source={bagIcon} style={style.icons}></Image>
        <Text style={style.bottomButtonText}>Orders</Text>
       </Pressable>
       </View>     

<View >
       <Pressable   onPress={()=>{
        naviagte.navigate("cart")
        setTabSelector(3);  
        } }>
        <Image source={cartIcon} style={style.icons}></Image>
        <Text style={style.bottomButtonText}>my Cart</Text>
       </Pressable>
       </View>
     {/*
       <Pressable style={tabSelector?style.bottomButton:{backgroundColor:"orange"}} onPress={()=>naviagte.navigate("home")}>

        <Image source={HomeIcon} style={style.icons}></Image>
   
        <Text style={style.bottomButtonText}>Home</Text>
    
       </Pressable>


       
       <Pressable style={style.bottomButton}  onPress={()=>naviagte.navigate("cart")}>
        <Image source={bagIcon} style={style.icons}></Image>
        <Text style={style.bottomButtonText}>Orders</Text>
       </Pressable>

       <Pressable style={tabSelector?style.bottomButton:{backgroundColor:"white"}}  onPress={()=>naviagte.navigate("cart")}>
        <Image source={cartIcon} style={style.icons}></Image>
        <Text style={style.bottomButtonText}>my Cart</Text>
       </Pressable>
     
    */}
        </View>
        </View>
     
    )
    }


const style = StyleSheet.create({

text:{

    alignSelf:"center",


},
backgroundColor:{
backgroundColor:"white"
},
container:{

    marginLeft:"5%",
    marginRight:"5%",
    height:"100%",

},
bottom:{
    //backgroundColor:"rgba(116, 193, 236, 1)",
//backgroundColor:"rgba(245, 200, 200, 1)",
backgroundColor:"rgb(66, 144, 245)",
//backgroundColor:"white",
position:"absolute",
height:50,
width:"100%",
bottom:20,
borderRadius:70,



shadowColor: '#000000',
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.9,
shadowRadius: 3,
elevation: 5,


},
icons:{
    width:20,
    height:20,
},
bottomButton:{
   
},
bottomButtonText:{
fontSize:10,


},
selector:{


backgroundColor:"white",
height:40,

borderRadius:30,




},

navButton:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",

marginLeft:"10%",
marginRight:"10%",
top:5
 
}
})
export default Home;