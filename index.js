import { createInterface } from 'readline'
import challenge00 from './desafio00/index.js'
import challenge01 from './desafio01/index.js'
import challenge02 from './desafio02/index.js'
// TODO: Adicionar mais desafios aqui
// ...

const readlineInterface = createInterface({
  input: process.stdin,
  output: process.stdout
})

const challenge = {
  0: challenge00,
  1: challenge01,
  2: challenge02
  // TODO: Adicionar mais desafios aqui
  // ...
}

console.log('\nDesafios Solucionados:')
Object.keys(challenge).forEach(number => {
  console.log(` - Desafio ${number}`)
})
console.log('')

readlineInterface.question('Qual desafio você quer executar? (Digite o número) ', (number) => {
  const selectedChallenge = challenge[number]
  if (selectedChallenge) {
    console.log(`Executando Desafio ${number} >>>\n`)
    if (number === '1' || number === '2') {
      selectedChallenge(readlineInterface)
    } else {
      const result = selectedChallenge()
      console.log(result)
      readlineInterface.close()
    }
  } else {
    console.log('Desafio não encontrado.')
    readlineInterface.close()
  }
})
