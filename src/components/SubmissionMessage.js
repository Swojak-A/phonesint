import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

function SubmissionMessage({ feedbackMessage, feedbackVariant }) {
  return (
    <Row className='submission-message'>
      <Col>
      <Alert key={feedbackVariant} variant={feedbackVariant}>
          { feedbackMessage }
        </Alert>
      </Col>
    </Row>
  );
}

export default SubmissionMessage;
