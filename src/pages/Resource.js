import React from "react";
import "../styles/Resource.css";

const resources = [
  {
    title: "Qiskit by IBM",
    description:
      "A powerful open-source SDK for working with quantum computers using Python.",
    link: "https://qiskit.org",
  },
  {
    title: "Quantum Country",
    description:
      "Interactive essays that help you remember what you read, focused on quantum computing.",
    link: "https://quantum.country",
  },
  {
    title: "Microsoft Quantum Docs",
    description:
      "Official documentation for Microsoft's Quantum Development Kit and Q# language.",
    link: "https://learn.microsoft.com/en-us/azure/quantum/",
  },
  {
    title: "Quantum Computing for the Very Curious",
    description: "A simple and highly visual explanation of quantum computing.",
    link: "https://quantum.country/qcvc",
  },
  {
    title: "Quantum Computing Playground",
    description:
      "A WebGL-based quantum simulator in your browser with a visual circuit editor.",
    link: "https://quantum-computing.ibm.com/simulator",
  },
];

const Resource = () => {
  return (
    <div className="resource-page">
      <header className="resource-header">
        <h1>Quantum Resources</h1>
        <p>
          Explore tools, tutorials, and documentation to dive deeper into the
          world of quantum computing.
        </p>
      </header>

      <section className="resource-grid">
        {resources.map((res, index) => (
          <div key={index} className="resource-card">
            <h3>{res.title}</h3>
            <p>{res.description}</p>
            <a
              href={res.link}
              target="_blank"
              rel="noopener noreferrer"
              className="resource-link"
            >
              Visit
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Resource;
