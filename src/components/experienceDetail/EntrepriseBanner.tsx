import React from 'react';
import '../../style/components/EntrepriseBanner.css'

interface EntrepriseBannerProps {
  logoUrl: string;
  companyName: string;
  jobTitle: string;
  companyDesc: string;
  missions: string[];
}

const EntrepriseBanner: React.FC<EntrepriseBannerProps> = ({ logoUrl, companyName, jobTitle, companyDesc, missions }) => {
  return (
    <div className='company-banner'>
      <div className='info-container'>
        <div className='pic-zone'>
          <img src={logoUrl} alt={`${companyName} logo`} />
        </div>
        <div className='info-company'>
          <h1>{companyName}</h1>
          <p>{companyDesc}</p>
          <h2>{jobTitle}</h2>
          <ul>
            {missions.map((mission, index) => (
              <li className='txt' key={index}>{mission}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EntrepriseBanner;
