import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from 'pages/Homepage';
import LoadingSpinner from 'components/layout/LoadingSpinner';
// import { lazyDelayed } from 'utils/CustomFunctions';

import './App.scss';

// Importing one by one cos can't make lazyDelayed function work
const WebDesign = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('pages/WebDesign')), 1000);
  });
});

const AppDesign = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('pages/AppDesign')), 1000);
  });
});

const GraphicDesign = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('pages/GraphicDesign')), 1000);
  });
});

const About = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('pages/About')), 1000);
  });
});

const Locations = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('pages/Locations')), 1000);
  });
});

const Contact = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('pages/Contact')), 1000);
  });
});

const DesignSystem = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('pages/DesignSystem')), 1000);
  });
});

// const WebDesign = lazy(() => import('pages/WebDesign'));
// const AppDesign = lazy(() => import('pages/AppDesign'));
// const GraphicDesign = lazy(() => import('pages/GraphicDesign'));
// const About = lazy(() => import('pages/About'));
// const Locations = lazy(() => import('pages/Locations'));
// const Contact = lazy(() => import('pages/Contact'));
// const DesignSystem = lazy(() => import('pages/DesignSystem'));

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
