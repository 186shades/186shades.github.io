import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import Main from '../../layouts/Main';
import blogData from '../../data/blogs';

const BlogPost = () => {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const blog = blogData.find((b) => b.slug === slug);

  useEffect(() => {
    if (blog) {
      fetch(`${process.env.PUBLIC_URL}${blog.markdownPath}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Blog post not found');
          }
          return response.text();
        })
        .then((text) => {
          setContent(text);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    } else {
      setError('Blog post not found');
      setLoading(false);
    }
  }, [blog, slug]);

  if (loading) {
    return (
      <Main title="Loading..." description="Loading blog post" fullPage>
        <article className="post">
          <p>Loading...</p>
        </article>
      </Main>
    );
  }

  if (error || !blog) {
    return (
      <Main title="Blog Not Found" description="Blog post not found" fullPage>
        <article className="post">
          <header>
            <div className="title">
              <h2>Blog Post Not Found</h2>
              <Link to="/blog">← Back to Blog</Link>
            </div>
          </header>
          <p>{error || 'The blog post you are looking for does not exist.'}</p>
        </article>
      </Main>
    );
  }

  return (
    <Main title={blog.title} description={blog.excerpt} fullPage>
      <article className="post" id="blog-post">
        <header>
          <div className="title">
            <Link to="/blog">← Back to Blog</Link>
            <div style={{ marginTop: '1em' }}>
              {blog.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>
        <div className="markdown-content">
          <Markdown>{content}</Markdown>
        </div>
      </article>
    </Main>
  );
};

export default BlogPost;
