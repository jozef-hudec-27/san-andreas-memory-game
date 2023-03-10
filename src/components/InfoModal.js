import useBlockTab from '../hooks/useBlockTab'

export default function InfoModal(props) {
  useBlockTab()

  const { setShowInfo } = props

  return (
    <>
      <section id="info-modal" className="modal">
        <h1>San Andreas Memory Game Rules</h1>

        <ul>
          <li>There are a total of 12 cards available.</li>
          <li>Click only on the ones that you haven't clicked before.</li>
          <li>
            Remember, clicking on a card that you have already clicked on before will result in the game ending, and you
            will lose.
          </li>
          <li>If you successfully click on all the cards without any repetition, you will win.</li>
        </ul>
      </section>

      <div
        id="info-modal-overlay"
        className="overlay"
        tabIndex="1"
        onClick={() => setShowInfo(false)}
        onKeyDown={(e) => {
          if (['Enter', 'Space'].includes(e.code)) e.currentTarget.click()
        }}
      ></div>
    </>
  )
}
