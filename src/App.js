import { useState, useEffect } from 'react'

import BigSmoke from './images/bigsmoke.webp'
import Catalina from './images/catalina.webp'
import Cesar from './images/cesar.webp'
import Cj from './images/cj.webp'
import Claude from './images/claude.webp'
import MaddDogg from './images/madddogg.webp'
import Ryder from './images/ryder.webp'
import Sweet from './images/sweet.webp'
import Tenpenny from './images/tenpenny.webp'
import TheTruth from './images/thetruth.webp'
import Toreno from './images/toreno.webp'
import Wuzimu from './images/wuzimu.webp'

import CharatcerCards from './components/CharacterCards'
import InfoModal from './components/InfoModal'
import GameOverModal from './components/GameOverModal'
import GameWinScreen from './components/GameWinScreen'
import ScoreBoard from './components/ScoreBoard'

import shuffleArray from './utilities/shuffleArray'
import storageAvailable from './utilities/storageAvailable'

function App() {
  const [showInfo, setShowInfo] = useState(false)
  const [showGameWin, setShowGameWin] = useState(false)
  const [repeatedCard, setRepeatedCard] = useState('')
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(storageAvailable('localStorage') ? +localStorage.getItem('bestScore') : 0)
  const [characters, setCharacters] = useState(
    shuffleArray([
      ['Big Smoke', BigSmoke, 1],
      ['Catalina', Catalina, 2],
      ['Cesar', Cesar, 3],
      ['CJ', Cj, 4],
      ['Claude', Claude, 5],
      ['Madd Dogg', MaddDogg, 6],
      ['Ryder', Ryder, 7],
      ['Sweet', Sweet, 8],
      ['Tenpenny', Tenpenny, 9],
      ['The Truth', TheTruth, 10],
      ['Toreno', Toreno, 11],
      ['Wu Zi Mu', Wuzimu, 12],
    ])
  )
  const [usedCharacters, setUsedCharacters] = useState([])

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score)
      if (storageAvailable('localStorage')) localStorage.setItem('bestScore', score)
    }

    if (score === 12) {
      setShowGameWin(true)
    }
  }, [score, bestScore])

  const randomizeCharacters = () => {
    setCharacters((prev) => {
      const newCharacters = shuffleArray(prev.slice())
      return newCharacters
    })
  }

  const gameOver = (repeatedCard) => {
    setScore(0)
    setUsedCharacters([])
    setRepeatedCard(repeatedCard)
  }

  const restartGame = () => {
    setRepeatedCard('')
    randomizeCharacters()
    setShowGameWin(false)
    setScore(0)
    setUsedCharacters([])
  }

  return (
    <div id="main">
      {showInfo && <InfoModal setShowInfo={setShowInfo} />}
      {repeatedCard && <GameOverModal repeatedCard={repeatedCard} restartGame={restartGame} />}
      {showGameWin && <GameWinScreen restartGame={restartGame} />}

      <div className="flexbox gap-10 flex-center">
        <h1>San Andreas Memory Game</h1>
        <button
          id="info-btn"
          onClick={() => {
            setShowInfo((prev) => !prev)
          }}
        >
          ?
        </button>
      </div>

      <CharatcerCards
        characters={characters}
        randomizeCharacters={randomizeCharacters}
        setScore={setScore}
        gameOver={gameOver}
        usedCharacters={usedCharacters}
        setUsedCharacters={setUsedCharacters}
      />

      <ScoreBoard current={score} best={bestScore} />
    </div>
  )
}

export default App
