import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight - 20,
    },

    keyBoardAvoidContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    primaryLabel: {
        fontWeight: 'bold',
        color: '#888',
        marginBottom: 10,
    },

    secondLabel: {
        color: '#aaa',
        marginBottom: 8,
    },

    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2
    },

    primaryBtn: {
        height: 42,
        backgroundColor: '#1AB394',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
    },

    primaryBtnText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },

    secondBtn: {
        height: 42,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
    },

    secondBtnText: {
        color: '#999',
        fontWeight: 'bold',
        fontSize: 16,
    },

    textBtn: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        color: '#ddd',
    }
});

export default styles;