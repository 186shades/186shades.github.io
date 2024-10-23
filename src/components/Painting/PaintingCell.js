import React from 'react';
import PropTypes from 'prop-types';

const PaintingCell = ({ data }) => {
  const cellContainerStyle = {
    height: data.height,
  };

  return (
    <div className="cell-container" style={cellContainerStyle}>
      {/* eslint-disable-next-line react/no-danger */}
      <span dangerouslySetInnerHTML={{ __html: `<iframe src="${data.behanceLink}" class="responsive-iframe" allowfullscreen="" lazyload="" frameborder="0" allow="clipboard-write" refererpolicy="strict-origin-when-cross-origin"></iframe>` }} />
    </div>
  );
};

PaintingCell.propTypes = {
  data: PropTypes.shape({
    projectName: PropTypes.string,
    behanceLink: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
  }).isRequired,
};

export default PaintingCell;
