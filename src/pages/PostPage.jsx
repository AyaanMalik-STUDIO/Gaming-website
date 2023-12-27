// src/pages/PostPage.js
import React from 'react';
import BlogPost from '../components/BlogPost';

const PostPage = ({ match }) => {
  if (!match || !match.params) {
    // Handle the case where match or match.params is undefined
    return <div>Error: Invalid URL</div>;
  }

  return (
    <div className="container mt-4">
      <BlogPost match={match} />
    </div>
  );
};

export default PostPage;
