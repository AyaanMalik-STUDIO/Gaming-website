// src/components/BlogList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { dummyPosts } from '../data/dummyData';

const BlogList = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Latest Blog Posts</h1>
      <div className="row">
        {dummyPosts.map((post) => (
          <div key={post.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={`/images/${post.image}`} alt={post.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.content}</p>
                <Link to={`/posts/${post.id}`} className="btn btn-primary">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
