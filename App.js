import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,View} from 'react-native';
import CarsList from './Components/CarsList/index';
// It knows that index.js is the default file so don't mention it

export default function App() {
  return (
    <View style={styles.container}>
      <CarsList/>
      <StatusBar style="auto" />
    </View>
  );
}
// CTA: Call to action

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
