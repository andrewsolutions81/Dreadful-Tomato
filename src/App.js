import React, { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing.jsx'
import Main from './pages/Main.jsx'
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/main" element={<Main />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
