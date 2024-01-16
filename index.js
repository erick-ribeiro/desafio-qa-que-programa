import { createInterface } from 'readline'
import challenge00 from './desafio00/index.js'
// TODO: Adicionar mais desafios aqui
// import challenge01 from './desafio01/index.js'
// import challenge02 from './desafio02/index.js'
// ...

const readlineInterface = createInterface({
  input: process.stdin,
  output: process.stdout
})

const challenge = {
  0: challenge00
  // TODO: Adicionar mais desafios aqui
  // '1': challenge01,
  // '2': challenge02,
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
    const result = selectedChallenge()
    console.log(result)
    console.log('')
  } else {
    console.log('Desafio não encontrado.')
  }
  readlineInterface.close()
})
