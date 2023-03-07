export default function CharatcerCard(props) {
  const { name, image } = props

  return (
    <button className="character-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
    </button>
  )
}
