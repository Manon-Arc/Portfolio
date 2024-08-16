import React from 'react';
import '../../style/style_gen.css';
import '../../style/components/ArticleIntro.css';
import AlarmIcon from '@mui/icons-material/Alarm';
import { Avatar } from '@mui/material';

interface Author {
	name: string;
	avatar: string;
}

interface ArticleIntroProps {
	title: string;
	background: string;
	date: string;
	author: Author;
	time: number;
}

const ArticleIntro: React.FC<ArticleIntroProps> = ({ title, background, date, author, time }) => {
	return (
		<div className='article-intro'>
			<h1 className='article-title txt-title'>{title}</h1>
			<div className='avatar-box'>
				<a href="/a_propos" style={{ display: 'flex', alignItems: 'center' }}>
					<Avatar alt={author.name} src={author.avatar} sx={{ width: 35, height: 35, mr: 1 }} />
					<p className='txt'>Par {author.name}</p>
				</a>
			</div>
			<div className='article-zone-sep'>
				<div className='article-sep'></div>
				<div className='article-date-zone'>
					<p className='txt'>Publié le {date}</p>
					<div className='article-time'>
						<AlarmIcon fontSize="small" sx={{ color: "var(--txt)" }} />
						<p className='txt'>Temps de lecture : {time} min</p>
					</div>
				</div>
				<div className='article-sep'></div>
			</div>
			<div className='article-image'>
				<img src={background} alt="Article background" className='article-background' />
			</div>
		</div>
	);
};

export default ArticleIntro;
