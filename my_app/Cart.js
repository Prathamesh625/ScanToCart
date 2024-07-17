
import { View , Text , StyleSheet, ScrollView, Pressable,Modal} from "react-native";
import CartComponent from "./CartComponent";
import RazorpayCheckout from "react-native-razorpay";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

function Cart() {
  

    const [state , setState] = useState(false);

    return ( 
    <View>
       <View style={style.container}>
       <View> 
      <ScrollView showsVerticalScrollIndicator={false} style={style.scroll}>
        <CartComponent/>   
        <CartComponent/>  
        <CartComponent/>  
        <CartComponent/> 
        <CartComponent/>  
        <CartComponent/>   
        <CartComponent/>  
        <CartComponent/>   
        </ScrollView> 
        </View>
        
<View style={style.bottom} >

<AddMore/>
<MakePayment state ={setState} />
    </View>
 
 <ModalView state={state} setState={setState} />

    </View>

    </View>  
    );
}


function AddMore() {
    const navigate = useNavigation();
    return ( <View style={style.buttonAddMore}>
        <Pressable onPress={()=>navigate.navigate("scanner")}>
            <Text style={style.buttonText}>Add More</Text>
        </Pressable>
    </View> );
}



function MakePayment(props) {

    return ( 
    <View  style={style.buttonMakePay}>
        <Pressable onPress={()=>props.state(true)} >
            <Text style={style.buttonText} >Pay</Text>
        </Pressable>
    </View> );
}




const ModalView =(props)=>{


    return(
       
    <Modal animationType="slide" transparent={true}  visible={props.state} >
      <View style={style.modal}>
         <View style={style.container}>
            <Pressable style={style.modalButton} onPress={()=>props.setState(false)}>
               <Text style={{textAlign:"center" ,fontWeight:"500" }}>Pay</Text>
</Pressable>
       </View>
       </View>
    </Modal>

    
    )
    
    }
    


const style = StyleSheet.create({

    container:{
    height:"100%",
    marginLeft:"5%",
    marginRight:"5%"

    },

    cart:{
    position:"absolute",
    alignSelf:"center",         
    fontSize:30
   
    },
    buttonAddMore:{
      backgroundColor:"orange",
        width:"50%",
        height:50,
        padding:10,
        borderRadius:10,
        elevation:5,
    
        
    
    },
    buttonMakePay:{
       backgroundColor:"rgb(66, 144, 245)",
        width:"50%",
        height:50,
        padding:10,
        borderRadius:10,
     elevation:5,
   
   
    },
    

    buttonText:{
        fontSize:18,
        textAlign:"center",
    },
    bottom:{
        width:"100%",
        flexDirection:"row" , 
        position:"absolute", 
        bottom:20 , 
        justifyContent:"space-between"
       
        
    },
    modalButton:{
           position:"absolute",
           backgroundColor:"rgb(66, 144, 245)",
            width:"30%" ,
            padding:"10%",
          bottom:"5%",
          alignSelf:"flex-end",
             elevation:5

    },
    scroll:{
     marginBottom:"25%"
    },
    modal:{
        backgroundColor:"white",
        marginTop:"40%",
        margin:"20%",
        width:"100%",
        height:"70%",
        position:"absolute",
        alignSelf:"center",
        borderRadius:5,
        elevation:10
    },
    topComponent:{
        backgroundColor:"white", 
        height:"5%", 
        marginTop:"5%" ,
         marginBottom:"2%" , 
         elevation:5,
         padding:10,
         borderRadius:10
    }
})


export default Cart;