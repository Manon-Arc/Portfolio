import React from 'react';
import { useParams } from 'react-router-dom';
import { posts } from './data/posts';
import "../../style/components/PostDetail.css";

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      {/* Ajoutez d'autres détails ici */}
    </div>
  );
};

export default PostDetail;
