import { Button, Col, Container, Row } from "react-bootstrap";

export function Home() {
    return (
    <Container className="py-5">
        <Row className="text-center mb-5">
            <Col>
            <h1 className="fw-bold">Welcome to Our Store</h1>
            <p className="text-muted fs-5">Find the best products here.</p>
            </Col>
            <Button href="/store">Shop Now</Button>   
        </Row>
    </Container>
    )
}