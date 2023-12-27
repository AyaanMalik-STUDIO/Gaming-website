// src/pages/BlogPage.js
import React from 'react';
import BlogList from '../components/BlogList';

const BlogPage = () => {
  return (
    <div className="container mt-4">
      <h1 className="display-4 text-center mb-4">All Blog Posts</h1>
      <BlogList />
    </div>
  );
};

export default BlogPage;
