import React from 'react';
import PropTypes from 'prop-types';

import { Timeline } from '@mui/lab';
import {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import JobCard from './TimeCard';

const Experience = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="experience" />
    <div className="title">
      <h3>Experience</h3>
    </div>
    <div className="jobTimeline">
      <Timeline
        position="right"
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
        }}
      >
        {data.map((event) => (
          <JobCard
            date={event.date}
            title={event.title}
            description={event.description}
            url={event.url}
          />
        ))}
      </Timeline>
    </div>
  </div>
);

Experience.propTypes = {
  data: PropTypes.arrayOf(PropTypes.exact({
    date: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
  })),
};

Experience.defaultProps = {
  data: [],
};

export default Experience;
