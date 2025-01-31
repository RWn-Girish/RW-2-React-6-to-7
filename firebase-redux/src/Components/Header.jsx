import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <>
      <Container>
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/">Navbar with text</Navbar.Brand>
            <Navbar.Toggle />
              <Nav.Link href="/add">Add Book</Nav.Link>
              {/* <Nav.Link href="/signin">Login</Nav.Link> */}
          </Container>
        </Navbar>
      </Container>
    </>
  );
}

export default Header;
