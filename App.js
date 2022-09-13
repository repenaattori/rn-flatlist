
import { Image, ScrollView, StyleSheet, Text, View, StatusBar, FlatList} from 'react-native';
import {DATA} from './Data';


export default function App() {


  return (
    <ScrollView style={styles.container}>
      <View>
        <FlatList
          data={DATA}
          renderItem={({item}) => <Text>{item.fname}</Text>}
        />
      </View>
    </ScrollView>
  );
}


const Item = ({person}) => {
  return(
    <View>
      
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: (StatusBar.currentHeight || 0)+20
  },
  text:{
    padding: 10,
    fontSize: 40
  }
});
