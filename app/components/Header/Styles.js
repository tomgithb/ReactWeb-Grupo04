import { StyleSheet } from "react-native";

// Header

const styles = StyleSheet.create({
    headercontainer: {
        width: 100,
        height: 100,
        flexDirection: 'row',
        elevation: 1.5,
        backgroundColor: 'orange'

    },
    headericonButton: {
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerimageButton: {
        height: 40,
        width: 40,
        borderRadius: 50,
    },
    headerborderContainer: { 
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center' 
    },
    headertitleContainer: {
        flex: 2,
        justifyContent: 'left',
    },
    headertitle: {
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'left',
        color:'white'
    }
});

export default styles;
