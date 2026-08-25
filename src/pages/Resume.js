import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons/faFilePdf';

import Main from '../layouts/Main';
import Experience from '../components/Resume/Experience';
import Courses from '../components/Resume/Courses';

import { skills } from '../data/resume/skills';
import courses from '../data/resume/courses';
import lifeEvents from '../data/resume/work';
import SimpleSkills from '../components/Resume/SimpleSkills';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const Resume = () => (
  <Main
    title="Resume"
    description="A personal website for Sharvari Deshmukh"
    fullPage
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <div className="resumeHeading">
            <h2>
              <a href={`${PUBLIC_URL}/documents/Sharvari_Deshmukh_SWE_AR.pdf`} download="Sharvari_Deshmukh_SWE_AR.pdf">
                Resume
              </a>
            </h2>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <a href={`${PUBLIC_URL}/documents/Sharvari_Deshmukh_SWE_AR.pdf`} download="Sharvari_Deshmukh_SWE_AR.pdf">
              <FontAwesomeIcon className="resume-icon" color="#ff5353" size="xl" icon={faFilePdf} />
            </a>
          </div>
        </div>
      </header>
      <Experience data={lifeEvents} />
      <div className="skills-courses-container">
        <SimpleSkills data={skills} />
        <Courses data={courses} />
      </div>
    </article>
  </Main>
);

export default Resume;
