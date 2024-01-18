export function addition (numberOne, numberTwo) {
  return numberOne + numberTwo
}

export function subtraction (numberOne, numberTwo) {
  return numberOne - numberTwo
}

export function multiplication (numberOne, numberTwo) {
  return numberOne * numberTwo
}

export function division (numberOne, numberTwo) {
  return numberOne / numberTwo
}

export default function challenge02 (readlineInterface) {
  const operacoesValidas = new Set(['+', '-', '*', '/'])
  readlineInterface.question('Escolha a operação (+, -, *, /): ', (operation) => {
    if (!operacoesValidas.has(operation)) {
      console.log('\nOps! Parece que você tentou inventar uma nova operação matemática.')
      console.log('Vamos nos ater às clássicas: +, -, * e /. Escolha uma delas, por favor.\n')

      readlineInterface.close()
      return
    }

    readlineInterface.question('Digite o primeiro numero: ', (numberOne) => {
      if (isNaN(numberOne)) {
        console.log('Isso não parece um número válido. Vamos tentar novamente.')
        readlineInterface.close()
        return
      }

      const numberOneParsed = parseFloat(numberOne)

      readlineInterface.question('Digite o segundo numero: ', (numberTwo) => {
        if (numberTwo === 0) {
          console.log('\nDividir por zero? Até a matemática tem seus limites!')
          console.log('Vamos tentar outra coisa que não desafie as leis da aritmética.\n')

          readlineInterface.close()
          return
        }

        if (isNaN(numberTwo)) {
          console.log('Isso não parece um número válido. Vamos tentar novamente.')
          readlineInterface.close()
          return
        }

        const numberTwoParsed = parseFloat(numberTwo)

        let result

        if (operation === '+') {
          result = addition(numberOneParsed, numberTwoParsed)
        } else if (operation === '-') {
          result = subtraction(numberOneParsed, numberTwoParsed)
        } else if (operation === '*') {
          result = multiplication(numberOneParsed, numberTwoParsed)
        } else if (operation === '/') {
          result = division(numberOneParsed, numberTwoParsed)
        } else {
          console.log('Eita, como você chegou aqui?? Tente novamente')
          readlineInterface.close()
          return
        }

        console.log(`O resultado da sua operação é: ${result}.\n`)
        readlineInterface.close()
      })
    })
  })
}
