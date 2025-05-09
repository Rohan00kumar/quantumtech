import React, { useState } from "react";
import "../styles/Simulation.css";

const Simulation = () => {
  const [state, setState] = useState("0"); // Classical simplification: '0' or '1' or 'Superposition'

  const applyHadamard = () => {
    setState("Superposition (|0⟩ + |1⟩)/√2");
  };

  const applyPauliX = () => {
    setState((prev) => (prev === "0" ? "1" : "0"));
  };

  const resetQubit = () => {
    setState("0");
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
      </section>
    </div>
  );
};

export default Simulation;
