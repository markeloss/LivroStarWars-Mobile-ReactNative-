import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const larguraTela = Dimensions.get('window').width;

const larguraLivro   = (larguraTela / 2) - 30;
const alturaLivro   = (larguraTela / 2) + 20;

const styles = StyleSheet.create({
    livro: {
      width: larguraLivro,
      height: alturaLivro,
      position:'relative',
      display: 'flex',
      marginVertical: 5,
      alignItems: 'center',
      backgroundColor: '#F0EFEF',
      borderRadius: 8,
      shadowRadius: 8,
      shadowOffset: 1,
      shadowColor: 'black',
      shadowOpacity: 0.8,
      elevation: 10

    },
    dadosTitulo: {
      width: larguraLivro,
      justifyContent: 'space-between',
    },
    titulo: {
      height: 32,
      color: 'black',
      fontSize: 12,
      marginHorizontal: 20,
      marginVertical: 10,
      fontWeight: 'bold'
    },
    dadosLivro: {
      position: 'absolute',
      bottom: 55,
      width: '80%',
      backgroundColor: 'black',
      opacity: 0.8,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
    },
    paginas: {
      color: 'white',
      fontSize: 10,
    },
    autor: {
      color: 'white',
      fontSize: 12,
    },
    capa: {
      width: '80%',
      height: '70%',
      borderRadius: 5,
      marginHorizontal: 5,
      padding: 10,
      marginTop: 10,
    }
});

export default styles;