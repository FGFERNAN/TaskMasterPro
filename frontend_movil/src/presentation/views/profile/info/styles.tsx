import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const profileStyles = StyleSheet.create({
    container: {
        flex: 10,
        padding: wp('5%'),
        backgroundColor: '#E4E2DD',
    },
    title: {
        fontSize: hp('3%'),
        fontWeight: 'bold',
        marginBottom: hp('2%'),
        textAlign: 'center',
    },
    productContainer: {
        padding: wp('3.5%'),
        backgroundColor: '#fff',
        borderRadius: wp('3%'),
        marginBottom: hp('1.5%'),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    productText: {
        fontSize: hp('2.1%'),
        marginBottom: hp('1.5%'),
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: '#6DA2C2',
        padding: hp('1.1%'),
        borderRadius: wp('1.6%'),
        marginHorizontal: wp('1.5%'),
    },
    buttonDelete: {
        padding: hp('1.1%'),
        borderRadius: wp('1.6%'),
        marginHorizontal: wp('1.5%'),
        backgroundColor: 'red'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: hp('1.6%'),
    },
    input: {
        height: hp('5.5%'),
        width: wp('75%'),
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: wp('1.6%'),
        marginBottom: hp('1.5%'),
        paddingHorizontal: wp('3%'),
        backgroundColor: '#fff',
    },
    addButton: {
        backgroundColor: '#429866',
        padding: hp('1.7%'),
        borderRadius: wp('1.5%'),
        alignItems: 'center',
        marginBottom: hp('1.3%'),
    },
    addButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: hp('1.7%'),
    },
    buttonClose: {
        justifyContent: 'center', 
        backgroundColor: '#204b42',
        borderRadius: wp('1.4%'),
        padding: hp('1%'),
        marginBlockStart: hp('2.5%')   
    },
    searchButton: {
        backgroundColor: '#9f9f9f',
        padding: hp('1.8%'),
        borderRadius: wp('1.7%'),
        alignItems: 'center',
        marginBottom: hp('1.5%'),
    },
    
    reportButton: {
        backgroundColor: '#84dec8',
        padding: hp('1.7%'),
        borderRadius: wp('1.5%'),
        alignItems: 'center',
        marginBottom: hp('1.1%'),
    },
    reportButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: hp('1.7%'),
    },
    modalContent: {
        backgroundColor: 'white',
        padding: wp('5%'),
        borderRadius: wp('3%'),
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: hp('2.5%'),
        fontWeight: 'bold',
        marginBottom: hp('1.5%'),
    },
    modalText: {
        fontSize: hp('2%'),
        marginBottom: hp('1%'),
    },
    closeButton: {
        marginTop: hp('2.5%'),
        padding: hp('1.2%'),
        backgroundColor: '#508199',
        borderRadius: wp('1.6%'),
    },
    closeButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: hp('1.7%'),
    }
})

export default profileStyles;