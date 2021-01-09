import React from 'react';
import {Dimensions, FlatList, View} from 'react-native';

import CarItem from '../CarItem';
import cars from './cars';
import styles from './styles';

const CarsList = (props) => {
    return(
        <View style={styles.container}>
        <FlatList
            data={cars}
            renderItem={({item}) => <CarItem car={item}/>}
            // FlatList takes these 2 required parameters
            // data is the list/array of info
            // renderItem takes a function: Each array element is passed to the function 
            keyExtractor={(item,index) => index.toString()}

            snapToAlignment={'start'}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('window').height}
            // 3 properties to achieve snap effect

            showsVerticalScrollIndicator={false}
        />
        </View>
    );
};

export default CarsList;