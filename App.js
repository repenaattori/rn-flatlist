
import { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View, StatusBar, FlatList, TextInput} from 'react-native';
import {DATA} from './Data';


export default function App() {

  const [data, setData] = useState();

  const searchData = (text) =>{
    const seachArray = DATA.filter(p=> p.lname.startsWith(text))
    setData(seachArray);
  }

  useEffect(()=>{
    setData(DATA);
  },[]);

  return (
   
      <View style={styles.container}>
          <Search search={searchData}/>
          <FlatList
            data={data}
            renderItem={({item}) => <Item person={item} ></Item>}
          />
      </View>
    
  );
}


const Search = ({search})=>{

  const [text, setText] = useState('');

  return(
    <View>
      <TextInput 
        style={styles.search}
        placeholder='Search...'
        returnKeyType='search'
        onSubmitEditing={()=>search(text)}
        value={text}
        onChangeText={t => setText(t)}
      />
    </View>
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
  },
  search:{
    fontSize: 40,
    backgroundColor: 'beige'
  }
});
