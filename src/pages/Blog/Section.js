import React, { useState, useMemo } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import Main from '../../layouts/Main';
import EntryCell from '../../components/Blog/EntryCell';
import sections from '../../data/blog/sections';

const Section = () => {
  const { section: sectionKey } = useParams();
  const [searchParams] = useSearchParams();
  const section = sections.find((s) => s.key === sectionKey);
  const [searchQuery, setSearchQuery] = useState(searchParams.get('tag') || '');

  const sortedEntries = useMemo(() => {
    if (!section) {
      return [];
    }
    return [...section.data].sort(
      (a, b) => new Date(b[section.dateField]) - new Date(a[section.dateField]),
    );
  }, [section]);

  const filteredEntries = useMemo(() => {
    if (!searchQuery.trim()) {
      return sortedEntries;
    }
    const query = searchQuery.toLowerCase();
    return sortedEntries.filter((entry) => {
      const titleMatch = entry.title.toLowerCase().includes(query);
      const excerptMatch = (entry.excerpt || '').toLowerCase().includes(query);
      const tagsMatch = (entry.tags || []).some((tag) => tag.toLowerCase().includes(query));
      return titleMatch || excerptMatch || tagsMatch;
    });
  }, [searchQuery, sortedEntries]);

  if (!section) {
    return (
      <Main title="Section Not Found" description="Blog section not found" fullPage>
        <article className="post" id="blog-section">
          <header>
            <div className="title">
              <h2>Section Not Found</h2>
              <Link to="/blog">← Back to Blog</Link>
            </div>
          </header>
          <p>That blog section doesn&apos;t exist.</p>
        </article>
      </Main>
    );
  }

  return (
    <Main title={section.label} description={section.tagline} fullPage>
      <article className="post" id="blog-section">
        <header>
          <div className="title">
            <Link to="/blog">← Back to Blog</Link>
            <h2>{section.label}</h2>
            <p>{section.tagline}</p>
          </div>
        </header>
        <div className="search-container">
          <input
            type="text"
            placeholder={`Search ${section.label.toLowerCase()} by title, content, or tags...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="blog-search"
            aria-label={`Search ${section.label}`}
          />
        </div>
        <div className="projectContainer">
          {filteredEntries.length > 0 && (
            filteredEntries.map((entry) => (
              <EntryCell data={entry} section={section} key={entry.slug} />
            ))
          )}
          {filteredEntries.length === 0 && sortedEntries.length === 0 && (
            <p>Nothing here yet.</p>
          )}
          {filteredEntries.length === 0 && sortedEntries.length > 0 && (
            <p>No entries found matching your search.</p>
          )}
        </div>
      </article>
    </Main>
  );
};

export default Section;
