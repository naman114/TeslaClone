// index.js is where we render everything
//We will use this inside the CarItem component

import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const StyledButton = (props) =>{
    //props are the properties sent by the parent component
    //There are 2 types of buttons- primary (dark background, white text) and sec (white bg, dark text)

    // const type = props.type;
    // const content = props.content;
    // const onPress = props.onPress;
    // The above 3 lines can be written in 1 line using the ES6 destructuring feature
    // When the name of the const variable and the field we are accessing is the same we can do it like this: 
    const { type, content, onPress} = props;

    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const textColor = type === 'primary' ? '#FFFFFF' : '#171A20';

    return(
        <View style={styles.container}>
            <Pressable 
            style={[styles.buttons, {backgroundColor: backgroundColor}]}
            // Dynamically change styles using properties: 
            // In order to send something from here to styles, add that property inside {} and pass it as second 
            // element in an array. 
            onPress={onPress}  
            >
            <Text style={[styles.text, {color: textColor}]}>{content}</Text>
            {/* Content must be put inside curly braces to be treated as a variable */}
            </Pressable>
        </View>
    );
};

export default StyledButton;