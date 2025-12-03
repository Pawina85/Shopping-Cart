import { Button, Col, Container, Row } from "react-bootstrap";
import "./Home.css";

export function Home() {
  return (
    <section className="hero-store">
      <Container>
        <Row className="align-items-center hero-row">
          {/* LEFT: text */}
          <Col md={6}>
            <h1 className="store-title">
              Your Favorite Products, <br />
              Delivered Fast.
            </h1>

            <p className="store-subtext">
              Shop electronics, fashion, home goods, and more — all in one
              place. Simple shopping, secure checkout, and fast delivery.
            </p>

            <div className="hero-buttons">
              <Button href="/store" size="lg" className="btn-primary-store">
                Shop Now
              </Button>

              <Button href="/about" size="lg" className="btn-learn">
                Learn More
              </Button>
            </div>
          </Col>

          
          <Col md={6} className="hero-image-wrap">
            <img
              src="/imgs/heropic.jpg"
              alt="Happy people shopping online"
              className="hero-image"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
