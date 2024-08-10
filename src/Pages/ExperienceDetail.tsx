import React from 'react';
import { useParams } from 'react-router-dom';
import { experiences } from '../data/experiences';
import EntrepriseBanner from '../components/experienceDetail/EntrepriseBanner';
import '../style/pages/ExperienceDetail.css'
import '../style/style_gen.css'

const ExperienceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const experience = experiences.find(exp => exp.id === id);

  if (!experience) {
    return <div>Experience not found</div>;
  }

  return (
    <div className="experience-detail">
      <EntrepriseBanner
        logoUrl={experience.logoUrl}
        companyName={experience.companyName}
        jobTitle={experience.jobTitle}
        companyDesc={experience.companyDesc}
        missions={experience.missions}
      />
      <div className="post-list-detail">
        <div className='exp-line'>
          <div className='sep'></div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetail;