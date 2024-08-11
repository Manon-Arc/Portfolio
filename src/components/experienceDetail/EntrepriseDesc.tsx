import React from 'react';
import { Container, Typography } from '@mui/material';
import '../../style/components/ExperienceCard.css';
import '../../style/style_gen.css';

interface EntrepriseDescProps {
	companyDesc: string[];
}

const EntrepriseDesc: React.FC<EntrepriseDescProps> = ({ companyDesc}) => {
	return (
		<div>
			<div className="title-line">
				<div className="line"></div>
				<p className="txt-title">Contexte et présentation de l'entreprise</p>
				<div className="line"></div>
			</div>
			<Container>
				<Typography variant="body1" paragraph sx={{ color: "var(--txt)" }}>
					{companyDesc.map((paragraph, index) => (
						<Typography key={index} paragraph>
							{paragraph}
						</Typography>
					))}
				</Typography>
			</Container>
		</div>
	);
};

export default EntrepriseDesc;