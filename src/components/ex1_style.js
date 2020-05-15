import React from "react";
import "./styles.css";

export default function ex1_style() {
  const styles = {
    container: { backgroundColor: "#E0BBE4", height: 200 },
  };

  return (
    <div>
      {/* inline style */}
      <div style={styles.container}>
        <h2>Style Example</h2>
      </div>
      {/* class style */}
      <div className="root">
        <h2>import from css file</h2>
      </div>
    </div>
  );
}
