import React from 'react';
import Main from '../layouts/Main';
import data from '../data/paintings';
import PaintingCell from '../components/Painting/PaintingCell';

const Paintings = () => (
  <Main
    title="Paintings"
    description="My paintings"
    fullPage
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2>Paintings</h2>
        </div>
      </header>
      <div className="paintingContainer">
        {data.map((painting) => (
          <PaintingCell
            data={painting}
            key={painting.projectName}
          />
        ))}
      </div>
      <div />
    </article>
  </Main>
);

export default Paintings;
