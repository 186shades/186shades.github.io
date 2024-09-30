import React from 'react';
import PropTypes from 'prop-types';

const getRows = (courses) => courses.map((course, idx) => (
  <Skill
    data={course}
    key={course.title}
    last={idx === courses.length - 1}
  />
));

const SimpleSkills = ({ data }) => (
  <div className="courses">
    <div className="link-to" id="skills" />
    <div className="title">
      <h3>Skills</h3>
    </div>
    <ul className="course-list">
      {getRows(data)}
    </ul>
  </div>
);

const Skill = ({ data, last }) => (
  <li className="course-container">
    <p className="course-name">{data.title}</p>
    {!last && <div className="course-dot"><p className="course-name"> &#8226;</p></div>}
  </li>
);

SimpleSkills.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    number: PropTypes.string,
    link: PropTypes.string,
    university: PropTypes.string,
  })),
};

SimpleSkills.defaultProps = {
  data: [],
};

Skill.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    number: PropTypes.string,
    link: PropTypes.string,
    university: PropTypes.string,
  })),
  last: PropTypes.bool,
};

Skill.defaultProps = {
  data: [],
  last: false,
};

export default SimpleSkills;
