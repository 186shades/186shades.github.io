import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import dayjs from 'dayjs';
import Main from '../../layouts/Main';
import sections from '../../data/blog/sections';

const Entry = () => {
  const { section: sectionKey, slug } = useParams();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const section = sections.find((s) => s.key === sectionKey);
  const entry = section && section.data.find((e) => e.slug === slug);

  useEffect(() => {
    if (entry) {
      fetch(`${process.env.PUBLIC_URL}/markdown/blog/${sectionKey}/${slug}.md`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Entry not found');
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
      setError('Entry not found');
      setLoading(false);
    }
  }, [entry, sectionKey, slug]);

  if (loading) {
    return (
      <Main title="Loading..." description="Loading entry" fullPage>
        <article className="post">
          <p>Loading...</p>
        </article>
      </Main>
    );
  }

  if (error || !entry || !section) {
    return (
      <Main title="Not Found" description="Entry not found" fullPage>
        <article className="post">
          <header>
            <div className="title">
              <h2>Not Found</h2>
              <Link to="/blog">← Back to Blog</Link>
            </div>
          </header>
          <p>{error || 'The entry you are looking for does not exist.'}</p>
        </article>
      </Main>
    );
  }

  return (
    <Main title={entry.title} description={entry.excerpt} fullPage>
      <article className="post" id="blog-entry">
        <header>
          <div className="title">
            <Link to={`/blog/${section.key}`}>{`← Back to ${section.label}`}</Link>
            <h2>{entry.title}</h2>
            <time className="published">
              {section.dateLabel ? `${section.dateLabel} ` : ''}
              {dayjs(entry[section.dateField]).format('MMMM DD, YYYY')}
            </time>
            {entry.tags && entry.tags.length > 0 && (
              <div className="tags">
                {entry.tags.map((tag) => (
                  <Link key={tag} className="tag" to={`/blog/${section.key}?tag=${encodeURIComponent(tag)}`}>
                    {tag}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </header>
        <div className="markdown-content">
          <Markdown>{content}</Markdown>
        </div>
      </article>
    </Main>
  );
};

export default Entry;
