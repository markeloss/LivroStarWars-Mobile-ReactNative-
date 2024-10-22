import { Image, Text, View } from 'react-native';
import styles from './estilos';

export default function Livro({id, capa, titulo, paginas, autor, acao}) {
    return (
        <View onTouchEnd={acao} key={id} style={styles.livro}>
            <Image style={styles.capa} resizeMode='contain' source={{uri: capa}} />
            <View style={styles.dadosLivro}>
                <Text style={styles.paginas}>Páginas: {paginas}</Text>
                <Text style={styles.autor}>Autor: {autor}</Text>
            </View>
            <View style={styles.dadosTitulo}>
                <Text style={styles.titulo}>{titulo}</Text>
            </View>
        </View>
    )
}