import React from 'react';
import '../../style/components/Banniere_real.css';
import '../../style/style_gen.css';

const Banniere = () => {

  return (
    <div className="banniere">
        <div className="line-banniere"></div>
        <div className="banniere-pic-real">
            <p className="txt-real">Mes Réalisations</p>
        </div>
        <div className="line-banniere"></div>
    </div>
  );
};

export default Banniere;
