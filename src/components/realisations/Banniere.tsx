import React from 'react';
import '../../style/components/Banniere.css';
import '../../style/style_gen.css';

const Banniere = () => {

  return (
    <div className="banniere">
        <div className="line-banniere"></div>
        <div className="banniere-pic">
            <p className="txt-real">Mes Réalisations</p>
        </div>
        <div className="line-banniere"></div>
    </div>
  );
};

export default Banniere;
