import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function SubmissionMessage({ feedbackMessage }) {
  return (
    <Row className='submission-message'>
      <Col>
        <p className="mt-3">{feedbackMessage}</p>
      </Col>
    </Row>
  );
}

export default SubmissionMessage;
