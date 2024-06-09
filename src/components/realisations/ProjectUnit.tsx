import React, { useEffect, useRef } from 'react';
import "../../style/components/ProjectUnit.css";
import { addOpacityListeners } from '../../js/addOpacityListener.js';

interface ProjectUnitProps {
  className: string;
  proj: string;
  title: string;
  description: string;
  imageUrl: string;
  languages?: string;
  software: string;
  features: string[];
  team: string;
  projectLink?: string;
}

const ProjectUnit: React.FC<ProjectUnitProps> = ({
  className,
  proj,
  title,
  description,
  imageUrl,
  languages,
  software,
  features,
  team,
  projectLink
}) => {
  useEffect(() => {
    addOpacityListeners(desc.current, detail.current, link.current);
  }, []);

  const desc = useRef(null);
  const detail = useRef(null);
  const link = useRef(null);

  return (
    <div className={`project-unit ${className}`}>
      {className === "G" ? (
        <>
          <div className="pic-project">
            <a href={imageUrl} target="_blank" rel="noopener noreferrer">
              <img src={imageUrl} alt={title} />
            </a>
          </div>
          <div className="project-prez">
            <div className="project-title">
              <p className="txt-title project-name">{title}</p>
              <div className="under-line"></div>
            </div>
            <div ref={desc} className={`project-desc ${proj}`}>
              <p className="txt">{description}</p>
              <div className="btn-more">
                <img src="/src/assets/realisations/plus.png" alt="plus" />
              </div>
            </div>
            <div ref={detail} className={`project-detail ${proj}`}>
              <div className="first-line">
                {languages && (
                  <div className="language">
                    <img className="pic-project-prez" src="/src/assets/realisations/coding_white.png" alt="coding" />
                    <p className="txt">{languages}</p>
                  </div>
                )}
                <div className="software">
                  <img className="pic-project-prez" src="/src/assets/realisations/software.png" alt="software" />
                  <p className="txt">{software}</p>
                </div>
              </div>
              <div className="features">
                <img className="pic-project-prez" src="/src/assets/realisations/feature.png" alt="features" />
                <p className="txt">
                  {features.map((feature, index) => (
                    <span key={index}>{feature}</span>
                  ))}
                </p>
              </div>
              <div className="team">
                <img className="pic-project-prez" src="/src/assets/realisations/user.png" alt="team" />
                <p className="txt">{team}</p>
              </div>
              <div ref={link} className={`link-zone ${proj}`}>
                <p className="logiciel-link">
                  {projectLink ? (
                    <>
                      <span>lien du projet : </span>
                      <span>
                        <a className="link-proj" href={projectLink} target="_blank" rel="noopener noreferrer">
                          {projectLink}
                        </a>
                      </span>
                    </>
                  ) : (
                    <span>En cours de développement</span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="project-prez">
            <div className={`project-title project-title-${className}`}>
              <p className="txt-title project-name">{title}</p>
              <div className="under-line"></div>
            </div>
            <div ref={desc} className={`project-desc project-desc-${className} ${proj}`}>
              <p className="txt">{description}</p>
              <div className="btn-more">
                <img src="/src/assets/realisations/plus.png" alt="plus" />
              </div>
            </div>
            <div ref={detail} className={`project-detail project-detail-${className} ${proj}`}>
              <div className="first-line">
                {languages && (
                  <div className="language">
                    <img className="pic-project-prez" src="/src/assets/realisations/coding_white.png" alt="coding" />
                    <p className="txt">{languages}</p>
                  </div>
                )}
                <div className="software">
                  <img className="pic-project-prez" src="/src/assets/realisations/software.png" alt="software" />
                  <p className="txt">{software}</p>
                </div>
              </div>
              <div className="features">
                <img className="pic-project-prez" src="/src/assets/realisations/feature.png" alt="features" />
                <p className="txt">
                  {features.map((feature, index) => (
                    <span key={index}>{feature}</span>
                  ))}
                </p>
              </div>
              <div className="team">
                <img className="pic-project-prez" src="/src/assets/realisations/user.png" alt="team" />
                <p className="txt">{team}</p>
              </div>
              <div ref={link} className={`link-zone ${proj}`}>
                <p className="logiciel-link">
                  {projectLink ? (
                    <>
                      <span>lien du projet : </span>
                      <span>
                        <a className="link-proj" href={projectLink} target="_blank" rel="noopener noreferrer">
                          {projectLink}
                        </a>
                      </span>
                    </>
                  ) : (
                    <span>En cours de développement</span>
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="pic-project">
            <a href={imageUrl} target="_blank" rel="noopener noreferrer">
              <img src={imageUrl} alt={title} />
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectUnit;
