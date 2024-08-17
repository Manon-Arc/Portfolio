import React from 'react';
import { useParams } from 'react-router-dom';
import { articles } from '../data/articles';
import ArticleIntro from '../components/blogDetail/ArticleIntro';
import ArticleContent from '../components/blogDetail/ArticleContent';
import ImageGallery from '../components/blogDetail/ImagesGallery';
import NotFound from '../components/NoFound';
import '../style/style_gen.css';

const ArticleDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return <div>No ID provided in the URL.</div>;
    }

    const idInt = parseInt(id, 10);
    const article = articles.find(exp => exp.id === idInt);

    if (!article) {
        return <NotFound />;
    }

    return (
        <div className="experience-detail">
            <ArticleIntro
                title={article.title}
                background={article.background}
                author={article.author}
                time={article.time}
                date={article.date.toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })}
            />
            <ArticleContent
                sec1={article.content.sec1}
                sec2={article.content.sec2}
                sec3={article.content.sec3}
            />
            <ImageGallery 
                images={article.images}
            />
        </div>
    );
};

export default ArticleDetail;