import React, { useState } from "react";
import axios from "axios";
import "../styles/Simulation.css";

const Simulation = () => {
  const [state, setState] = useState("0");
  const [history, setHistory] = useState([]);

  const recordState = async (newState) => {
    const timestamp = new Date().toISOString();
    setHistory((prev) => [...prev, { state: newState, timestamp }]);
    await axios.post("http://localhost:5000/api/record", {
      state: newState,
      timestamp,
    });
  };

  const applyHadamard = () => {
    const newState = "Superposition (|0⟩ + |1⟩)/√2";
    setState(newState);
    recordState(newState);
  };

  const applyPauliX = () => {
    const newState = state === "0" ? "1" : "0";
    setState(newState);
    recordState(newState);
  };

  const resetQubit = () => {
    const newState = "0";
    setState(newState);
    recordState(newState);
  };

  return (
    <div className="simulation">
      <header className="simulation-header">
        <h1>Quantum Circuit Simulator</h1>
        <p>
          Interact with a single qubit using quantum gates like Hadamard and
          Pauli-X.
        </p>
      </header>

      <section className="simulator-box">
        <h2>Qubit State:</h2>
        <div className="qubit-state">{state}</div>

        <div className="gate-buttons">
          <button onClick={applyHadamard}>Hadamard Gate (H)</button>
          <button onClick={applyPauliX}>Pauli-X Gate (X)</button>
          <button onClick={resetQubit}>Reset Qubit</button>
        </div>

        <div className="state-history">
          <h3>State History:</h3>
          <ul>
            {history.map((entry, index) => (
              <li key={index}>
                {entry.timestamp} → {entry.state}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Simulation;
