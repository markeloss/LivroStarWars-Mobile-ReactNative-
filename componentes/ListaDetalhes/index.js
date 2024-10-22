import { useEffect, useState } from 'react';
import { View } from "react-native";
import styles from "./estilos.js"

import { servico_carregaDetalhesLivro } from '../../servicos/servico_livros';
import formata_sinopse from '../../utils/formata_sinopse.js';

import Topo from '../Topo/index.js';
import Detalhes from '../Detalhes/index.js';
import Loading from '../Loading/index.js';

export default function ListaDetalhes({route}) {

    const { idLivro } = route.params;

    const [detalhesLivro, setDetalhesLivro] = useState([]);
    const [isLoading, setIsLoading] = useState(null);

    useEffect(() => {

        if(idLivro === null || typeof idLivro === 'undefined') {
            return;
        }

        servico_carregaDetalhesLivro(idLivro, setDetalhesLivro, setIsLoading);

    }, [])

    return (
        <>
            <Topo />
            {
                (isLoading) ?
                    <Loading />
                :
                <View style={styles.container}>
                    {
                        typeof detalhesLivro.volumeInfo !== 'undefined' ?
                            <Detalhes capa={detalhesLivro.volumeInfo.imageLinks.large} titulo={detalhesLivro.volumeInfo.title} descricao={formata_sinopse(detalhesLivro.volumeInfo.description)} />
                        :
                            <></>
                    }
                </View>
            }
        </>
    )
}