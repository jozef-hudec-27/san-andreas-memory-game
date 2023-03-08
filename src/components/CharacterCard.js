export default function CharatcerCard(props) {
  const [name, image, charNum] = props.character
  const { randomizeCharacters, setScore, setBestScore, gameOver, usedCharacters, setUsedCharacters } = props

  return (
    <button
      className="character-card"
      onClick={() => {
        if (usedCharacters.includes(charNum)) {
          return gameOver(name)
        }

        setScore((prevScore) => {
          const newScore = prevScore + 1

          setBestScore((prevBestScore) => {
            const newBestScore = newScore > prevBestScore ? newScore : prevBestScore
            return newBestScore
          })

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
