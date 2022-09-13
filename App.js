
import { Image, ScrollView, StyleSheet, Text, View, StatusBar } from 'react-native';
import {DATA} from './Data';


export default function App() {


  return (
    <View style={styles.container}>
      <Text>My app</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight || 0
  }
});
