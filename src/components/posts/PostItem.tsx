import React from 'react';
import { Link } from 'react-router-dom';
import "../../style/components/PostItem.css";


interface PostItemProps {
  id: string;
  title: string;
  summary: string;
}

const PostItem: React.FC<PostItemProps> = ({ id, title, summary }) => {
  return (
    <div className="post-item">
      <h2>{title}</h2>
      <p>{summary}</p>
      <Link to={`/experience/${id}`}>Voir plus</Link>
    </div>
  );
};

export default PostItem;
