import { Navbar, Nav, Container } from "react-bootstrap";

const NavigationLayouts = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">DEA COURSE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/albums">IMAGES</Nav.Link>
            <Nav.Link href="/posts">POSTS</Nav.Link>
            <Nav.Link href="*">Not Found</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationLayouts;
