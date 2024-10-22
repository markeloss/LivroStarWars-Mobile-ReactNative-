import axios from 'axios';
import { trataErro } from './tratarErros';

export function servico_carregaLivros(setLivros, setIsLoading) {

    setIsLoading(true);

    axios.get("https://www.googleapis.com/books/v1/volumes/", {
        timeout: 30000,
        params: {
          q: "intitle:Star Wars",
          fields: "items(id,volumeInfo(title,authors,pageCount,imageLinks(thumbnail)))",
          maxResults: 20,
          langRestrict: "pt"
        }
    }).then((resposta) => {
        const livros = resposta.data.items;
        setLivros(livros);

        setIsLoading(false);
    }).catch((erro) => {
        setIsLoading(false);
        trataErro(erro);
    })
}

export function servico_carregaDetalhesLivro(idLivro, setDetalhesLivro, setIsLoading) {
    setIsLoading(true);

    axios.get("https://www.googleapis.com/books/v1/volumes/"+idLivro, {
        timeout: 30000,
        params: {
          fields: "id,volumeInfo(title,description,imageLinks(thumbnail, large))",
        }
    }).then((resposta) => {
        const detalhes = resposta.data;
        setDetalhesLivro(detalhes);

        setIsLoading(false);
    }).catch((erro) => {
        setIsLoading(false);
        trataErro(erro);
    })
}