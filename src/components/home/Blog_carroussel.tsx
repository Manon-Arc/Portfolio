import React from 'react';
import Slider from 'react-slick';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { articles } from '../../data/articles';
import ArticleCard from '../blog/ArticleCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../style/components/Blog_carroussel.css";

interface ArrowProps {
    onClick?: () => void;
}

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <ArrowForwardIos
        onClick={onClick}
        style={{
            position: 'absolute',
            top: '50%',
            right: '-5%',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
            color: 'white',
            zIndex: 1,
            fontSize: '2rem',
        }}
    />
);

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <ArrowBackIos
        onClick={onClick}
        style={{
            position: 'absolute',
            top: '50%',
            left: '-5%',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
            color: 'white',
            zIndex: 1,
            fontSize: '2rem',
        }}
    />
);

function PauseOnHover() {
    const sortedArticles = [...articles].sort((a, b) => a.date.getTime() - b.date.getTime());
    const recentArticles = sortedArticles.slice(0, 5);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2500,
        pauseOnHover: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className='carroussel'>
            <div className="title-line">
                <div className="line"></div>
                <p className="txt-title">Articles récents</p>
                <div className="line"></div>
            </div>
            <div className='slider-container'>
                <Slider {...settings}>
                    {recentArticles.map((article) => (
                        <div className="centered-slide" key={article.id}>
                            <ArticleCard
                                id={article.id}
                                image={article.background}
                                title={article.title}
                                date={article.date.toLocaleDateString('fr-FR', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default PauseOnHover;
