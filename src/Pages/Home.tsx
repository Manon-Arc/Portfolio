import Accueil from '../components/home/Accueil';
import A_propos from '../components/home/Presentation';
import Carousel from '../components/home/Blog_carroussel';

const Home = () => {
  return (
    <div>
      <Accueil />
      <A_propos />
      <Carousel />
    </div>
  )
}

export default Home