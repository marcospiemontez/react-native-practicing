import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    formContent: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f6f6f6',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 20,
        alignItems: 'center',
        bottom: 0
    },

    form: {
        width: '100%',
        height: 'auto',
        marginTop: 30,
        padding: 10
    },

    formLabel: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#212121',
    },

    formInput: {
        marginTop: 20,
        width: '100%',
        height: 45,
        borderRadius: 30,
        paddingLeft: 30,
        backgroundColor: '#0033',
    },

    buttonCalculator: {
        marginTop: 40,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: '#23b27c'
    },

    textButtonCalculator: {
        color: '#333333',
        fontWeight: 'bold',
        fontSize: 20,
    },

    errorMessage: {
        fontWeight: 'bold',
        fontSize: 12,
        color: 'red'
    }
})

export default styles