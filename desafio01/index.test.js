import { expect as _expect } from 'chai'
import { checkEvenOdd } from '../desafio01/index.js'

const expect = _expect

describe('Teste Desafio 01', () => {
  it('deve retornar "Impar" para 5', () => {
    expect(checkEvenOdd(5)).to.equal('Impar')
  })

  it('deve retornar "Par" para 898', () => {
    expect(checkEvenOdd(898)).to.equal('Par')
  })

  it('deve retornar "Impar" para -5', () => {
    expect(checkEvenOdd(-5)).to.equal('Impar')
  })

  it('deve retornar "Par" para -4', () => {
    expect(checkEvenOdd(-4)).to.equal('Par')
  })

  it('deve retornar "Par" para 0', () => {
    expect(checkEvenOdd(0)).to.equal('Par')
  })
})
