/* 
It's better to put your code into components (DRY). Here we are splitting the component and styles from the Model S 
screen from app.js into index.js and styles.js 
*/

import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles'
import StyledButton from '../StyledButton';

const CarItem = (props) => {

    const {name, tagline, taglineCTA, image} = props; 

    return (
    /* A view is similar to div in web or Container in flutter. This is the outermost one */
      <View style={styles.carContainer}>
        <ImageBackground source={image} style={styles.image}/>
        {/* ../ allows us to go one directory up */}   
        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>
            {tagline}
            {' '} 
            {/* ^Javascipt white space */}
            {/* Nesting of Text */}
            <Text style={styles.subtitleCTA}>
              {taglineCTA}
            </Text>
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <StyledButton type='primary' content='Custom Order' onPress={()=>{console.warn('Custom Order Was Pressed');}}/>
          <StyledButton type='secondary' content='Existing Inventory' onPress={()=>{console.warn('Existing Inventory Was Pressed');}}/>
        </View>
        

      </View>
        
    );
};

export default CarItem; 