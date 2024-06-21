import React from 'react';
import Post from './Post';
import "../../style/components/PostList.css"

interface postListProps {
  posts: { id: string; title: string; content: string }[];
}

const PostList: React.FC<postListProps> = ({ posts }) => {
  return (
    <div className="post-list">
      {posts.map(post => (
        <Post
          key={post.id}
          title={post.title}
          content={post.content}
        />
      ))}
    </div>
  );
};

export default PostList;
