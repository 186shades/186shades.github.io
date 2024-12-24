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

// NOTE: sections are displayed in order defined.
const sections = {
  // Education: () => <Education data={degrees} />,
  Experience: () => <Experience data={lifeEvents} />,
  // Skills: () => <Skills skills={skills} categories={categories} />,
  Skills: () => <SimpleSkills data={skills} />,
  Courses: () => <Courses data={courses} />,
};
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
            <h2>Resume</h2>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <a href={`${PUBLIC_URL}/documents/Sharvari_Fall24_ML.pdf`} download="Sharvari_Deshmukh_UCSD_Resume.pdf">
              <FontAwesomeIcon color="#ff5353" size="xl" icon={faFilePdf} />
            </a>
          </div>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </Main>
);

export default Resume;
