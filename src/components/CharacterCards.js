import CharatcerCard from './CharacterCard'

export default function CharatcerCards(props) {
  const { characters } = props

  return (
    <div id="character-cards">
      {characters.map((character, i) => {
        const [name, image] = character
        return <CharatcerCard key={i} name={name} image={image} />
      })}
    </div>
  )
}
