import React from "react";
import "../styles/Learn.css";

const topics = [
  {
    title: "What is Quantum Computing?",
    description:
      "Understand the basics of quantum computation, qubits, and how they differ from classical bits.",
    link: "#",
  },
  {
    title: "Quantum Superposition",
    description:
      "Explore the principle where qubits can exist in multiple states simultaneously.",
    link: "#",
  },
  {
    title: "Quantum Entanglement",
    description:
      "Learn how particles can be mysteriously linked across vast distances.",
    link: "#",
  },
  {
    title: "Quantum Gates",
    description:
      "Dive into the logic gates used in quantum circuits such as Hadamard and Pauli-X.",
    link: "#",
  },
  {
    title: "Quantum Algorithms",
    description:
      "Explore famous algorithms like Shor’s and Grover’s that revolutionize problem-solving.",
    link: "#",
  },
];

const Learn = () => {
  return (
    <div className="learn">
      <header className="learn-header">
        <h1>Learn Quantum Computing</h1>
        <p>
          Start your journey into the quantum world with curated lessons and
          interactive explanations.
        </p>
      </header>

      <section className="topic-grid">
        {topics.map((topic, index) => (
          <div key={index} className="topic-card">
            <h3>{topic.title}</h3>
            <p>{topic.description}</p>
            <a href={topic.link} className="learn-link">
              Start Topic
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Learn;
