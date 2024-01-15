import { createInterface } from 'readline'
import desafio0 from './desafio00/index.js'


const rl = createInterface({
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
