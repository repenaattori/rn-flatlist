
import { Image, ScrollView, StyleSheet, Text, View, StatusBar, FlatList} from 'react-native';
import {DATA} from './Data';


export default function App() {


  return (
    <ScrollView style={styles.container}>
      <View>
        <FlatList
          data={DATA}
          renderItem={({item}) => <Item person={item} ></Item>}
        />
      </View>
    </ScrollView>
  );
}


const Item = ({person}) => {
  return(
    <View style={styles.card}>
      <Text style={styles.text}>{person.lname} {person.fname}</Text>
      <Image style={styles.image} source={{uri: person.img}}/>
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
    fontSize: 20,
  },
  image:{
    width: 100,
    height: 150
  },
  card:{
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10
  }
});
