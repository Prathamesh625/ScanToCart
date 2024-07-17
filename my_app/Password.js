import { StyleSheet ,TextInput,View,Text, Pressable,Modal} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
function Password() {
    const [state , setState] = useState(false);

    return (  
     <View style={styles.container} >
    <Text  style={styles.text}>Enter Your Password</Text>
<TextInput keyboardType="visible-password"  style={styles.input} />
<Pressable style={styles.button}  >
    <Text style={styles.buttonText} onPress={()=>setState(true)}>Sign Up</Text>
    </Pressable>
    <ModalView state={state} setState={setState} />
    </View>)
}



const ModalView =(props)=>{


    return(
       
    <Modal animationType="fade" transparent={true}  visible={props.state} >
      <View style={styles.modal}>
         <View style={styles.container}>
            <Pressable style={styles.modalButton} onPress={()=>props.setState(false)}>
               <Text style={{textAlign:"center" ,fontWeight:"500" }}>Pay</Text>
</Pressable>
       </View>
       </View>
    </Modal>

    
    )
    
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

        
    },
    modalButton:{
        position:"absolute",
        backgroundColor:"rgb(66, 144, 245)",
         width:"30%" ,
         padding:"10%",
         alignSelf:"center",
       bottom:"5%",
        elevation:5

 },

 modal:{
     backgroundColor:"white",
    marginTop:"50%",
     margin:"20%",
     width:"100%",
     height:"60%",
     position:"absolute",
     alignSelf:"center",
     justifyContent:"center",
     borderRadius:5,
     elevation:10
 },
})


export default Password;