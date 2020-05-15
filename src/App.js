import React, { useState } from "react";
import "./App.css";
import CounterClassComponent from "./CounterClassComponent";
import CounterFunctionalComponent from "./CounterFunctionComponent";
import Ex1Style from "./components/ex1_style";
import Ex2Image from "./components/ex2_image";
import Ex3Props from "./components/ex3_props";

function App() {
  const [count, setCount] = useState(10);

  return (
    <div className="App">
      <h2> Count: {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        ADD
      </button>
      <Ex2Image />
      <CounterClassComponent />
      <CounterFunctionalComponent />
      <Ex1Style />
      <Ex2Image image="/images/IMG_0094.JPG" />
      <Ex3Props count="3" />
      <Ex3Props count={3} color="red" />
    </div>
  );
}

export default App;
