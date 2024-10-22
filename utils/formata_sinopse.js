export default function formata_sinopse(sinopse) {
    const nova_sinopse = sinopse.replace(/<p>(.*?)<\/p>/g, '$1').replace(/<br>/g, "\n\n");

    return nova_sinopse;
}