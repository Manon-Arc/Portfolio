import React, { useEffect } from 'react';
import '../../style/components/Nav_real.css';
import '../../style/style_gen.css';


const Nav_real = () => {
  return (
    <div className="category-proj">
            <div>
                <p className="All txt-category-real selected-category">
                    Tout</p>
            </div>
            <div className="line-category"></div>
            <div>
                <p className="ProjDev txt-category-real">
                    <span>Projets </span>
                    <span>développement</span>
                </p>
            </div>
            <div className="line-category"></div>
            <div>
                <p className="ProjSysEmb txt-category-real">
                    <span>Projets </span>
                    <span>systèmes embarqués</span>
                </p>
            </div>
        </div>
    )
}

export default Nav_real