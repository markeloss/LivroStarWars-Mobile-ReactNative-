import { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { servico_carregaLivros } from '../../servicos/servico_livros';

import Livro from '../Livro';

import styles from './estilos';
import Topo from '../Topo';
import Loading from '../Loading';

export default function ListaLivros(props) {

    const [livros, setLivros] = useState([]);
    const [isLoading, setIsLoading] = useState(null);

    useEffect(() => {
      servico_carregaLivros(setLivros, setIsLoading);
    }, [])

    function handleDetalhes(idLivro) {
      props.navigation.navigate("ListaDetalhes", {idLivro: idLivro})
    }

    return (
        <View>
          <Topo />
          {
            (isLoading) ?
              <Loading />
            :
            <ScrollView>
                <View style={styles.container}>
                    {
                      livros.map((livro) => (
                            typeof livro.volumeInfo !== 'undefined' ?
                              <Livro key={livro.id} id={livro.id} capa={typeof livro.volumeInfo.imageLinks !== 'undefined' ? livro.volumeInfo.imageLinks.thumbnail : ''} titulo={livro.volumeInfo.title} paginas={livro.volumeInfo.pageCount} autor={livro.volumeInfo.authors[0]} acao={() => handleDetalhes(livro.id)} />
                            :
                              <></>
                        ))
                    }
                </View>
            </ScrollView>
          }
        </View>
    )
}