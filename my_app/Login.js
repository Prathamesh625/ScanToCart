import { Button, TextInput, View , StyleSheet ,Text , Image, Pressable} from "react-native"
import logo from "./assets/google.png"
import ScanToCart from "./assets/ScanToCart2.png"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { AuthEmail } from "./fetch"
import { useState } from "react"


export default function Login(){
const [email, setEmail] = useState("")
const [password, setPassword] = useState("");


AuthEmail()



  async function Call() {
  


    try{

      AsyncStorage.setItem("user" , "1234")
      
      }catch(err){
          console.log(err)
      }
    
      const data = await AsyncStorage.getItem("user");
      console.log(data)
  }
  

Call()



return(
  <View >
    <View style={styles.login}>

<Image source={ScanToCart} style={styles.ScanToCart_image}/>

<View style={styles.google}>
    <Pressable style={{flexDirection:"row" , alignSelf:"center"}} >
    <Image source={logo} style={styles.image}/> 
        <Text >
        <Text style={styles.button}> Sign in with google</Text>
        </Text>
        </Pressable>
      
    </View>
    <Text style={{fontSize:20 , marginTop:30 , position:"absolute" , bottom:400, alignSelf:"center"}} >or Sign in with</Text>
  
      <View style={styles.signin_box}>
      
        <Text style={{fontSize:20,fontWeight:"bold" , margin:10  }}>Sign In  </Text>
        <TextInput style={styles.input}placeholder="Email" value={email} onChangeText={(newEmail)=>setEmail(newEmail)}/>
        <TextInput style={styles.input} placeholder="password" value={password} onChangeText={(newPassword)=>setPassword(newPassword)}/>
       <Pressable >
       <Text style={styles.button}>Sign In</Text>
       </Pressable>  
       <Text style={styles.text}>Not Signed up yet, <Text style={{color:"red" , fontWeight:"bold"}}> Sign Up</Text> </Text>
       </View>   
    </View>
    </View>
)

}


const styles = StyleSheet.create({
  backgroundColor:{
   // backgroundColor:"rgb(66, 144, 245)",
  
  },

login:{
   
    marginLeft:"10%",
    marginRight:"10%",
    height:"100%",
    alignSelf:"center",    
}
,  input: {
    color:"black",
    height: 60,
    margin:10,
    borderRadius:10,
    padding: 10,
  backgroundColor:"white",
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1.9,
    shadowRadius: 3,
    elevation: 5,

   


  },
button:{
   
    color:"white",
    fontWeight:"bold",
    fontSize:20,
    textAlign:"center",

  backgroundColor:"rgb(66, 144, 245)",
   height: 50,
   margin: 10,
  borderRadius:10,
   padding: 10,
  

   shadowColor: '#000000',
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 0.9,
   shadowRadius: 3,
   elevation: 5,
},
text:{
    fontSize:15,  
    textAlign:"center",
  margin:15,
    color:"black",
 
}
,
google:{

marginLeft:"10%",
marginRight:"10%",
alignSelf:"center",
position:"absolute",
textAlign:"center",
 backgroundColor:"rgb(66, 144, 245)",
borderRadius:10,
color:"black",
bottom:500,
width:"100%",
height: 50,
margin: 10,
padding:10,
borderRadius:10,
elevation:5
}, 
googleSignIn:{
  color:"white",
  fontSize:15,
  fontWeight:"500"

},


image:{
  width:24,
  height:24,
  marginRight:10

}
,

signin_box:{
  position:"absolute",
  width:"100%",
  alignSelf:"center",
  bottom:25,



}


,

ScanToCart_image:{
width:100,
height:100,
position:"absolute",
top:50,
opacity:0.6,
alignSelf:"center",
borderRadius:30
}


})

