
import { Button, Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TextInputBase, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import profile from "./assets/profile.png"
import scanImg from "./assets/qr-code.png"
export default function Header() {
  const navigate = useNavigation();
    return (
      <SafeAreaView>
  <View style={styles.display}>
       
<Pressable style={styles.qr}  onPress={()=>navigate.navigate("scanner")}>
<Image source={scanImg} style={styles.barcode} />
</Pressable>

  <View style={styles.header}>
<TextInput  placeholder='Search....' style={styles.search}/>
      <Pressable style={styles.profileButton} onPress={()=>navigate.navigate("login")}>
      <Image source={profile} style={styles.profile}></Image>
      </Pressable>
   
       </View> 
      
       </View>

       
       
      </SafeAreaView>
     
    );
  }
  
  const styles = StyleSheet.create({
  header: {
   width:"78%",
  height:50,
top:50,
borderRadius:70,
//backgroundColor:"rgba(116, 193, 236, 1)",
//backgroundColor:"rgba(245, 200, 200, 1)",
//backgroundColor:"rgb(66, 144, 245)",
   backgroundColor:"orange",
padding:10,
borderWidth:0,

shadowColor: '#000000',
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.9,
shadowRadius: 3,
elevation: 5,

    },
    text:{
    textAlign:"center",
    fontSize:20

    },
    qr:{
      height:50,
      top:50,
      width:"20%",
    borderRadius:100 ,
    backgroundColor:"orange",
    //backgroundColor:"rgba(116, 193, 236, 1)",
    //backgroundColor:"rgba(245, 200, 200, 1)",

  // backgroundColor:"rgb(66, 144, 245)",

    textAlign:"center",
    marginRight:"2%",
    padding:10,
    borderWidth:0,
    shadowColor: '#000000',
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.9,
shadowRadius: 3,
elevation: 5,

    },
    display:{
    flexDirection:"row"
    },
    profile:{
      width:30 ,
      height:30 , 

    },
    profileButton:{
      position:"absolute" ,
      alignSelf:"flex-end",
      right:10,
      top:10,
      alignContent:"center"
    },

    barcode:{
      width:30 ,
      height:30 ,
      marginLeft:10
    },
    search:{
    top:5,
    marginLeft:10
    }
  });