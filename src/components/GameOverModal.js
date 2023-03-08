export default function GameOverModal(props) {
  const { repeatedCard, setRepeatedCard, randomizeCharacters } = props

  return (
    <>
      <section id="game-over-modal" className="modal">
        <h1>Game Over!</h1>
        <p>You clicked on {repeatedCard} twice.</p>
      </section>

      <div
        id="game-over-modal-overlay"
        className="overlay"
        tabIndex="1"
        onClick={() => {
          setRepeatedCard('')
          randomizeCharacters()
        }}
        onKeyDown={(e) => {
          if (['Enter', 'Space'].includes(e.code)) e.currentTarget.click()
        }}
      ></div>
    </>
  )
}
