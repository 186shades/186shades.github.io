import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Paintings from './pages/Painting';
import Books from './pages/Books';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import './static/css/main.scss'; // All of our styles

const { PUBLIC_URL } = process.env;

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/books" element={<Books />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/gallery" element={<Paintings />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
