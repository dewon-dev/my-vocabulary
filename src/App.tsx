import { useEffect, useState } from 'react'
import './App.css'
import WordCard from './WordCard'

type Word = {
  language: string
  flag: string
  word: string
  reading?: string
  meaning: string
  createdAt: string
  memorized: boolean
}

const languageData = {
  일본어: "🇯🇵",
  영어: "🇺🇸",
  인도네시아어: "🇮🇩",
}

function App() {
  const [words, setWords] = useState(() => {
  const savedWords = localStorage.getItem("words")

  if (savedWords) {
  return JSON.parse(savedWords).map((word: Word) => ({
    ...word,
    memorized: word.memorized ?? false
  }))
}

  return [
{  
  language: "일본어",
  flag: "🇯🇵",
  word: "勉強",
  reading: "べんきょう",
  meaning: "공부",
  createdAt: "2026. 8. 6.",
}, 
{
  language: "일본어",
  flag: "🇯🇵",
  word: "猫",
  reading: "ねこ",
  meaning: "고양이",
  createdAt: "2026. 8. 6.",
}, 
{
  language: "인도네시아어",
  flag: "🇮🇩",
  word: "terima kasih",
  meaning: "고마워",
  createdAt: "2026. 8. 6.",
},
]
})

const [newLanguage, setNewLanguage] = useState("")
const [newWord, setNewWord] = useState("")
const [newReading, setNewReading] = useState("")
const [newMeaning, setNewMeaning] = useState("")
const [searchWord, setSearchWord] = useState("")
const [editIndex, setEditIndex] = useState<number | null>(null)
const [selectedLanguage, setSelectedLanguage] = useState("전체")

const addWord = () => {
  if (!newWord.trim()) {
  alert("단어를 입력해주세요")
  
  return
}
const newItem = {
  language: newLanguage,
  flag: languageData[newLanguage],
  word: newWord,
  reading: newReading,
  meaning: newMeaning,
  createdAt: new Date().toLocaleDateString(),
  memorized: false
}
if (editIndex !== null) {
  const updatedWords = [...words]

  updatedWords[editIndex] = {
    ...newItem,
    createdAt: words[editIndex].createdAt
  }

  setWords(updatedWords)
  setEditIndex(null)

} else {
  setWords([
    newItem,
    ...words
  ])
}

setNewWord("")
setNewReading("")
setNewMeaning("")
}

const deleteWord = (index: number) => {
  setWords(
    words.filter((_, i) => i !== index)
  )
}

const editWord = (index: number) => {
  console.log("수정 버튼 눌림", index)
  
  const word = words[index]

  setNewLanguage(word.language)
  setNewWord(word.word)
  setNewReading(word.reading ?? "")
  setNewMeaning(word.meaning)

  setEditIndex(index)
}

useEffect(() => {
  localStorage.setItem(
    "words",
    JSON.stringify(words)
  )
}, [words])

const filteredWords = words.filter((word) => {
  const matchesSearch = 
    word.word.includes(searchWord) ||
    word.reading?.includes(searchWord) ||
    word.meaning.includes(searchWord)

  const matchesLanguage = 
    selectedLanguage === "전체" ||
    word.language === selectedLanguage

      return matchesSearch && matchesLanguage
})

const japaneseCount = words.filter(
  (word) => word.language === "일본어"
).length

const englishCount = words.filter(
  (word) => word.language === "영어"
).length

const indonesianCount = words.filter(
  (word) => word.language === "인도네시아어"
).length

return (
    <div>
      <h1>My Vocabulary</h1>

      <input
        placeholder="검색"
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
        />

<p>선택 언어: {selectedLanguage}</p>
<p>단어 개수: {filteredWords.length}</p>

<p>{selectedLanguage}</p>
        
<div className = "language-filter">
  <button onClick={() => setSelectedLanguage("전체")}>
    전체 ({words.length})
  </button>

  <button onClick={() => setSelectedLanguage("일본어")}>
    🇯🇵 일본어 ({japaneseCount})
  </button>

  <button onClick={() => setSelectedLanguage("영어")}>
    🇺🇸 영어 ({englishCount})
  </button>

  <button onClick={() => setSelectedLanguage("인도네시아어")}>
    🇮🇩 인도네시아어 ({indonesianCount})
  </button>
</div>

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
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      addWord()
    }
  }}
/>
       <button onClick={addWord}>
  {editIndex !== null ? "수정 완료" : "추가"}
</button>

     {filteredWords.length === 0 ? (
  <p>검색 결과가 없습니다.</p>
) : (
  filteredWords.map((word, index) => (
    <WordCard
      key={index}
      word={word}
      number={index + 1}
      deleteWord={deleteWord}
      editWord={editWord}
    />
  ))
)}
    </div>
  )
}

export default App