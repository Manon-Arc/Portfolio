import Accueil from '../components/home/Accueil';
import A_propos from '../components/home/Presentation';
import PauseOnHover from '../components/home/Blog_carroussel';

const Home = () => {
  return (
    <div>
      <Accueil />
      <A_propos />
      <PauseOnHover />
    </div>
  )
}

export default Home