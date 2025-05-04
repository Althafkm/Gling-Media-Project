import React from 'react'
import { useParams } from 'react-router-dom'
import { blogPosts } from './blogData'
import { Helmet } from 'react-helmet' // 👈 Add this
import './BlogPost.css'

const BlogPost = () => {
  const { slug } = useParams()
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) return <div className="blog-container"><h2>Post not found</h2></div>

  return (
    <div className="blog-container">
      {/* ✅ Dynamic SEO Meta Tags */}
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.metaDescription || post.content.slice(0, 150)} />
        <meta name="keywords" content={post.keywords || "data science, career, blog"} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.metaDescription || post.content.slice(0, 150)} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://yourwebsite.com/blog/${slug}`} />
      </Helmet>

      <div className="blog-header">
        <h1 className="blog-title">{post.title}</h1>
        <p className="blog-date">Published on April 21, 2025</p>
      </div>
      <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  )
}

export default BlogPost
