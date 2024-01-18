export function isPalindrome (textMaybe) {
  const normalizedString = textMaybe.toLowerCase().replace(/[^a-z0-9]/g, '')
  const stringInvertida = normalizedString.split('').reverse().join('')
  return normalizedString === stringInvertida
}

export default function challenge03 (readlineInterface) {
  readlineInterface.question('Informe um texto qualquer: ', (textMaybe) => {
    if (isPalindrome(textMaybe)) {
      console.log(`A palavra ${textMaybe} é um Palindromo.`)
    } else {
      console.log(`A palavra ${textMaybe} NÃO é um Palindromo.`)
    }
  })
}
