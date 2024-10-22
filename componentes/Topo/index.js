import { View, Text, Image } from 'react-native';
import styles from './estilos';

import logo from '../../assets/logo.png';

export default function Topo(){
    return(
        <View style={styles.topo}>
            <Image style={styles.topoLogo} source={logo} resizeMode='contain' />
        </View>
    )
}