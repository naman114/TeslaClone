import {StyleSheet} from 'react-native'; 
// {} must be used else error

const styles = StyleSheet.create({

    container: {
        width: '100%', //This means that it will take up the width of its parent
        padding: 10, //left and right
    },
    buttons: {
        //backgroundColor: 'yellow',
        height: 40,
        borderRadius: 20, //half of the height works best
        justifyContent: 'center', //vertically centered
        alignItems: 'center' //horizontally centered
    },
    text: {
        fontSize: 12,
        fontWeight: '500',
        textTransform: 'uppercase',
    },
});

export default styles;