import { View,Text,SafeAreaView, Button,StyleSheet , PermissionsAndroid ,TouchableOpacity, Alert, Linking, Pressable} from "react-native";
import { useState , useEffect } from "react";
import { Camera ,CameraType} from "expo-camera";
import Header from "./Header";
import { BarCodeScanner } from "expo-barcode-scanner";
export default function Scanner({navigation}) {

const [hasPermission , setHasPermission]= useState(false);
const [scanned , setScanned] = useState(false);


const scanner = async()=>{

   const access = await Camera.useCameraPermissions()
   if(access.status === "granted"){
    console.log("success")
 }
}



const qr = (res)=>{
   
    alert(res.data)
    Linking.openURL(res.data);

  setScanned(false)
 
}





    const permission = async()=>{
        try{
        
            const request = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA, 
                {
                    title: 'Cool Photo App Camera Permission',
                    message:
                      'Cool Photo App needs access to your camera ' +
                      'so you can take awesome pictures.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                  },)
                
        if( request === PermissionsAndroid.RESULTS.GRANTED){
        
            console.log("You permitted for camera access")
        
        }else{
            console.log("not accessed")
        }
        
        
                    }
        
        catch(err){
        
        console.log(err)
        }
    }



    return ( 
      <SafeAreaView>
        <View style={style.backgroundColor}>
        <View style={style.container}>
         <Text style={style.text}>Scan the product</Text>
    
         <Camera style={style.camera} zoom={0.1} type={CameraType.back} onBarCodeScanned={ scanned ? qr : undefined}>



         </Camera>
         <View style={style.scan}>
        <Pressable  onPress={()=>setScanned(true)}>
           <Text style={style.text}>scan</Text>
        </Pressable>
        </View>
        </View>
    
    
        </View>
        <Pressable style={style.bottom} onPress={()=>navigation.navigate("Cart")}>
       <Text style={style.bottomButton}>Proceed</Text>
        </Pressable>

        </SafeAreaView>

     );
}


function ScannerBox() {
    return ( 
    <View style={style.box}>
     
    </View>
    );
}




const style = StyleSheet.create({
button:{
    marginTop:600
},
backgroundColor:{
    backgroundColor:"white"
},
container:{
   
    height:"100%",
 
}, 
camera :{

   
    width:"60%" ,
    height:"40%",
     alignSelf:"center",
     top:100,
     borderRadius:10,
     borderBottomColor:"blue",
     borderWidth:5


},
scan:{
 top:"20%",
 width:"60%",
 height:50,
 borderRadius:20,
 opacity:0.8,
 alignSelf:"center",
 backgroundColor:"lightgreen",
 padding:10
 

},
text:{
    textAlign:"center",
    fontSize:20,
},
bottom:{
    position:"absolute",
    bottom:0,
    width:"100%",
    height:50,
    backgroundColor:"rgb(66, 144, 245)",
    padding:10
},
bottomButton:{
    textAlign:"center",
    fontSize:20
},
box:{
    width:"60%",
    height:"30%",
    alignSelf:"center",
    top:"20%",
    opacity:0.5,
    borderRadius:15,

},


})


