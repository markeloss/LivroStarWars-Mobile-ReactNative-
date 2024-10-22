

import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const larguraTela = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        width: larguraTela,
        flex: 1,
        backgroundColor: '#000000',
    }
});

export default styles;