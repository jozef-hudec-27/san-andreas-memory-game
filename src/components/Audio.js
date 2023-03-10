export default function Audio(props) {
  const { src } = props

  return (
    <audio style={{ display: 'none' }} autoPlay>
      <source src={src} type="audio/mpeg" />
    </audio>
  )
}
