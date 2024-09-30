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
        A software engineer skilled at architecting scalable systems &
        developing intelligent ML models. Experienced in optimizing fintech
        platforms & streamlining low-latency applications. Driven to implement
        impactful AI-driven technology through creative problem-solving.
      </p>

      {/* <p>
        My strong academic background, including a Master&apos;s degree in
        Electrical & Computer Engineering from UC San Diego and a
        Bachelor&apos;s degree in Electronics & Instrumentation from BITS
        Pilani, has equipped me with a comprehensive understanding of
        key areas such as Statistical Learning, Digital Image Processing,
        and Machine Learning. Throughout my career, I have consistently
        sought opportunities to leverage technology for real-world impact.
      </p>
      <p>
        At Grab, I played a pivotal role in designing and
        implementing an Instant KYC pipeline for Singapore NRIC card
        users, reducing onboarding time from 3 days to less than 2 minutes.
        Additionally, I engineered a modular workflow engine for seamless
        integration with Indonesian credit bureaus and telco providers
        for the Loan Origination System. Recognizing the importance
        of automation, I architected a sophisticated scheduler library
        in Golang, empowering event-driven automation across multiple
        compliance use cases. At PaytmMoney, I developed numerous
        distributed and scalable features within their core payments
        service, effectively managing 50,000 transactions per day across
        diverse financial products, including Mutual Funds, Equities,
        NPS, & EdTech. I also improved the fault-tolerance of critical
        systems by introducing the circuit breaker pattern via Hystrix,
        helping reach 99.9% system availability. Additionally, I
        upgraded the Mutual Funds end-to-end payment flow, reducing API
        latencies by 10x with DB query enhancements.
      </p>
      <p>
        At Citibank, I built low latency Java applications using the
        (openHFT) Chronicle based framework, achieving microsecond
        latency for in-house HFT applications connecting HKFE. I also
        developed a dynamic PDF generator application leveraging Spring
        Boot & Microservices architecture to automate client onboarding
        processes. Further, I improved the development process by introducing
        Agile & CI-CD practices. Beyond my professional endeavors, I actively
        engage in projects that showcase my passion for innovation. In my
        project on Dust-Fragment classification at the UCSD ARC Lab, I am
        investigating recent representation learning algorithms to extract
        relevant features from ureteroscopy videos, with the aim of automating
        laser settings for lithotripsy procedures based on spatiotemporal
        detection of kidney stone fragments and dust. I also explored
        Histopathology image classification for cancer diagnosis, where I conducted
        a comparative analysis between CNNs and Vision Transformers,
        achieving 99% accuracy. In my project on EEG-Based Sleep Analysis,
        I designed elliptic filters for EEG signal processing, enabling the
        detection of sleep stages based on distinct brainwave frequency
        bands. My multifaceted skill set, combined with my passion for
        leveraging technology for positive change, establishes me as a
        driven software engineer.
      </p> */}
    </article>
  </Main>
);

export default Index;
