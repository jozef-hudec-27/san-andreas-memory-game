import GameOverSound from '../sounds/gameover.mp3'

import Audio from './Audio'

import useBlockTab from '../hooks/useBlockTab'

export default function GameOverModal(props) {
  useBlockTab()

  const { repeatedCard, restartGame } = props

  return (
    <>
      <section id="game-over-modal" className="modal">
        <h1>Game Over!</h1>
        <p>You clicked on {repeatedCard} twice.</p>
        <button style={{ marginTop: 'auto' }} className="play-again-btn" onClick={restartGame}>
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

      <Audio src={GameOverSound} />
    </>
  )
}
