import React from 'react';
import { Container, List, ListItem } from '@mui/material';
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
				<p className='txt missions-intro'>
					{introMission}
				</p>
				<List>
					{missions.map((mission, index) => (
						<ListItem key={index}>
							<p className='txt'>{mission}</p>
						</ListItem>
					))}
				</List>
			</Container>
		</div>
	);
};

export default Missions;