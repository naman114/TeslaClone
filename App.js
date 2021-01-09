import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarItem from './Components/CarItem';
// It knows that index.js is the default file so don't mention it

export default function App() {
  return (
    <View style={styles.container}>
      
      {/* CarItem can now be used just as any other import */}
      <CarItem 
      name={'Model 3'} 
      tagline={'Order Online for'}
      taglineCTA={'Touchless Delivery'} 
      image={require('./assets/images/Model3.jpeg')}
      /> 

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
