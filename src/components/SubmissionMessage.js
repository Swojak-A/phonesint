import React, { useState, useEffect } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Fade from "react-bootstrap/Fade";

function SubmissionMessage({
  feedbackMessageHeader,
  feedbackMessage,
  feedbackVariant,
}) {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(false);

    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 200);

    // Clean up function to clear the timeout in case the component unmounts
    return () => clearTimeout(timer);
  }, [feedbackMessage]);

  return (
    <Fade in={fadeIn}>
      <Row className="submission-message">
        <Col>
          <Alert key={feedbackVariant} variant={feedbackVariant}>
            <Alert.Heading>{feedbackMessageHeader}</Alert.Heading>
            <hr />
            <p className="mb-0">{feedbackMessage}</p>
          </Alert>
        </Col>
      </Row>
    </Fade>
  );
}

export default SubmissionMessage;
