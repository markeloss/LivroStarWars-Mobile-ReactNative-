import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const larguraTela = Dimensions.get('window').width;

const styles = StyleSheet.create({
    topo: {
        width: larguraTela,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        height: 80,
        paddingTop: 10
    },
    topoLogo: {
        width: larguraTela / 1.5,
        height: 60
    }
});

export default styles;