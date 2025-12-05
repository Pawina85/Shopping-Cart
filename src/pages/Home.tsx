import Section from "../components/layout/Section";
import "./Home.css";

export function Home() {
  return (
    <Section className="hero-cream">
      <div className="hero-layout">

        {/* LEFT SIDE — TEXT */}
        <div className="hero-text">
          <h1 className="hero-title">
            Your Favorite Products, Delivered Fast.
          </h1>

          <p className="hero-subtext">
            Shop electronics, fashion, home goods, and more — all in one place.
            Simple shopping, secure checkout, and fast delivery.
          </p>

          <div className="hero-buttons">
            <a href="/store" className="btn-shop">Shop Now</a>
            <a href="/about" className="btn-learn">Learn More</a>
          </div>
        </div>

        {/* RIGHT SIDE — COLLAGE */}
        <div className="hero-collage">
          <div className="hero-card card-1">
            <img src="/imgs/home1.png" alt="Hero 1" />
          </div>

          <div className="hero-card card-2">
            <img src="/imgs/home2.png" alt="Hero 2" />
          </div>

          <div className="hero-card card-3">
            <img src="/imgs/home3.png" alt="Hero 3" />
          </div>
        </div>
      </div>
    </Section>
  );
}
