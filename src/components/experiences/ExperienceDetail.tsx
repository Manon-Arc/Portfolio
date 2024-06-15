import React from 'react';
import { useParams } from 'react-router-dom';
import { experiences } from './data/experiences';
import EntrepriseBanner from './EntrepriseBanner';
import ArticleList from './ArticleList';

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
        description={experience.description}
      />
      <ArticleList articles={experience.articles} />
    </div>
  );
};

export default ExperienceDetail;
