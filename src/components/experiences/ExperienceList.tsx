import React from 'react';
import ExperienceCard from './ExperienceCard';
import { experiences } from './data/experiences'; // Fichier de données des expériences

const ExperienceList: React.FC = () => {
  return (
    <div className="experience-list">
      {experiences.map(experience => (
        <ExperienceCard 
          key={experience.id}
          id={experience.id}
          logoUrl={experience.logoUrl}
          companyName={experience.companyName}
          jobTitle={experience.jobTitle}
        />
      ))}
    </div>
  );
};

export default ExperienceList;
