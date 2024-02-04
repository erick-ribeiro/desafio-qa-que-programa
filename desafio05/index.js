export function generateMegaSenaNumbers () {
  const numbers = new Set()

  while (numbers.size < 6) {
    const randomNumber = Math.floor(Math.random() * 60) + 1
    numbers.add(randomNumber)
  }

  return Array.from(numbers)
}

export default function challenge05 () {
  const megaSenaNumbers = generateMegaSenaNumbers()
  return `Os numeros sorteados da Mega Sena foram: "${megaSenaNumbers}"`
}
