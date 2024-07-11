import Accueil from '../components/home/Accueil';
import A_propos from '../components/home/Presentation';
import Competences from '../components/home/Competences'

const Home = () => {
  return (
    <div>
      <Accueil />
      <A_propos />
      <Competences />
    </div>
  )
}

export default Home