import React from 'react';
import PostItem from './PostItem';
import { posts } from './data/posts';

const PostList: React.FC = () => {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostItem key={post.id} id={post.id} title={post.title} summary={post.summary} />
      ))}
    </div>
  );
};

export default PostList;
