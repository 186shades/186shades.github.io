import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

const EntryCell = ({ data, section }) => (
  <div className="cell-container">
    <article className={section.key === 'log' ? 'mini-post log-entry' : 'mini-post'}>
      <header>
        <h3>
          <Link to={`/blog/${section.key}/${data.slug}`}>{data.title}</Link>
        </h3>
        <time className="published">
          {section.dateLabel ? `${section.dateLabel} ` : ''}
          {dayjs(data[section.dateField]).format('MMMM DD, YYYY')}
        </time>
      </header>
      {data.excerpt && (
        <div className="description">
          <p>{data.excerpt}</p>
        </div>
      )}
      {data.tags && data.tags.length > 0 && (
        <div className="tags">
          {data.tags.map((tag) => (
            <Link key={tag} className="tag" to={`/blog/${section.key}?tag=${encodeURIComponent(tag)}`}>
              {tag}
            </Link>
          ))}
        </div>
      )}
    </article>
  </div>
);

EntryCell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    excerpt: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  section: PropTypes.shape({
    key: PropTypes.string.isRequired,
    dateField: PropTypes.string.isRequired,
    dateLabel: PropTypes.string,
  }).isRequired,
};

export default EntryCell;
