export function countWords (textMaybe) {
  if (textMaybe.trim().length === 0) {
    return 0
  }

  const words = textMaybe.trim().split(/\s+/)
  return words.length
}

export default function challenge04 (readlineInterface) {
  readlineInterface.question('Informe um texto qualquer: ', (text) => {
    const wordCount = countWords(text)

    if (wordCount === 1) {
      console.log(`O texto contém ${wordCount} palavra.`)
    } else {
      console.log(`O texto contém ${wordCount} palavras.`)
    }

    readlineInterface.close()
  })
}
