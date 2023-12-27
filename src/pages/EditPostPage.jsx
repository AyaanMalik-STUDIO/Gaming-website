// src/pages/EditPostPage.js
import React from 'react';
import EditPostForm from '../components/EditPost';

const EditPostPage = ({ match }) => {
  return (
    <div className="container mt-4">
      <h1 className="display-4 text-center mb-4">Edit Blog Post</h1>
      <EditPostForm match={match} />
    </div>
  );
};

export default EditPostPage;
