import React from 'react';
import "../../style/components/PostCard.css" 

interface PostProps {
  title: string;
  content: string;
}

const Post: React.FC<PostProps> = ({ title, content }) => {
  return (
    <div className="post">
      <div className="line-zone">
        <div className="line-post"></div>
      </div>
      <div className='post-info'>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Post;
