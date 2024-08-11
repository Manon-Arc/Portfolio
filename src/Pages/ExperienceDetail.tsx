import React from 'react';
import { useParams } from 'react-router-dom';
import { experiences } from '../data/experiences';
import EntrepriseBanner from '../components/experienceDetail/EntrepriseBanner';
import EntrepriseDesc from '../components/experienceDetail/EntrepriseDesc';
import Missions from '../components/experienceDetail/Missions';
import EntrepriseArticleGrid from '../components/experienceDetail/EntrepriseArticles';
import NotFound from '../components/NoFound';
import '../style/pages/ExperienceDetail.css'
import '../style/style_gen.css'

const ExperienceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>No ID provided in the URL.</div>;
  }

  const idInt = parseInt(id, 10);
  const experience = experiences.find(exp => exp.id === idInt);

  if (!experience) {
    return <NotFound />;
  }

  return (
    <div className="experience-detail">
      <EntrepriseBanner
        logoUrl={experience.logoUrl}
        companyName={experience.companyName}
        jobTitle={experience.jobTitle}
        duration={experience.duration}
      />
      <EntrepriseDesc
        companyDesc={experience.companyDesc}
      />
      <Missions
        introMission={experience.introMission}
        missions={experience.missions}
      />
      <EntrepriseArticleGrid
        id={experience.id}
        companyName={experience.companyName}
      />
    </div>
  );
};

export default ExperienceDetail;