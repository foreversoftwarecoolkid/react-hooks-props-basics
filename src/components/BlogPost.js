// components/BlogPost.js
import React from 'react';
import BlogContent from './BlogContent';  // Correct path

function BlogPost(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <BlogContent articleText={props.content} />
      <p>Published on: {props.date}</p>
      {/* ... rest of the component */}
    </div>
  );
}

export default BlogPost;
