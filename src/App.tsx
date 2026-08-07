import { useState } from 'react'
import './App.css'
import WordCard from './WordCard'

type Word = {
  language: string
  flag: string
  word: string
  reading?: string
  meaning: string
}

const languageData = {
  일본어: "🇯🇵",
  영어: "🇺🇸",
  인도네시아어: "🇮🇩",
}

function App() {
  const [words, setWords] = useState([
{  
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
])

const [newLanguage, setNewLanguage] = useState("")
const [newWord, setNewWord] = useState("")
const [newReading, setNewReading] = useState("")
const [newMeaning, setNewMeaning] = useState("")

const addWord = () => {
  const newItem = {
    language: newLanguage,
    flag: languageData[newLanguage],
    word: newWord,
    reading: newReading,
    meaning: newMeaning
  }

  setWords([
    ...words,
    newItem
  ])
setNewLanguage("")
setNewWord("")
setNewReading("")
setNewMeaning("")
}

  return (
    <div>
      <h1>My Vocabulary</h1>
     
  <select
  value={newLanguage}
  onChange={(e) => setNewLanguage(e.target.value)}
>
  <option value="">언어 선택</option>
  <option value="일본어">일본어</option>
  <option value="영어">영어</option>
  <option value="인도네시아어">인도네시아어</option>
</select>

<input
  placeholder="단어"
  value={newWord}
  onChange={(e) => setNewWord(e.target.value)}
/>

<input
  placeholder="읽는 법"
  value={newReading}
  onChange={(e) => setNewReading(e.target.value)}
/>

<input
  placeholder="뜻"
  value={newMeaning}
  onChange={(e) => setNewMeaning(e.target.value)}
/>
        <button onClick={addWord}>
          추가
        </button>

      {words.map((word, index) => (
  <WordCard key={index} word={word} number={index + 1} />
))}
    </div>
  )
}

export default App