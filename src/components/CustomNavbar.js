import React from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Phonsint</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
