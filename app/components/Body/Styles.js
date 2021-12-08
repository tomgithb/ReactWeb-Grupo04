import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
      headercontainer: {
        flexDirection: 'row',
        height: 50,
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
    },
  
  bigview: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  smallview: {
    height: 100,
    width: (Dimensions.get('window').width / 2) - 4,
  },
  myimage: {
    flex: 1,
    alignContent: "stretch"
  }
});

export default styles;
