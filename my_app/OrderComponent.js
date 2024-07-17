import { View,StyleSheet,Text } from "react-native";
function OrderComponent() {
    return ( 
    <View style={styles.orderCard}>
        <View style={styles.container}>
        <Text>hello</Text>
        </View>
    </View> );
}

const styles = StyleSheet.create({
     orderCard:{
      width:"100%",
      height:150,
      backgroundColor:"white",
      marginTop:"5%",
      borderRadius:10
     },
     container:{
  margin:10,
  
     }
})

export default OrderComponent;