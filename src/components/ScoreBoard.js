export default function ScoreBoard(props) {
  const { current, best } = props

  return (
    <section id="score-board">
      <div className="flexbox flex-column gap-4">
        <p>Score: {current}</p>
        <p>Best score: {best}</p>
      </div>
    </section>
  )
}
