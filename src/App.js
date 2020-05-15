import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CounterClassComponent from "./CounterClassComponent";
import CounterFunctionalComponent from "./CounterFunctionComponent";
import Ex1style from "./components/ex1_style";
import Ex2style from "./components/ex2_image";

function App() {
  return (
    <div className="App">
      <Ex2style />
      <CounterClassComponent />
      <CounterFunctionalComponent />
      <Ex1style />
    </div>
  );
}

export default App;
