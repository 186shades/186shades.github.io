import React, { useState, useMemo } from 'react';
import Main from '../layouts/Main';
import BlogCell from '../components/Blog/BlogCell';
import data from '../data/blogs';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBlogs = useMemo(() => {
    if (!searchQuery.trim()) {
      return data;
    }

    const query = searchQuery.toLowerCase();
    return data.filter((blog) => {
      const titleMatch = blog.title.toLowerCase().includes(query);
      const excerptMatch = blog.excerpt.toLowerCase().includes(query);
      const tagsMatch = blog.tags.some((tag) => tag.toLowerCase().includes(query));
      return titleMatch || excerptMatch || tagsMatch;
    });
  }, [searchQuery]);

  return (
    <Main
      title="Blog"
      description="Read Sharvari's thoughts on machine learning, medical imaging, and more."
      fullPage
    >
      <article className="post" id="blog">
        <header>
          <div className="title">
            <h2>Blog</h2>
            <p>Thoughts on machine learning, medical imaging, and technology</p>
          </div>
        </header>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search blogs by title, content, or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="blog-search"
          />
        </div>
        <div className="projectContainer">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <BlogCell data={blog} key={blog.slug} />
            ))
          ) : (
            <p>No blogs found matching your search.</p>
          )}
        </div>
      </article>
    </Main>
  );
};

export default Blog;
