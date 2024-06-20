import React from 'react';
import Article from './Article';

interface ArticleListProps {
  articles: { id: string; title: string; content: string }[];
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  return (
    <div className="article-list">
      {articles.map(article => (
        <Article 
          key={article.id}
          title={article.title}
          content={article.content}
        />
      ))}
    </div>
  );
};

export default ArticleList;
