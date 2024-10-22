import { ScrollView, View, Image, Text } from "react-native";

import styles from "./estilos";

export default function Detalhes({capa, titulo, descricao}) {

    return (
        <ScrollView>
            <Image style={styles.capa} resizeMode='contain' width={200} height={250} source={{uri: capa}} />
            <View style={styles.conteudo}>
                <Text style={styles.titulo}>{titulo}</Text>
                <Text style={styles.sinopse}>{descricao}</Text>
            </View>
        </ScrollView>
    )
}