import React from 'react';
import '../../style/components/ExperienceCard.css';
import '../../style/components/CompanyBanner.css'
import '../../style/style_gen.css';

interface CompanyBannerProps {
  logoUrl: string;
  companyName: string;
  jobTitle: string;
  duration: string;
}

const CompanyBanner: React.FC<CompanyBannerProps> = ({ logoUrl, companyName, jobTitle, duration }) => {
  return (
    <div className='company-banner'>
      <div className='experience-card-company'>
        <div className='companycard-picside '>
          <img className='expcard-img expcard-imgcompany' src={logoUrl} alt={`${companyName} logo`} />
        </div>
        <div className='expcard-info-company'>
            <p className='txt-expcard-company'>{companyName}</p>
            <h2 className='txt-expcard-jobTitle'>{jobTitle}</h2>
            <p className='txt-expcard-date'>{duration}</p>
        </div>
      </div>
    </div>

  );
};

export default CompanyBanner;