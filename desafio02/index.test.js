import { expect as _expect } from 'chai'
import { addition, subtraction, multiplication, division } from '../desafio02/index.js'

const expect = _expect

describe('Teste Desafio 02', () => {
  it('deve retornar "6" ao "somar" "1" e "5"', () => {
    expect(addition(1, 5)).to.equal(6)
  })

  it('deve retornar "4" ao "subtrair" "5" e "1"', () => {
    expect(subtraction(5, 1)).to.equal(4)
  })

  it('deve retornar "60" ao "multiplicar" "2" e "30"', () => {
    expect(multiplication(2, 30)).to.equal(60)
  })

  it('deve retornar "3" ao "dividir" "21" e "7"', () => {
    expect(division(21, 7)).to.equal(3)
  })

  it('deve retornar "erro" ao "dividir" "10" e "0"', () => {
    expect(division(10, 0)).to.equal(Infinity)
  })

  it('deve retornar "-4" ao "somar" "1" e "-5"', () => {
    expect(addition(1, -5)).to.equal(-4)
  })

  it('deve retornar "6" ao "subtrair" "5" e "-1"', () => {
    expect(subtraction(5, -1)).to.equal(6)
  })

  it('deve retornar "-60" ao "multiplicar" "2" e "-30"', () => {
    expect(multiplication(2, -30)).to.equal(-60)
  })

  it('deve retornar "-3" ao "dividir" "-21" e "7"', () => {
    expect(division(-21, 7)).to.equal(-3)
  })

  it('deve retornar "erro" ao "dividir" "-10" e "0"', () => {
    expect(division(-10, 0)).to.equal(-Infinity)
  })
})
