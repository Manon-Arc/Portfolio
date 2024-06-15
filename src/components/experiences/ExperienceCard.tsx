import React from 'react';
import { Link } from 'react-router-dom';

interface ExperienceCardProps {
  id: string;
  logoUrl: string;
  companyName: string;
  jobTitle: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ id, logoUrl, companyName, jobTitle }) => {
  return (
    <div className="experience-card">
      <Link to={`/experience/${id}`}>
        <img src={logoUrl} alt={`${companyName} logo`} />
        <h2>{companyName}</h2>
        <p>{jobTitle}</p>
      </Link>
    </div>
  );
};

export default ExperienceCard;
