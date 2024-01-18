import { expect as _expect } from 'chai'
import { isPalindrome } from '../desafio03/index.js'

const expect = _expect

describe('Teste Desafio 03', () => {
  it('deve retornar que "ovo" é um "palíndromo"', () => {
    expect(isPalindrome('ovo')).to.equal(true)
  })

  it('deve retornar que "arara" é um "palíndromo"', () => {
    expect(isPalindrome('arara')).to.equal(true)
  })

  it('deve retornar que "reconhecer" NÃO é um "palíndromo"', () => {
    expect(isPalindrome('reconhecer')).to.equal(false)
  })

  it('deve retornar que "Python" NÃO é um "palíndromo"', () => {
    expect(isPalindrome('Python')).to.equal(false)
  })

  it('deve retornar que "A man, a plan, a canal, Panama!" é um "palíndromo"', () => {
    expect(isPalindrome('A man, a plan, a canal, Panama!')).to.equal(true)
  })

  it('deve retornar que "Anita lava a tina" NÃO é um "palíndromo"', () => {
    expect(isPalindrome('Anita lava a tina')).to.equal(false)
  })

  it('deve retornar que "Was it a car or a cat I saw?" é um "palíndromo"', () => {
    expect(isPalindrome('Was it a car or a cat I saw?')).to.equal(true)
  })

  it('deve retornar que "Hello, World!" NÃO é um "palíndromo"', () => {
    expect(isPalindrome('Hello, World!')).to.equal(false)
  })
})
