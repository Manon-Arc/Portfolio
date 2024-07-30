import Banniere from '../components/a_propos/Banniere_a_propos'
import Presentation from '../components/a_propos/A_propos'
import Timeline from '../components/a_propos/Timeline'
import Hardskills from '../components/a_propos/Hardskills'
import Softskills from '../components/a_propos/Softskills'

const A_propos = () => {
  return (
    <div>
    <Banniere />
    <Presentation />
    <Timeline />
    <Hardskills />
    <Softskills />
    </div>
  )
}

export default A_propos