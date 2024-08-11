import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/components/ExperienceCard.css';
import '../../style/style_gen.css';

interface ExperienceCardProps {
  id: number;
  backpicUrl: string;
  logoUrl: string;
  companyName: string;
  jobTitle: string;
  duration: string;
  missions: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ id, backpicUrl, logoUrl, companyName, jobTitle, duration, missions }) => {
  return (
    <div>
      <Link to={`/experience/${id}`} className="experience-card">
        <div className='expcard-picside'>
          <img className='expcard-img expcard-imgback' src={backpicUrl} alt='backpic' />
          <img className='expcard-img expcard-imgcompany' src={logoUrl} alt={`${companyName} logo`} />
        </div>
        <div className='expcard-info'>
          <div className='expcard-info-title'>
            <p className='txt-expcard-company'>{companyName}</p>
            <h2 className='txt-expcard-jobTitle'>{jobTitle}</h2>
            <p className='txt-expcard-date'>{duration}</p>
          </div>
          <ul>
            {missions.map((mission, index) => (
              <li className='txt' key={index}>{mission}</li>
            ))}
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default ExperienceCard;