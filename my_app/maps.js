import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

function Maps() {
    return ( 
    <View style={styles.container}>
      <MapView style={styles.map}  />
    </View>
     );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default Maps;