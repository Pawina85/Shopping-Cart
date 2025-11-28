import { Button, Container, Nav, Navbar as Navbars, NavLink} from "react-bootstrap";

export function Navbar() {
    return (
     <Navbars sticky="top" className="bg-white shadow-sm mb-3">
        <Container>
            <Nav className="me-auto">
                <Nav.Link to="/" as={NavLink}>
                Home
                </Nav.Link>

                <Nav.Link to="/store" as={NavLink}>
                Store
                </Nav.Link>
            
                <Nav.Link to="/about" as={NavLink}>
                About
                </Nav.Link>
            </Nav>
                        <Button  style={{ width: "3rem", height: "3rem", position: "relative" }} variant="outline-primary" className="rounded-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .485.379L2.89 5H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 14H4a.5.5 0 0 1-.491-.408L1.01 2H.5a.5.5 0 0 1-.5-.5zm3.14 4l1.25 6.5h7.22l1.25-6.5H3.14zM5.5 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                </svg>
                                <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" 
                                style={{ color: "white", width: "1.5rem", height: "1.5rem", position: "absolute", bottom: 0, right: 0,
                                transform: "translate(25%, 25%)"
                                }}>3</div>
                        </Button>
        </Container>
     </Navbars>
    )
}