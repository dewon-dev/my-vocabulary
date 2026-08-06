import './App.css'
import WordCard from './WordCard'

type Word = {
  language: string
  flag: string
  word: string
  reading?: string
  meaning: string
}

const words = [{
  
  language: "일본어",
  flag: "🇯🇵",
  word: "勉強",
  reading: "べんきょう",
  meaning: "공부",
}, 
{
  language: "일본어",
  flag: "🇯🇵",
  word: "猫",
  reading: "ねこ",
  meaning: "고양이",
}, 
{
  language: "인도네시아어",
  flag: "🇮🇩",
  word: "terima kasih",
  meaning: "고마워"
},
]
function App() {
  return (
    <div>
      <h1>My Vocabulary</h1>

      {words.map((word, index) => (
  <WordCard key={index} word={word}  />
))}
    </div>
  )
}

export default App