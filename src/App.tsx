import './App.css'

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

      {words.map((word) => (
        <div className="word-card">
          <h2>{word.flag} {word.language}</h2>

          <h3>{word.word}</h3>
          <p>{word.reading}</p>
          <p>{word.meaning}</p>
        </div>
      ))}
    </div>
  )
}

export default App