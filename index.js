const readline = require('readline')
const desafio0 = require('./desafio00/index.js')
// const desafio1 = require('./desafio01');
// const desafio2 = require('./desafio02');
// const desafio3 = require('./desafio03');
// const desafio4 = require('./desafio04');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const desafios = {
  0: desafio0
  //   '1': desafio1,
  //   '2': desafio2,
  //   '3': desafio3,
  //   '4': desafio4
}

console.log('')
console.log('Desafios Solucionados:')
Object.keys(desafios).forEach(numero => {
  console.log(` - Desafio ${numero}`)
})
console.log('')

rl.question('Qual desafio você quer executar? (Digite o número) ', (numero) => {
  const desafioSelecionado = desafios[numero]
  if (desafioSelecionado) {
    console.log(`Executando Desafio ${numero} >>>`)
    console.log('')
    const resultado = desafioSelecionado()
    console.log(resultado)
    console.log('')
  } else {
    console.log('Desafio não encontrado.')
  }
  rl.close()
})
