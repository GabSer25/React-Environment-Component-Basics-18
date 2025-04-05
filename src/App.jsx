// src/App.jsx

import React, { useState } from 'react'; // Needed for Counter - Interactive State
import Greeting from './components/Greeting'; // Custom Component
import viteLogo from '/vite.svg'; // Import Vite and React Logos
import reactLogo from './assets/react.svg'; // Make Sure File Exists
import './App.css'; // Optional: Styling

function App() {
  const [count, setCount] = useState(0); // Counter State

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        {/* Custom Component Renders Here */}
        <Greeting />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;