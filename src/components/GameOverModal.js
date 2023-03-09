import { useEffect } from 'react'

export default function GameOverModal(props) {
  useEffect(() => {
    const blockTab = (e) => {
      e.preventDefault()
    }

    document.getElementById('character-cards').addEventListener('keydown', blockTab)
    document.getElementById('info-btn').addEventListener('keydown', blockTab)

    return () => {
      document.getElementById('character-cards').removeEventListener('keydown', blockTab)
      document.getElementById('info-btn').removeEventListener('keydown', blockTab)
    }
  }, [])

  const { repeatedCard, setRepeatedCard, randomizeCharacters } = props

  return (
    <>
      <section id="game-over-modal" className="modal">
        <h1>Game Over!</h1>
        <p>You clicked on {repeatedCard} twice.</p>
        <button
          style={{ marginTop: 'auto' }}
          className="play-again-btn"
          onClick={() => {
            setRepeatedCard('')
            randomizeCharacters()
          }}
        >
          Play again
        </button>
      </section>

      <div
        id="game-over-modal-overlay"
        className="overlay"
        onKeyDown={(e) => {
          if (['Enter', 'Space'].includes(e.code)) e.currentTarget.click()
        }}
      ></div>
    </>
  )
}
