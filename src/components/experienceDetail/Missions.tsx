import React from 'react';
import { Container, Typography, List, ListItem } from '@mui/material';
import '../../style/style_gen.css';
import '../../style/components/Missions.css'

interface MissionProps {
	missions: string[];
	introMission: string;
}

const Missions: React.FC<MissionProps> = ({ missions, introMission }) => {
	return (
		<div className='missions-zone'>
			<div className="title-line">
				<div className="line"></div>
				<p className="txt-title">Missions</p>
				<div className="line"></div>
			</div>
			<Container>
				<Typography variant="h6" sx={{ color: "var(--txt)" }}>
					{introMission}
				</Typography>
				<List>
					{missions.map((mission, index) => (
						<ListItem key={index}>
							<Typography>{mission}</Typography>
						</ListItem>
					))}
				</List>
			</Container>
		</div>
	);
};

export default Missions;