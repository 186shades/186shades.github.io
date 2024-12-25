import React from 'react';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description="A personal website for Sharvari Deshmukh"
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>About me</h2>
        </div>
      </header>
      <p>
        Hi there!
      </p>

      <p>
        I&apos;m Sharvari. I&apos;m a Master&apos;s student at UC San Diego
        studying ECE(Signal & Image processing),
        well, mostly a lot of cool computer vision techniques and
        ML algorithms.
      </p>

      <p>
        Over the last decade, I&apos;ve tried my hand at just about everything.
        From hands-on electronics projects during my undergrad at BITS Pilani,
        to backend software solutions at top fintech companies, and now a keen
        interest in medical imaging, it&apos;s been a wild journey. I like to go
        breadth-first, you can say. Now that I&apos;m zeroing in on a niche,
        I&apos;m heading down the rabbit hole of wavelets, diffusion models,
        optical flow & everything that lets a machine see what we can-or can&apos;t-see.
      </p>
      <p>
        I&apos;m also a part-time artist which fuels the passion for
        visual medium. Or maybe it&apos;s the other way around! I reach for acrylics when
        I&apos;m short on time, watercolors when I&apos;m feeling emotional, origami when I need
        a creative outlet without the mess, and badminton is my go-to cure for restlessness.
        I love my movies animated and my books riddled with mystery. And I love science
        fiction, in all mediums.
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
