import { View, StyleSheet,Text,TextInputBase, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
function SearchBar() {
    const navigate = useNavigation()
    return ( 

    
 <TextInput style={styles.searchBar} placeholder="Search..." onTextInput={()=>navigate.navigate("search")}/>
  

     );
}

const styles = StyleSheet.create({
    searchBar:{
    width:"100%",
    height:50,
    backgroundColor:"white",
    marginTop:"20%",
    borderRadius:30,
    elevation:2,
    paddingLeft:20
    }
})



export default SearchBar;