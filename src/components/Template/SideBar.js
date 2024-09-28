import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Sharvari Deshmukh</h2>
        <p><a href="mailto:sharvarisd18@gmail.com">sharvarisd18@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        An adept software engineer skilled at architecting scalable systems &
        developing intelligent ML models. Experienced in optimizing fintech
        platforms & streamlining low-latency applications. Driven to implement
        impactful AI-driven technology through creative problem-solving.
      </p>
    </section>

    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;
