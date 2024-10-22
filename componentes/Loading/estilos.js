import { StyleSheet } from "react-native";
import {Dimensions} from 'react-native';

const larguraTela = Dimensions.get('window').width;
const alturaTela = Dimensions.get('window').height;

const styles = StyleSheet.create({
    Loading: {
        position: 'absolute',
        top: (alturaTela / 2) - 60,
        left: (larguraTela / 2) - 60,
        width: 120,
        height: 120,
    }
})

export default styles;