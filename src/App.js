import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterClassComponent from './CounterClassComponent'
import CounterFunctionalComponent from './CounterFunctionComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bello React
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <CounterClassComponent />
        <CounterFunctionalComponent />
      </header>
    </div>
  );
}

export default App;
