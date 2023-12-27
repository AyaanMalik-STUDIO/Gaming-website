// src/components/BlogPost.js
import React from 'react';
import { dummyPosts } from '../data/dummyData';

const BlogPost = ({ match }) => {
  const postId = parseInt(match.params.id, 10);
  const post = dummyPosts.find((p) => p.id === postId);

  if (!post) {
    return <div className="container my-3">Post not found</div>;
  }

  return (
    <div className="container my-3">
      <div className="card">
        <img src={`/images/${post.image}`} alt={post.title} className="card-img-top" />
        <div className="card-body">
          <h1 className="card-title">{post.title}</h1>
          <p className="card-text">{post.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
