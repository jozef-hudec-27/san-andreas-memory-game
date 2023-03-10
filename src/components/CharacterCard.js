export default function CharatcerCard(props) {
  const [name, image, charNum] = props.character
  const { randomizeCharacters, setScore, gameOver, usedCharacters, setUsedCharacters } = props

  return (
    <button
      className="character-card"
      onClick={() => {
        if (usedCharacters.includes(charNum)) {
          return gameOver(name)
        }

        setScore((prevScore) => {
          const newScore = prevScore + 1
          return newScore
        })

        setUsedCharacters((prevUsedCharacters) => [...prevUsedCharacters, charNum])
        randomizeCharacters()
      }}
    >
      <img src={image} alt={name} />
      <h2>{name}</h2>
    </button>
  )
}
