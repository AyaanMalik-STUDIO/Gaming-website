// src/components/EditPostForm.js
import React, { useState, useEffect } from 'react';
import { dummyPosts } from '../data/dummyData';

const EditPostForm = ({ match }) => {
  const postId = parseInt(match.params.id, 10);
  const post = dummyPosts.find((p) => p.id === postId);

  // Use useEffect to set initial form data once the post is available
  useEffect(() => {
    if (post) {
      setFormData({
        title: post.title,
        content: post.content,
      });
    }
  }, [post]);

  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for submitting the form (e.g., sending data to the server)
    console.log('Form submitted:', formData);
  };

  if (!post) {
    return <div className="container my-3">Post not found</div>;
  }

  return (
    <div className="container my-3">
      <h1>Edit Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <textarea
            className="form-control"
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditPostForm;
