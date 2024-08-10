import React from 'react';
import ExperienceCard from './ExperienceCard';
import { experiences } from '../../data/experiences';
import '../../style/components/ExperienceList.css';
import '../../style/style_gen.css';

const ExperienceList: React.FC = () => {
  return (
    <div className="experiences-list">
      {experiences.map(experience => (
        <ExperienceCard 
          key={experience.id}
          id={experience.id}
          backpicUrl={experience.backpicUrl}
          logoUrl={experience.logoUrl}
          companyName={experience.companyName}
          jobTitle={experience.jobTitle}
          duration={experience.duration}
          missions={experience.missions}
        />
      ))}
    </div>
  );
};

export default ExperienceList;
