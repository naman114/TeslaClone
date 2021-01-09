import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    carContainer: {
        // Takes up full space of the container
        height: '100%',
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