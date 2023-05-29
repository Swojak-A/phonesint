import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import SubmissionMessage from './SubmissionMessage';


function Header() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [inputPhoneNumberValue, setInputPhoneNumberValue] = useState('');
    const [submittedPhoneNumberValue, setSubmittedPhoneNumberValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitted(true);
        setSubmittedPhoneNumberValue(inputPhoneNumberValue);
    }

    const handleInputChange = (event) => {
        setInputPhoneNumberValue(event.target.value);   
    }

    return (
      <Container className="my-4">
        <Row>
          <Col>
            <h2 className="mb-3">Generate Google searches related to specific phone number:</h2>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col sm={6}>
                        <Form.Group controlId="formBasicSearch">
                        <Form.Control type="search" placeholder="Enter phone number..." value={inputPhoneNumberValue} onChange={handleInputChange}/>
                        </Form.Group>
                    </Col>
                    <Col sm={2}>
                        <Button variant="primary" type="submit" className="w-100">
                        Generate
                        </Button>
                    </Col>
                </Row>
            </Form>
            <Row>
                <Col>
                    {isSubmitted && <SubmissionMessage submittedValue={submittedPhoneNumberValue} />}
                </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }

  export default Header;
