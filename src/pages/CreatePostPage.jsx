// src/pages/CreatePostPage.js
import React from 'react';
import CreatePostForm from '../components/CreatePost';

const CreatePostPage = () => {
  return (
    <div className="container mt-4">
      <h1 className="display-4 text-center mb-4">Create a New Blog Post</h1>
      <CreatePostForm />
    </div>
  );
};

export default CreatePostPage;
