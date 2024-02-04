import { expect as _expect } from 'chai'
import { generateMegaSenaNumbers } from '../desafio05/index.js'

const expect = _expect

describe('Teste Desafio 05', () => {
  it('deve retornar 6 números', function () {
    const numbers = generateMegaSenaNumbers()
    expect(numbers).to.be.an('array')
    expect(numbers).to.have.lengthOf(6)
  })

  it('todos os números devem ser únicos', function () {
    const numbers = generateMegaSenaNumbers()
    const uniqueNumbers = new Set(numbers)
    expect(uniqueNumbers.size).to.equal(numbers.length)
  })
})
