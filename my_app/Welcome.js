import { View,StyleSheet,Text,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ScanToCart from "./assets/ScanToCart2.png"
import AsyncStorage from "@react-native-async-storage/async-storage";

function Welcome() {
const navigate=useNavigation();



function redirect() {
navigate.navigate("home");
}

async function Call() {
    try{
        const data = await AsyncStorage.getItem("user");
        console.log(data)

        if(data==="1234"){
            navigate.navigate("home");
        }
      
      }catch(err){
          console.log(err)
      }
    
    
  }
  

Call()

    return (  
    <View style={styles.Welcome}>
       <Image source={ScanToCart} style={{width:150,height:150,borderRadius:20}}/>
    </View>);
}



const styles = StyleSheet.create({
    Welcome:{
flex:1,
alignItems:"center",
justifyContent:"center"
    }
})

export default Welcome;