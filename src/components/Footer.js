import React from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faOsi } from "@fortawesome/free-brands-svg-icons";

function Footer({ isSubmitted, validatedPhoneNumber }) {
  const footerStyle = {
    position: isSubmitted && validatedPhoneNumber ? "static" : "fixed",
    bottom: 0,
    padding: "0.5rem 0",
  };

  return (
    <Container fluid id="footer" className="text-bg-dark" style={footerStyle}>
      <Container className="footer small">
        <Row className="mt-3 mb-3">
          <Col md={4}>
            <h5>Phonesint</h5>
            <p className="text-muted">
              <strong>Phonesint</strong> is a project aimed on creating free
              tools to help OSInt operations involving phone number
              investigations.
            </p>
            <p className="text-muted">
              <FontAwesomeIcon icon={faOsi} /> - open source project.
            </p>
          </Col>
          <Col md={4} className="text-center">
            <a
              href="https://github.com/Swojak-A/phonesint"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </Col>
          <Col md={4} className="text-end">
            <h5>Need a feature?</h5>
            <p className="text-muted">
              Inform us on GitHub and maybe we will implement it!
            </p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col md={12}>
            <hr />
            <p className="small text-muted">SwA © 2023</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Footer;
