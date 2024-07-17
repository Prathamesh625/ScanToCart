import { View , StyleSheet, Text, TouchableHighlight, Pressable,Image} from "react-native";
import deleteIcon from "./assets/delete.png"
import { Modal,ToastAndroid } from "react-native";
import { useState } from "react";
import product from "./assets/lime.jpg"


function CartComponent() {

   const [open , setOpen]= useState(false)



    return ( <View style={style.comp}>
        <View style={style.container}>
    <View style={style.display}>
       
       
    <Text style={style.product}>
    Cart Element
   </Text>
 <Text>₹325</Text>
  <Pressable onPress={()=>setOpen(true)}>
    <Image source={deleteIcon} style={style.icons}/>
     </Pressable>

  
 </View>
 
<Quantity/>



{
open && <ModalView open={setOpen}/>
}

</View>

    </View> );
}


function Quantity() {

    const [incr, setincr] = useState(1);


    return ( 
       <View >
   <View style={{flexDirection:"row" , justifyContent:"space-between" ,top:"20%", width:"10%"}}>
    <View style={{flexDirection:"row"}}>
    <Pressable style={style.button} onPress={incr<20?()=>setincr(incr+1):()=>setincr(20)}>
        <Text style={{fontSize:20}}>  + </Text>
       
    </Pressable >
    <Pressable style={{backgroundColor:"white",elevation:5,width:30 ,height:30, marginRight:"10%" , borderRadius:20 }}>
        <Text style={{fontSize:20}}>  {incr}
        </Text>
    </Pressable>
    <Pressable style={style.button} onPress={incr>0? ()=>setincr(incr-1):()=>setincr(1)}>
        <Text style={{fontSize:20}}>  - </Text>
    </Pressable>
    </View>
   
   </View>

       </View>

/*
<View style={style.quantity}>
<View style={style.display}>


<View >
<Pressable style={style.button}>
<Text >+</Text>
</Pressable>

<Pressable style={style.button}>
<Text >-</Text>
</Pressable>
</View>
<View >
<Text> 2 </Text>
</View>
</View>
</View>

*/

     );
}




const ModalView =(props)=>{

    const [state , setState] = useState(false)

  const deleteItem =()=>{
   ToastAndroid.show("Item Deleted Succesfully", 1)
  setState(false);
  props.open(false);
  }
    
return (

<Modal animationType="fade" transparent={true}   visible={props.state} >
<View style={style.modal}>
   <View style={style.container}>
    <Text style={style.text}>Are You Sure You Want To Remove It</Text>
<View style={style.bottomButton}> 
      <Pressable style={style.modalButton} onPress={()=>props.setState(false)}>
         <Text style={{textAlign:"center" ,fontWeight:"500" }}>No</Text>
</Pressable>
<Pressable style={style.modalButton} onPress={deleteItem}>
         <Text style={{textAlign:"center" ,fontWeight:"500" }}>Yes</Text>
</Pressable>
</View>
 </View>
 </View>   
</Modal>

);

}

const style = StyleSheet.create({

    comp:{
      
      height:150,
        backgroundColor:"white",
        marginTop:"5%",
        borderRadius:10,
        elevation:3
    },
    container:{
 margin:"5%"
    },
    
    display:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between"
    },

    text:{
     color:"red",
    },
    quantity:{
       
        flexDirection:"row", 
       marginTop:"20%",
        width:"100%",
       height:"30%",
        justifyContent:"space-between"

    },
    button:{
        backgroundColor:"white" ,  elevation:5,width:30 ,height:30, marginRight:"10%" , borderRadius:20
    },
    product:{
      fontWeight:"500"
    },

    icons:{
        width:20,
        height:20
    },
    modal:{
        backgroundColor:"white",
        top:"30%",
        margin:"20%",
        width:"100%",
        height:"30%",
        position:"absolute",
        alignSelf:"center",
        borderRadius:5,
        elevation:10
    },
    modalButton:{
        backgroundColor:"rgb(66, 144, 245)",
        width:"50%" ,
        marginTop:"20%",
         padding:"5%",
         position:"relative",
          elevation:5,
         margin:1,
        

 },
 modaldisplay:{
    height:"100%",
    marginLeft:"5%",
    marginRight:"5%",
    padding:"10%"

    },
    bottomButton:{
   flexDirection:"row",
  alignSelf:"center",
   width:"100%",
   bottom:10,
    },
    text:{
        fontSize:20
    }
})




export default CartComponent;