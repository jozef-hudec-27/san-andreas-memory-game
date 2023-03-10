import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'

import MissionPassed from '../images/missionpassed.png'
import MissionPassedSound from '../sounds/missionpassed.mp3'

import Audio from './Audio'

import useBlockTab from '../hooks/useBlockTab'

export default function GameWinScreen(props) {
  useBlockTab()

  const { restartGame } = props

  return (
    <>
      <div id="game-win-modal-overlay" className="overlay flexbox flex-center">
        <button aria-label="Play again" onClick={restartGame}>
          <FontAwesomeIcon icon={faRotateRight} />
        </button>

        <img src={MissionPassed} alt="Mission passed" style={{ transform: 'translateY(-50%)' }} />
      </div>

      <Audio src={MissionPassedSound} />
    </>
  )
}
