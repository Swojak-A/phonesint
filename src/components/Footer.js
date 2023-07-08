import React from "react";
import { useTranslation } from "react-i18next";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faOsi } from "@fortawesome/free-brands-svg-icons";

function Footer({ isSubmitted, validatedPhoneNumber }) {
  const { t, i18n } = useTranslation();
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
              <strong>Phonesint</strong> {t("footer_main_message")}
            </p>
            <p className="text-muted">
              <FontAwesomeIcon icon={faOsi} /> -{" "}
              {t("footer_open_source_message")}
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
            <h5>{t("footer_need_a_feature_q")}</h5>
            <p className="text-muted">{t("footer_need_a_feature_a")}</p>
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
