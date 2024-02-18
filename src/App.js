// App.js
import React from 'react';
import BlogPost from './components/BlogPost';

function App() {
  const blogPostData = {
    title: "React Component Basics",
    content: "In this blog post, we'll explore the basics of React components.",
    date: "February 18, 2024", // You can use a Date object or a string for the date
  };

  return (
    <div className="App">
      <h1>My Blog</h1>
      <BlogPost
        title={blogPostData.title}
        content={blogPostData.content}
        date={blogPostData.date}
      />
    </div>
  );
}

export default App;
