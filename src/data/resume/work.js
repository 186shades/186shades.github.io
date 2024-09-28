/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Grab',
    position: 'Software Engineer',
    url: 'https://www.grab.com/sg/',
    startDate: '2022-03-01',
    endDate: '2023-06-30',
    summary: '',
    highlights: [
      'Designed & implemented Instant KYC pipeline for Singapore NRIC card users slashing onboarding time from 3 days to less than 2 min',
      'Engineered a modular workflow engine for seamless integration with Indonesian credit bureaus & telco providers for Loan Origination System.',
      'Empowered event-driven automation of tasks across multiple compliance use cases by architecting a sophisticated scheduler library in Golang.',
    ],
  },
  {
    name: 'Paytm Money',
    position: 'Software Engineer',
    url: 'https://www.paytmmoney.com/',
    startDate: '2021-01-01',
    endDate: '2021-10-01',
    summary: '',
    highlights: [
      'Developed numerous distributed & scalable features within core payments service, effectively managing 50,000 transactions per day across diverse financial products including Mutual Funds, Equities, NPS, & EdTech.',
      'Improved fault-tolerance of critical systems by introducing circuit breaker pattern via Hystrix helping reach 99.9% system availability.',
      'Upgraded Mutual Funds end-to-end payment flow, reducing API latencies by 10x with DB query enhancements.',
    ],
  },
  {
    name: 'Goldman Sachs',
    position: 'Analyst',
    url: 'https://www.goldmansachs.com/',
    startDate: '2020-05-10',
    endDate: '2020-07-31',
    summary: '',
    highlights: [
      'Part of the Systematic Market Making - Execution Services team in FICC E-Trading division which worked with electronic market making and algorithmic execution to ensure optimal market access for clients.',
    ],
  },
  {
    name: 'Citibank',
    position: 'Technology Analyst',
    url: 'https://www.citigroup.com/global/businesses/markets',
    startDate: '2018-08-01',
    endDate: '2020-05-01',
    summary: '',
    highlights: [
      'Built low latency Java applications using (openHFT) Chronicle based framework achieving microsecond latency for in-house HFT applications connecting HKFE.',
      'Developed a dynamic PDF generator application leveraging Spring Boot & Microservices architecture to automate client onboarding processes.',
      'Improved development process by introducing Agile & CI-CD practices.',
    ],
  },
  {
    name: 'Intel',
    position: 'Firmware Intern',
    url: 'https://www.intel.com/content/www/us/en/homepage.html',
    startDate: '2017-01-01',
    endDate: '2017-07-31',
    summary: '',
    highlights: [
      'Optimized equalizer module performance by implementing fixed point arithmetic based API for ARC HS47D processor resulting in 3x efficiency gain.',
    ],
  },
];

export default work;
