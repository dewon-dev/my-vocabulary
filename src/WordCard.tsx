type Word = {
  language: string
  flag: string
  word: string
  reading?: string
  meaning: string
  createdAt: string
}

type WordCardProps = {
  word: Word
  number: number
  deleteWord: (index: number) => void
  editWord: (index: number) => void
  memorized: boolean

}

function WordCard({ word, number, deleteWord, editWord, memorized }: WordCardProps) {
  return (
    <div className="word-card">
        <p>#{number}</p>
      <h2>{word.flag} {word.language}</h2>
      <input type="checkbox" />
      
      <h3>{word.word}</h3>
      {word.reading && <p>{word.reading}</p>}
      <p>{word.meaning}</p>
      <p>{word.createdAt}</p>
  <button onClick={() => deleteWord(number - 1)}>
  삭제 </button>
  <button onClick={() => editWord(number - 1)}>
  수정 </button>
  </div>
  )
}

export default WordCard