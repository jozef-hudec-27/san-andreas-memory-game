import BigSmoke from './images/bigsmoke.webp'
import Catalina from './images/catalina.webp'
import Cesar from './images/cesar.webp'
import Cj from './images/cj.webp'
import Claude from './images/claude.webp'
import MaddDogg from './images/madddogg.webp'
import Ryder from './images/ryder.webp'
import Sweet from './images/sweet.webp'
import Tenpenny from './images/tenpenny.webp'
import TheTruth from './images/thetruth.webp'
import Toreno from './images/toreno.webp'
import Wuzimu from './images/wuzimu.webp'

import CharatcerCards from './components/CharacterCards'

function App() {
  const characters = [
    ['Big Smoke', BigSmoke],
    ['Catalina', Catalina],
    ['Cesar', Cesar],
    ['CJ', Cj],
    ['Claude', Claude],
    ['Madd Dogg', MaddDogg],
    ['Ryder', Ryder],
    ['Sweet', Sweet],
    ['Tenpenny', Tenpenny],
    ['The Truth', TheTruth],
    ['Toreno', Toreno],
    ['Wuzimu', Wuzimu],
  ]

  return (
    <div id="main">
      <h1>San Andreas Memory Game</h1>
      <CharatcerCards characters={characters} />
    </div>
  )
}

export default App
