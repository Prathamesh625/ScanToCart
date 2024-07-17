import Header from "./Header";
import { View ,StyleSheet, ScrollView} from "react-native";
import { BottomNavigation } from "./Home";
import OrderComponent from "./OrderComponent";

function Orders() {




    return (  
        <View>
    <View style={style.container}>
<View style={style.scroll}>
    <ScrollView showsVerticalScrollIndicator={false}>
 <OrderComponent/>    
 <OrderComponent/>   
 <OrderComponent/>   
 <OrderComponent/>   
 <OrderComponent/>   
 <OrderComponent/>   
 <OrderComponent/>  
 </ScrollView>   
 </View> 
<BottomNavigation />

    </View>
    </View>
    );
}






const style = StyleSheet.create({
    container:{
      marginLeft:"5%",
      marginRight:"5%",
      height:"100%"
      
    },
    scroll:{
     marginBottom:"25%"
    }
})

export default Orders;