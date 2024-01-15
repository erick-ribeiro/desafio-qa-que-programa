import { expect as _expect } from 'chai'
import desafio0 from './index.js'
const expect = _expect

describe('Teste Desafio 0', () => {
  it('should return "Olá, Desafio QA Que Programa!"', () => {
    expect(desafio0()).to.equal('Olá, Desafio QA Que Programa!')
  })
})
