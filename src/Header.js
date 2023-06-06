import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

import FlagIcon from './FlagIcon';

import SubmissionMessage from './SubmissionMessage';

import countryCodes from './countryCodes';
import { validatePhoneNumber } from './phoneNumberUtils';


function Header({ isSubmitted, setIsSubmitted, setValidatedPhoneNumber, selectedCountryCode, setSelectedCountryCode })  {
  const [inputPhoneNumberValue, setInputPhoneNumberValue] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  
  console.log('Header');
  console.log(countryCodes);

  const handleSubmit = (event) => {
      event.preventDefault();
      const { isValid, message, phoneNumber } = validatePhoneNumber(inputPhoneNumberValue, selectedCountryCode);
      setIsSubmitted(true);
      if (isValid) {
        setFeedbackMessage(message);
        setValidatedPhoneNumber(phoneNumber);
      } else {
        setFeedbackMessage(message);
      }
  }

  const handleInputChange = (event) => {
      setInputPhoneNumberValue(event.target.value);   
  }

  return (
    <Container className="my-4">
      <Row>
        <Col md={12}>
          <h2 className="mb-3">Generate Google searches related to specific phone number:</h2>
          <Form onSubmit={handleSubmit}>
              <Row>
                  <Col sm={1}></Col>
                  <Col sm={1}>
                    <Dropdown onSelect={setSelectedCountryCode}>
                      <Dropdown.Toggle variant="success" id="dropdown-basic" size="lg" className="w-100">
                        {selectedCountryCode}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {countryCodes.map(code => 
                          <Dropdown.Item eventKey={code} key={code}>
                            <FlagIcon code={code.toLowerCase()}/> {code}
                          </Dropdown.Item>
                        )}
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                  <Col sm={7}>
                      <Form.Group controlId="formBasicSearch">
                      <Form.Control type="search" placeholder="Enter phone number..." value={inputPhoneNumberValue} onChange={handleInputChange} size="lg"/>
                      </Form.Group>
                  </Col>
                  <Col sm={2}>
                      <Button variant="primary" type="submit" size="lg" className="w-100">
                        Generate
                      </Button>
                  </Col>
                  <Col sm={1}></Col>
              </Row>
          </Form>
          <Row>
              <Col>
                  {isSubmitted && <SubmissionMessage feedbackMessage={feedbackMessage} />}
              </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

  export default Header;
