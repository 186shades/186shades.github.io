import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description="A personal website for Sharvari Deshmukh"
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About me</Link></h2>
        </div>
      </header>
      <p>
        Hi there!
      </p>

      <p>
        I&apos;m Sharvari. I&apos;m a Master&apos;s student at UCSD
        studying ECE(Signal & Image processing),
        well, mostly a lot of cool computer vision techniques and
        ML algorithms.
      </p>

      <p>
        In the last 10 years, I&apos;ve managed to dabble in everything
        I can get my hands on. Starting from multiple hands-on electronics
        projects in my undergrads at BITS Pilani to backend software solutions
        at top finTech companies to my current fascination with medical
        imaging has been one hell of a rollercoaster ride. I like to go
        breadth-first, you can say. Now that I&apos;m zeroing in on my niche,
        I&apos;m heading down the rabbit hole of wavelets, diffusion models,
        optical flow and everything that lets a machine see what we can and can&apos;t see.
      </p>
      <p>
        I&apos;m a part-time artist and that fuels this passion for the
        visual medium. Or is it the other way around? Huh! I prefer acrylics
        when I&apos;m in a hurry and watercolors when I&apos;m emotional.
        I do origami when I get the itch to do something with my hands but
        don&apos;t want to clean up the mess and play badminton when my legs
        are restless too. I love my movies animated and my books riddled with
        mystery. And I love science fiction, in all mediums.
      </p>
      <p>
        If any of this spiked an impulse response in your system,
        don&apos;t hesitate to reach out! I&apos;m always up for
        collaborations and a cup of coffee!
      </p>
      <p>
        Thank you for visiting :)
      </p>
    </article>
  </Main>
);

export default Index;
