import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';
import EmailLink from '../Contact/EmailLink';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me_v2.jpg`} alt="" />
      </Link>
      <header>
        <h2>Sharvari Deshmukh</h2>
        {/* <p><a href="mailto:sharvarisd18@gmail.com">sharvarisd18@gmail.com</a></p> */}
        <EmailLink messages={['sharvarisd18@gmail.com']} />
        <EmailLink messages={['shdeshmukh@ucsd.edu']} />
      </header>
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;
