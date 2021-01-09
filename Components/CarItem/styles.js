import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    carContainer: {
        // Now it shouldn't take all the space of its parent as now the parent is FlatList and 100% height is not suitable in a list
        height: Dimensions.get('window').height,
        width: '100%',
      },
      titles:{
        alignItems: 'center',
        marginTop: '30%',
        width: '100%'
      },
      title:{
        fontSize: 40,
        fontWeight: '500',
      },
      subtitle:{
        fontSize: 16,
        color: '#5c5e62',
      },
      subtitleCTA: {
        textDecorationLine: 'underline',
        color: 'black'
      },
      image: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        position: 'absolute',
        //Position asolute: In order to not push our components underneath
      },
      buttonContainer: {
        position: 'absolute',
        bottom: 50, //50 px from the bottom
        width: '100%',
      },
});

export default styles;