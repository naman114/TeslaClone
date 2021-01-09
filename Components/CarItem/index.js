/* 
It's better to put your code into components (DRY). Here we are splitting the component and styles from the Model S 
screen from app.js into index.js and styles.js 
*/

import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles'
import StyledButton from '../StyledButton';

const CarItem = (props) => {
    return (
    /* A view is similar to div in web or Container in flutter. This is the outermost one */
      <View style={styles.carContainer}>
        <ImageBackground source={require('../../assets/images/ModelS.jpeg')} style={styles.image}/>
        {/* ../ allows us to go one directory up */}   
        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at $69,420</Text>
        </View>

        <StyledButton type='primary' content='Custom Order' onPress={()=>{console.warn('Custom Order Was Pressed');}}/>
        <StyledButton type='secondary' content='Existing Inventory' onPress={()=>{console.warn('Existing Inventory Was Pressed');}}/>
        

      </View>
        
    );
};

export default CarItem; 