import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logOutAsync } from "../services/actions/auth.action";

function Header() {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.authReducer);
  const handleLogOut = () => {
    dispatch(logOutAsync());
  }
  return (
    <>
      <Container>
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/">Navbar with text</Navbar.Brand>
            <Navbar.Toggle />
              {user ? <Nav.Link href="/add">Add Book</Nav.Link> : ""}
              {!user ? <Nav.Link href="/login">Login</Nav.Link> : <Button onClick={handleLogOut}>LogOut</Button> }
          </Container>
        </Navbar>
      </Container>
    </>
  );
}

export default Header;
