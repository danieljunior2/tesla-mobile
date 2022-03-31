import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    item: {
      marginTop: 20,
      marginLeft: 20,
      marginRight: 20
    },
    icon: {
       color: 'whitesmoke'
    },
    menuTxt: {
        color: 'whitesmoke',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 15,
        textTransform: 'uppercase'
    },
    row: {
        marginTop: 15,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuBox: {
       flexGrow: 1 
    },
    arrow: {
      color: '#4d4d4e'  
    },
    subTitle: {
        color: 'grey',
        fontSize: 13,
        marginLeft: 15
    }
})

export default styles;