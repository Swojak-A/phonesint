import React from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import LanguageSwitcher from "./LanguageSwitcher";

function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Phonesint</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <LanguageSwitcher />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
