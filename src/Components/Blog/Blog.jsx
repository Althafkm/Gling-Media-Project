import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom'
import { blogPosts } from './blogData'

const Blog = () => {
//   const blogPosts = [
//     {
//       title: 'Why Education is Changing Fast',
//       excerpt: 'Explore how modern technology, flexible learning, and global access are transforming education today.',
//       link: '#',
//     },
//     {
//       title: 'Top 5 Programs That Make a Difference',
//       excerpt: 'Discover the most impactful programs we offer and how they shape real-life outcomes.',
//       link: '#',
//     },
//     {
//       title: 'Student Success Stories You’ll Love',
//       excerpt: 'Read how our students achieved success through dedication and guidance from our mentors.',
//       link: '#',
//     },
//     {
//         title: 'Why Education is Changing Fast',
//         excerpt: 'Explore how modern technology, flexible learning, and global access are transforming education today.',
//         link: '#',
//       },
//       {
//         title: 'Top 5 Programs That Make a Difference',
//         excerpt: 'Discover the most impactful programs we offer and how they shape real-life outcomes.',
//         link: '#',
//       },
//       {
//         title: 'Student Success Stories You’ll Love',
//         excerpt: 'Read how our students achieved success through dedication and guidance from our mentors.',
//         link: '#',
//       },
//   ];

  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1>Our Blog</h1>
        <p className="subtitle">Stories, Updates, and Resources for You</p>
      </div>

      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <div className="blog-card" key={index}>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <Link to={`/blog/${post.slug}`}>Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
