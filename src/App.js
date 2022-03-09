import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from 'pages/Homepage';
import LoadingSpinner from 'components/layout/LoadingSpinner';
import { lazyDelayed } from 'utils/CustomFunctions';

import './App.scss';

const WebDesign = lazyDelayed(import('pages/WebDesign'));
const AppDesign = lazyDelayed(import('pages/AppDesign'));
const GraphicDesign = lazyDelayed(import('pages/GraphicDesign'));
const About = lazyDelayed(import('pages/About'));
const Locations = lazyDelayed(import('pages/Locations'));
const Contact = lazyDelayed(import('pages/Contact'));
const DesignSystem = lazyDelayed(import('pages/DesignSystem'));

function App() {

  return (
    <div className="App">
      {/* <LoadingSpinner /> */}
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/web-design" element={<WebDesign />} />
          <Route path="/app-design" element={<AppDesign />} />
          <Route path="/graphic-design" element={<GraphicDesign />} />
          <Route path="/about" element={<About />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/design-system" element={<DesignSystem />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
