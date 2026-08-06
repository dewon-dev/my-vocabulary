const word = {
  language: "일본어",
  flag: "🇯🇵",
  word: "勉強",
  reading: "べんきょう",
  meaning: "공부",
}
function App() {
  return (
    <div>
      <h1>My Vocabulary</h1>

<h2>{word.flag} {word.language}</h2>
<h3>{word.word}</h3>
<p>{word.reading}</p>
<p>{word.meaning}</p>
    </div>
  )
}

export default App