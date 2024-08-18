import React from 'react';
import '../../style/components/ArticleContent.css';

interface SectionWithImage {
  content: string;
  img?: string; // made img optional
}

interface ArticleContentProps {
  sec1: string;
  sec2: {
    sec2_1: SectionWithImage;
    sec2_2: SectionWithImage;
    sec2_3: SectionWithImage;
  };
  sec3: string;
  video?: string; // made video optional
}

const ArticleContent: React.FC<ArticleContentProps> = ({ sec1, sec2, sec3, video }) => {
  return (
    <div className="article-container">
      <section className="section section-intro">
        <p className="txt">{sec1}</p>
      </section>

      <section className="section section-alternate">
        {Object.entries(sec2).map(([key, value], index) => (
          <div key={key} className={`section-content ${index % 2 === 0 ? 'image-right' : 'image-left'}`}>
            {value.img && <img src={value.img} alt={`Image related to ${key}`} />}
            <p className="txt">{value.content}</p>
          </div>
        ))}
      </section>

      {video && (
        <div className="video-section">
          <video autoPlay loop muted>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      <section className="section section-conclusion">
        <p className="txt">{sec3}</p>
      </section>
    </div>
  );
};

export default ArticleContent;
