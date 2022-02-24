import { Routes, Route } from 'react-router-dom';
import Homepage from 'pages/Homepage';
import DesignSystem from 'pages/DesignSystem';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/design-system" element={<DesignSystem />} />
      </Routes>
    </div>
  );
}

export default App;
