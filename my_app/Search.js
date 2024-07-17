import { View ,StyleSheet, Pressable,Text} from "react-native";
import { BottomNavigation } from "./Home";
import SearchBar from "./SearchBar";

function Search() {
    return ( 
        <View style={style.container}>
<SearchBar/>
<SearchResult/>
<BottomNavigation/>
        </View>
     );
}


function SearchResult() {

    return (
     <View style={style.result}>
<SearchList/>
<SearchList/>
<SearchList/>
    </View> );
}


function SearchList() {
    return ( 
        <Pressable style={style.searchlist}>
            <Text style={{color:"darkblue"}}>This is Your product</Text>
        </Pressable>
     );
}






const style = StyleSheet.create({
    container:{
        marginLeft:"5%",
        marginRight:"5%",
        height:"100%"
    },
    result:{
        width:"100%",
        height:"70%",
        marginTop:"10%",
        borderRadius:10,
      
    },
    searchlist:{
        backgroundColor:"white",
        height:"10%",
        padding:20,
        elevation:1,
        marginTop:1
    
    }
    
})


export default Search;