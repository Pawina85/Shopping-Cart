import { Button, Col, Container, Row } from "react-bootstrap";
import "./Home.css";

export function Home() {
  return (
    <section className="hero-store">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="store-title">Your Favorite Products, Delivered Fast.</h1>
            <p className="store-subtext">
              Shop electronics, fashion, home goods, and more — all in one place.
            </p>

            <div className="hero-buttons">
              <Button href="/store" size="lg" className="btn-primary-store">
                Shop Now
              </Button>
              <Button href="/about" size="lg" variant="outline-light">
                Learn More
              </Button>
            </div>
          </Col>

         
        </Row>
      </Container>
    </section>
  );
}
