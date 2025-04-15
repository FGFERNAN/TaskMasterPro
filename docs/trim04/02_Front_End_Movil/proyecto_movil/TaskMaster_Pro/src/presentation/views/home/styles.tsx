import { StyleSheet } from "react-native";

const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E4E2DD',
    },

    ImageBackground: {
        width: '100%',
        height: '100%',
        opacity: 0.7,
        bottom: '30%',
    },

    form: {
        width: '100%',
        height: '40%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 15,
    },

    formText: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    formRegister: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
    },

    formRegisterText: {
        fontStyle: 'italic',
        color: 'orange',
        borderBottomWidth: 1,
        borderBottomColor: 'orange',
        fontWeight: 'bold',
        marginLeft: 10,
    },

    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: '20%',
    },

    logoImage: {
        width: 400,
        height: 200,
    },

    logoText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold',
    },

});


export default homeStyles