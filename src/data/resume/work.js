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

const lifeEvents = [
  {
    date: 'Jun 2024',
    title: 'Software Engineer Intern @ Marqeta, Oakland',
    description: '',
    url: 'https://www.marqeta.com/',
  },
  {
    date: 'Mar 2023',
    title: 'Graduate Student Researcher @ ARCLab, UC San Diego',
    description: '',
    url: 'https://ucsdarclab.com/',
  },
  {
    date: 'Sept 2023',
    title: 'M.S. in Electrical and Computer Engineering (Signal & Image Processing) @ UC San Diego',
    description: '',
    url: 'https://www.ece.ucsd.edu/faculty-research/ece-research-areas/signal-image-processing',
  },
  {
    date: 'Mar 2022',
    title: 'Software Engineer @ Grab, Bangalore',
    description: '',
    url: 'https://www.grab.com/sg/',
  },
  {
    date: 'Jan 2021',
    title: 'Software Engineer @ Paytm Money, Bangalore',
    description: '',
    url: 'https://www.paytmmoney.com/',
  },
  {
    date: 'May 2020',
    title: 'Analyst (Software Development) @ Goldman Sachs, Bangalore',
    description: '',
    url: 'https://www.goldmansachs.com/',
  },
  {
    date: 'Aug 2018',
    title: 'Analyst (Software Development) @ Citibank, Pune',
    description: '',
    url: 'https://www.citi.com/',
  },
  {
    date: 'Dec 2017',
    title: 'Graduated from BITS Pilani',
    description: '',
    url: 'https://www.bits-pilani.ac.in/academics/integrated-first-degree/be-electronics-and-instrumentation/',
  },
  {
    date: 'Jan 2017',
    title: 'Firmware Intern @ Intel, Bangalore',
    description: 'https://www.intel.in/content/www/in/en/homepage.html',
    url: '',
  },
  {
    date: 'Dec 2015',
    title: 'Intern @ Texas Instruments Center for Embedded Product Development, New Delhi',
    description: '',
    url: '',
  },
  {
    date: 'May 2014',
    title: 'Intern @ Goa Shipyard Limited, Goa',
    description: '',
    url: 'https://goashipyard.in/',
  },
  {
    date: 'Aug 2013',
    title: 'B.E in Eletronics and Instrumentation Engineering @ BITS Pilani',
    description: '',
    url: 'https://www.bits-pilani.ac.in/academics/integrated-first-degree/be-electronics-and-instrumentation/',
  },
];

export default lifeEvents;
