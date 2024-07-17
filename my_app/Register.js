import { StyleSheet ,TextInput,View,Text, Pressable} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthEmail } from "./fetch";

function Register() {
    const navigate = useNavigation()
    return (  
     <View style={styles.container} >
        <Text  style={styles.text}>Enter Your Email</Text>
<TextInput keyboardType="email-address"  a style={styles.input} />
<Pressable style={styles.button} onPress={()=>navigate.navigate("password")}>
        <Text style={styles.buttonText}>next</Text>
    </Pressable>
    <Text style={{fontSize:15, marginTop:"10%"}}>Already a user <Text style={{color:"red"}}>Log in</Text></Text>
    </View>)
}

const styles = StyleSheet.create({
    container:{
        marginLeft:"5%",
        marginRight:"5%",
        marginTop:"20%"
    },
    input:{
      height:60,
      backgroundColor:"white",
      fontSize:20,
      paddingLeft:"10%",
      elevation:4,
      borderRadius:10        
    },
    text:{
        fontSize:20,
        marginTop:"10%",
        marginBottom:"10%",
        fontWeight:"500",
     
      
    },
    button:{
        backgroundColor:"rgb(66, 144, 245)",
        height:60,
        marginTop:"10%",
        elevation:5,
        borderRadius:10,
        opacity:0.7
    },
    buttonText:{
        textAlign:"center",
        fontSize:20,
        marginTop:"5%",
        alignItems:"center",
        fontWeight:"500",

        
    }
})


export default Register;