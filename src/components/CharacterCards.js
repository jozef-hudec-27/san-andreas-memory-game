import CharatcerCard from './CharacterCard'

export default function CharatcerCards(props) {
  const { characters, randomizeCharacters, setScore, setBestScore, gameOver, usedCharacters, setUsedCharacters } = props

  return (
    <section id="character-cards">
      {characters.map((character, i) => {
        return (
          <CharatcerCard
            key={i}
            character={character}
            randomizeCharacters={randomizeCharacters}
            setScore={setScore}
            setBestScore={setBestScore}
            gameOver={gameOver}
            usedCharacters={usedCharacters}
            setUsedCharacters={setUsedCharacters}
          />
        )
      })}
    </section>
  )
}
