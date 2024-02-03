import { expect as _expect } from 'chai'
import { countWords } from '../desafio04/index.js'

const expect = _expect

describe('Teste Desafio 03', () => {
  it('deve retornar que "Isso é um teste." contem "4" palavras', () => {
    expect(countWords('Isso é um teste.')).to.equal(4)
  })

  it('deve retornar que "   Olá,    mundo!   " contem "2" palavras', () => {
    expect(countWords('   Olá,    mundo!   ')).to.equal(2)
  })

  it('deve retornar que "Palavra Palavra palavra" contem "3" palavras', () => {
    expect(countWords('Palavra Palavra palavra')).to.equal(3)
  })

  it('deve retornar que "Este é um teste de contagem de palavras." contem "8" palavras', () => {
    expect(countWords('Este é um teste de contagem de palavras.')).to.equal(8)
  })

  it('deve retornar que "" contem "0" palavras', () => {
    expect(countWords('')).to.equal(0)
  })

  it('deve retornar que "Maria tem 10 anos." contem "4" palavras', () => {
    expect(countWords('Maria tem 10 anos.')).to.equal(4)
  })

  it('deve retornar que "Olá ,  Mundo" contem "3" palavras', () => {
    expect(countWords('Olá ,  Mundo')).to.equal(3)
  })

  it('deve retornar que "Em uma tarde ensolarada, 3 crianças brincavam no parque. De repente, encontraram um mapa misterioso, com anotações enigmáticas: "Vire à esquerda, depois à direita, e avance 100 passos!" Eles, empolgados, seguiram as instruções cuidadosamente, contando cada passo com atenção. No caminho , encontraram diversos obstáculos: pedras, galhos e até um riacho raso. O mapa os levou a uma árvore antiga, com raízes grossas e folhas densas. "Aqui deve ser!", exclamou João, o mais velho. Mas,   sob a árvore, só encontraram uma caixa vazia e um bilhete: "A verdadeira aventura está na jornada, não no destino. Parabéns por chegarem até aqui!" Desapontados, mas ainda animados, decidiram continuar explorando. "Vamos ver o que mais podemos descobrir!", disse Maria, a mais aventureira do grupo. E assim, a busca por tesouros se transformou em uma tarde de descobertas e diversão. No final, o que realmente importava era a amizade e as memórias que criaram juntos." contem "151" palavras', () => {
    expect(countWords('Em uma tarde ensolarada, 3 crianças brincavam no parque. De repente, encontraram um mapa misterioso, com anotações enigmáticas: "Vire à esquerda, depois à direita, e avance 100 passos!" Eles, empolgados, seguiram as instruções cuidadosamente, contando cada passo com atenção. No caminho , encontraram diversos obstáculos: pedras, galhos e até um riacho raso. O mapa os levou a uma árvore antiga, com raízes grossas e folhas densas. "Aqui deve ser!", exclamou João, o mais velho. Mas,   sob a árvore, só encontraram uma caixa vazia e um bilhete: "A verdadeira aventura está na jornada, não no destino. Parabéns por chegarem até aqui!" Desapontados, mas ainda animados, decidiram continuar explorando. "Vamos ver o que mais podemos descobrir!", disse Maria, a mais aventureira do grupo. E assim, a busca por tesouros se transformou em uma tarde de descobertas e diversão. No final, o que realmente importava era a amizade e as memórias que criaram juntos.')).to.equal(151)
  })

  it('deve retornar que "Oi" contem "1" palavras', () => {
    expect(countWords('Oi')).to.equal(1)
  })
})
