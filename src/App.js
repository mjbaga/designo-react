import { Routes, Route } from 'react-router-dom';
import Homepage from 'pages/Homepage';
import WebDesign from 'pages/WebDesign';
import DesignSystem from 'pages/DesignSystem';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/web-design" element={<WebDesign />} />
        <Route path="/design-system" element={<DesignSystem />} />
      </Routes>
    </div>
  );
}

export default App;
