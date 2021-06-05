const livros = require('./database')

//ORDEM CRESCENTE DE PÁGINAS
livros.sort((a, b) => a.paginas - b.paginas)

const pegarEntrada = require('readline-sync')

//CATEGORIAS DE LIVROS
const verCategoria = pegarEntrada.question('Voce deseja encontrar um livro por categoria?   (S/N)')
if (verCategoria.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias existentes')
    console.log('Ficção', 'Romance', 'Drama', 'Terror', 'Psicologia')

    const qualLivros = pegarEntrada.question('Qual categoria de livro você escolhe?   ')

    const categoriaLivros = livros.filter(livros => livros.categoria === qualLivros)
    console.table(categoriaLivros)
} else {
    console.log('Essas sao todas as categorias de livros:  ')
    console.table(livros)
}


//recomendações DE LIVROS lidos e recomendados
const verCategoriaRecomendada = pegarEntrada.question('Aceita indicações de livros?   (S/N)')
if (verCategoriaRecomendada.toLocaleUpperCase() === 'S') {
    console.log('Recomendações de Livros:  ')

    const recomendados = livros.filter(livros => livros.recomenda === true && livros.leu === true)
    console.table(recomendados)
} else {

}

//recomendações DE LIVROS não lidos
const verDesejados = pegarEntrada.question("Deseja ver minha lista de desejo agora? (S/N)")
if (verDesejados.toLocaleUpperCase() === 'S') {
    console.table('Livros Desejados:  ')

    const naoLidos = livros.filter(livros => livros.leu === false)
    console.table(naoLidos)

} else {

}