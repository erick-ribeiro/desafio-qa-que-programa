export function checkEvenOdd (number) {
  if (number % 2 === 0) {
    return 'Par'
  } else {
    return 'Impar'
  }
}

export default function challenge01 (readlineInterface) {
  readlineInterface.question('Digite um número para verificar se é par ou ímpar: ', (number) => {
    const result = checkEvenOdd(number)
    console.log(`O número ${number} é ${result}.`)
    readlineInterface.close()
  })
}
