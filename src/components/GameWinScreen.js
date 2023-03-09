import { useEffect } from 'react'
import MissionPassed from '../images/missionpassed.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'

export default function GameWinScreen(props) {
  useEffect(() => {
    const blockTab = (e) => {
      e.preventDefault()
    }

    document.getElementById('character-cards').addEventListener('keydown', blockTab)
    document.getElementById('info-btn').addEventListener('keydown', blockTab)

    return () => {
      document.getElementById('character-cards').removeEventListener('keydown', blockTab)
      document.getElementById('info-btn').removeEventListener('keydown', blockTab)
    }
  }, [])

  const { restartGame } = props

  return (
    <div id="game-win-modal-overlay" className="overlay flexbox flex-center">
      <button aria-label="Play again" onClick={restartGame}>
        <FontAwesomeIcon icon={faRotateRight} />
      </button>

      <img src={MissionPassed} alt="Mission passed" style={{ transform: 'translateY(-50%)' }} />
    </div>
  )
}
