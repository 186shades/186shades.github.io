import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import Main from '../../layouts/Main';
import sections from '../../data/blog/sections';

const RECENT_COUNT = 8;

const Home = () => {
  const recentEntries = useMemo(() => {
    const all = sections.flatMap((section) => (
      section.data.map((entry) => ({ entry, section }))
    ));
    const byDateDesc = (a, b) => (
      new Date(b.entry[b.section.dateField]) - new Date(a.entry[a.section.dateField])
    );
    return all.sort(byDateDesc).slice(0, RECENT_COUNT);
  }, []);

  return (
    <Main
      title="Blog"
      description="A running log, a growing set of notes, and the questions I'm still chewing on."
      fullPage
    >
      <article className="post" id="blog-home">
        <header>
          <div className="title">
            <h2>Blog</h2>
            <p>
              A running log, a growing set of notes, and the questions
              I&apos;m still chewing on.
            </p>
          </div>
        </header>
        <div className="section-links">
          {sections.map((section) => (
            <Link key={section.key} to={`/blog/${section.key}`} className="section-card">
              <h3>{section.label}</h3>
              <p>{section.tagline}</p>
            </Link>
          ))}
        </div>
        <h3 className="recent-heading">Recent</h3>
        {recentEntries.length > 0 ? (
          <ul className="recent-feed">
            {recentEntries.map(({ entry, section }) => (
              <li key={`${section.key}-${entry.slug}`}>
                <span className="section-pill">{section.label}</span>
                <Link to={`/blog/${section.key}/${entry.slug}`}>{entry.title}</Link>
                <time className="published">
                  {dayjs(entry[section.dateField]).format('MMM DD, YYYY')}
                </time>
              </li>
            ))}
          </ul>
        ) : (
          <p>Nothing here yet.</p>
        )}
      </article>
    </Main>
  );
};

export default Home;
