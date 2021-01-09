import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 50,
        zIndex: 100, 
        // The logo and menu are beneath so we need > 0 zIndex
        flexDirection: 'row',
        // Sets them in a row instead of one of top of another
        justifyContent: 'space-between',
        width: '100%',
        //padding: 12, Only Add horizontal Padding
        paddingHorizontal: 20,
    },
    logo: {
        width: 100,
        height: 20,
        resizeMode: 'contain'
    },
    menu: {
         width: 25,
         height: 25,   
         resizeMode: 'contain'
    },
});

export default styles; 