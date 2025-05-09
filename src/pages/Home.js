import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to QuantumTech</h1>
          <p>
            Explore the future of computing with quantum mechanics. Learn,
            simulate, and discover.
          </p>
          <a href="/learn" className="cta-button">
            Start Learning
          </a>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights">
        <h2>Why QuantumTech?</h2>
        <div className="cards">
          <div className="card">
            <h3>Interactive Learning</h3>
            <p>
              Understand complex quantum concepts with animations and
              visualizations.
            </p>
          </div>
          <div className="card">
            <h3>Live Simulations</h3>
            <p>
              Experiment with qubits, gates, and circuits in a virtual
              simulator.
            </p>
          </div>
          <div className="card">
            <h3>Latest Resources</h3>
            <p>
              Access curated articles, papers, and tools from the quantum world.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <h2>Stay Updated</h2>
        <p>
          Join our newsletter to get the latest in quantum computing delivered
          to your inbox.
        </p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 QuantumTech. All rights reserved.</p>
        <div className="footer-links">
          <a href="/resource">Resources</a>
          <a href="/learn">Learn</a>
          <a href="/simulation">Simulation</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
