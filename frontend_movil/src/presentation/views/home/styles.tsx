import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E4E2DD',
    },

    form: {
        width: wp('100%'),
        height: hp('40%'),
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: wp('4%'),
    },

    formText: {
        fontWeight: 'bold',
        fontSize: hp('2.0%'),
    },

    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: hp('20%'),
    },

    logoImage: {
        width: wp('100%'),
        height: hp('25%'),
    },

    entrar: {
        marginTop: hp('5%'),
    }

});


export default homeStyles