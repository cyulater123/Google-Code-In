import React from 'react';
import gci2 from './gci2.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={gci2} className="App-logo" alt="logo" />
        <p>
          Welcome to Google Code-In 2019
        </p>
        <a
          className="App-link"
          href="https://codein.withgoogle.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More Here
        </a>
      </header>
    </div>
  );
}

export default App;
