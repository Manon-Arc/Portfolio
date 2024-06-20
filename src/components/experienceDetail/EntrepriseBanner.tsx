import React from 'react';

interface EntrepriseBannerProps {
  logoUrl: string;
  companyName: string;
  jobTitle: string;
  description: string;
}

const EntrepriseBanner: React.FC<EntrepriseBannerProps> = ({ logoUrl, companyName, jobTitle, description }) => {
  return (
    <div className="entreprise-banner">
      <img src={logoUrl} alt={`${companyName} logo`} />
      <h1>{companyName}</h1>
      <h2>{jobTitle}</h2>
      <p>{description}</p>
    </div>
  );
};

export default EntrepriseBanner;
