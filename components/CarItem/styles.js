import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    carCont: {
        width: '100%',
        height: '100%',
        backgroundColor: 'pink',
        color: "whitesmoke"
    },
    head: {
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 11
    },
    headTitle: {
        color: 'whitesmoke',
        fontSize: 17,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        color: 'whitesmoke'
    },
    img: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      position: 'absolute'
    },
    batSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    batImg: {
        height: 27,
        width: 72,
        marginRight: 12
    },
    batText: {
        color: 'whitesmoke',
        fontSize: 37,
        fontWeight: 'bold'
    },
    parking: {
        alignItems: 'center'
    },
    parkText: {
        fontSize: 22,
        color: 'whitesmoke',
        fontWeight: 'bold'
    },
    controller: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 176
    },
    controlBtn: {
        borderWidth: 1,
        borderColor: 'whitesmoke',
        borderRadius: 50,
        padding: 19,
        marginLeft: 25
    }
})

export default styles;