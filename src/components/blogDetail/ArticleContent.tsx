import React from 'react';
import '../../style/components/ArticleContent.css'

interface SectionWithImage {
  content: string;
  img: string;
}

interface ArticleContentProps {
  sec1: string;
  sec2: {
    sec2_1: SectionWithImage;
    sec2_2: SectionWithImage;
    sec2_3: SectionWithImage;
  };
  sec3: string;
}

const ArticleContent: React.FC<ArticleContentProps> = ({ sec1, sec2, sec3 }) => {
  return (
    <div className="article-container">
      {/* Section 1: Introduction */}
      <section className="section section-intro">
        <p>{sec1}</p>
      </section>

      {/* Section 2: Alternating Images and Text */}
      <section className="section section-alternate">
        {Object.entries(sec2).map(([key, value], index) => (
          <div key={key} className={`section-content ${index % 2 === 0 ? 'image-right' : 'image-left'}`}>
            <img src={value.img} alt={`Image related to ${key}`} />
            <p>{value.content}</p>
          </div>
        ))}
      </section>

      {/* Section 3: Conclusion */}
      <section className="section section-conclusion">
        <p>{sec3}</p>
      </section>
    </div>
  );
};

export default ArticleContent;
