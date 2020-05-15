import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterClassComponent from './CounterClassComponent'
import CounterFunctionalComponent from './CounterFunctionComponent';
import Ex1style from './components/ex1_style'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bello React
        </p>

        <CounterClassComponent />
        <CounterFunctionalComponent />
        <Ex1style />
      </header>
    </div>
  );
}

export default App;
