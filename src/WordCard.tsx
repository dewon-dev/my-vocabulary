type Word = {
  language: string
  flag: string
  word: string
  reading?: string
  meaning: string
}

type WordCardProps = {
  word: Word
  number: number
}

function WordCard({ word, number }: WordCardProps) {
  return (
    <div className="word-card">
        <p>#{number}</p>
      <h2>{word.flag} {word.language}</h2>

      <h3>{word.word}</h3>
      <p>{word.reading}</p>
      <p>{word.meaning}</p>
    </div>
  )
}

export default WordCard