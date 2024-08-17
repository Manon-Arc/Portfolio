import React from 'react';
import '../style/components/NotFound.css';
import '../style/style_gen.css';
import workspace from '../assets/workplace.svg';
import linkedin from '../assets/linkedin-logo_white.png';
import git from '../assets/git_logo_white.png';


const NotFound: React.FC = () => {
    return (
        <div className='notFound'>
            <div className="sec1">
                <div className="sec1-a">
                    <img src={workspace} alt="" />
                </div>
            </div>
            <div className="sec2">
                <div className="sec2-a">
                    <div className="explication">
                        <div className="construction">
                            <h1 className="title">404 not found</h1>
                        </div>
                        <p className="txt">Cette partie du site n'existe pas reviens à l'accueil en cliquant sur le logo en haut à gauche !</p>
                        <div className="sec2-b">
                        <div className="logo">
                            <div className="git">
                                <a href="https://github.com/Manon-Arc">
                                    <img src={git} alt="" />
                                </a>
                            </div>
                            <div className="linkedin">
                                <a href="https://www.linkedin.com/in/manon-arcas/">
                                    <img src={linkedin} alt="" />
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NotFound;
