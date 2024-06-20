import React from 'react';

interface ArticleProps {
  title: string;
  content: string;
}

const Article: React.FC<ArticleProps> = ({ title, content }) => {
  return (
    <div className="article">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Article;
