import log from './log';
import notes from './notes';
import questions from './questions';

const sections = [
  {
    key: 'log',
    label: 'Log',
    tagline: 'A quick log of learnings',
    dateField: 'date',
    dateLabel: '',
    data: log,
  },
  {
    key: 'notes',
    label: 'Notes',
    tagline: 'Deeper dives, connecting patterns',
    dateField: 'updated',
    dateLabel: 'Updated',
    data: notes,
  },
  {
    key: 'questions',
    label: 'Questions',
    tagline: 'Not yet researched or understood',
    dateField: 'opened',
    dateLabel: 'Asked',
    data: questions,
  },
];

export default sections;
