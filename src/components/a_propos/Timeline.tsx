import '../../style/components/Timeline.css';
import { Chrono } from "react-chrono";
import { events } from '../../data/events';

const A_propos = () => {
	return (
		<div className="parcours">
			<div className="title-line parcours-title">
				<div className="line"></div>
				<p className="txt-title">Mon parcours</p>
				<div className="line"></div>
			</div>
			<div className='timeline-zone'>
				<div className='timeline' style={{ width: "100vw" }}>
					<Chrono
						items={events}
						theme={{
							primary: '#3f7c7e',
							secondary: '#2c5758',
							cardBgColor: '#2d3333',
							cardMediaBgColor: '#666666',
							cardDetailsBackGround: '#4c4c4c',
							titleColor: '#3f7c7e',
							titleColorActive: '#3f7c7e',
							cardTitleColor: '#F0F0F0',
							cardSubtitleColor: '#CECECE',
							cardDetailsColor: '#CECECE'
						}}
						mode="HORIZONTAL"
						showAllCardsHorizontal
						disableToolbar="false"
						cardHeight={20}
						cardWidth={450}
						fontSizes={{
							title: "1.1rem"
						}}
					/>
				</div>
			</div>

		</div>
	);
}

export default A_propos
