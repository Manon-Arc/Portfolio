import { useEffect } from 'react';
import '../../style/components/Accueil.css';
import '../../style/style_gen.css';
import { ecrireTexte } from '../../js/textEffect.ts';
import ArrowAnimation from './Arrow';

const Accueil = () => {
  useEffect(() => {
    ecrireTexte();
  }, []);

  return (
    <div className="sec-1" id="0">
      <div className="sec-1g">
        <p className="name">ARCAS Manon</p>
        <p className="txt-intro" id="animation_machine"></p>
        <p className="txt-subtitle recherche">Développeuse web, logiciel et IoT</p>
        <a href='#1' className="btn a-propos">
          <p className="txt-btn">A propos</p>
        </a>
      </div>
      <ArrowAnimation />
    </div>
  );
};

export default Accueil;
