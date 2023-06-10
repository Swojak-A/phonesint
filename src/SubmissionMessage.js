import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SubmissionMessage({ submittedValue }) {
  return (
    <Row>
      <Col>
        <p className="mt-3">Good job! Your input was: {submittedValue}</p>
      </Col>
    </Row>
  );
}

export default SubmissionMessage;
