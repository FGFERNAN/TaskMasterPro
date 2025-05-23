import { StyleSheet } from "react-native";

const registerStyles = StyleSheet.create({
    pickerContainer: {
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#d1d1d1',
        marginVertical: 10,
    },
    picker: {
        height: 50,
        width: '100%',
    },
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
        height: '75%',
        backgroundColor: '#DAF5E3',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 10,
    },

    formText: {
        fontWeight: 'bold',
        fontSize: 17,

    },

    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: '5%',
        alignItems: 'center'
    },

    logoImage: {
        width: 100,
        height: 100,
    },

    logoText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold',
    },

});

export default registerStyles