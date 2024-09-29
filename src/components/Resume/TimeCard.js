import React from 'react';
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import PropTypes from 'prop-types';

const JobCard = ({
  date,
  title,
  description,
  url,
}) => (
  <TimelineItem>
    <TimelineOppositeContent>
      <div className="eventTitle">{date}</div>
    </TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineDot />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>
      <a href={url}>
        <div className="eventTitle">{title}</div>
      </a>
      <div className="eventDescription">{description}</div>
    </TimelineContent>
  </TimelineItem>
);

JobCard.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
};

JobCard.defaultProps = {
  date: '',
  title: '',
  description: '',
  url: '',
};

export default JobCard;
