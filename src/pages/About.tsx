import Section from "../components/layout/Section";
import "./About.css";

export function About() {
  return (
    <Section className="about-wrapper">
      
      {/* Header */}
      <div className="about-header">
        <h1 className="about-title">About Our Store</h1>
        <p className="about-subtitle">
          We're dedicated to making shopping simple, beautiful, and accessible.
          High-quality products, fair pricing, and fast delivery — all in one place.
        </p>
      </div>

      {/* Story + Mission */}
      <div className="about-two-col">
        
        <div>
          <h2 className="about-block-title">Our Story</h2>
          <p className="about-block-text">
            What began as a small passion project has grown into a modern
            shopping destination. We curate products carefully — prioritizing 
            quality, usefulness, and timeless design.
          </p>
        </div>

        <div>
          <h2 className="about-block-title">Our Mission</h2>
          <p className="about-block-text">
            We believe shopping should feel effortless. Our mission is to offer 
            trusted brands, fast delivery, and a delightful experience across 
            every device and every order.
          </p>
        </div>

      </div>

      {/* Features Row */}
      <div className="about-features-row">

        <div className="about-feature-card">
          <div className="feature-icon">⚡</div>
          <div className="feature-title">Fast Delivery</div>
          <div className="feature-text">
            Quick processing and reliable courier partners ensure your items 
            arrive when you need them.
          </div>
        </div>

        <div className="about-feature-card">
          <div className="feature-icon">🎁</div>
          <div className="feature-title">Quality First</div>
          <div className="feature-text">
            Every product in our store is hand-selected to meet high standards 
            of durability and design.
          </div>
        </div>

        <div className="about-feature-card">
          <div className="feature-icon">💬</div>
          <div className="feature-title">Friendly Support</div>
          <div className="feature-text">
            Whether you have a question or need help with an order — we’re here 
            and happy to assist.
          </div>
        </div>

      </div>

    </Section>
  );
}
