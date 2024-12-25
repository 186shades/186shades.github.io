import React from 'react';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => (
  <Main
    title="Projects"
    description="Learn about Sharvari's projects."
    fullPage
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>Recent Projects</h2>
        </div>
      </header>
      <div className="projectContainer">
        {data.map((project) => (
          <Cell
            data={project}
            key={project.title}
          />
        ))}
      </div>
    </article>
  </Main>
);

export default Projects;
