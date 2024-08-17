import React from 'react';
import { Container, Typography } from '@mui/material';
import '../../style/components/ExperienceCard.css';
import '../../style/components/EntrepriseDesc.css';
import '../../style/style_gen.css';

interface EntrepriseDescProps {
	companyDesc: string[];
}

const EntrepriseDesc: React.FC<EntrepriseDescProps> = ({ companyDesc}) => {
	return (
		<div className='entrepriseDesc'>
			<div className="title-line">
				<div className="line"></div>
				<p className="txt-title">Contexte et présentation de l'entreprise</p>
				<div className="line"></div>
			</div>
			<Container>
				<p className='txt'>
					{companyDesc.map((paragraph, index) => (
						<Typography key={index} paragraph className='txt'>
							{paragraph}
						</Typography>
					))}
				</p>
			</Container>
		</div>
	);
};

export default EntrepriseDesc;