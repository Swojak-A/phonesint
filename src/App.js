import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Header from './Header';
import ResultCards from './ResultCards';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validatedPhoneNumber, setValidatedPhoneNumber] = useState('');

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        </Container>
      </Navbar>

      <Header
        isSubmitted={isSubmitted}
        setIsSubmitted={setIsSubmitted}
        setValidatedPhoneNumber={setValidatedPhoneNumber}
      />

      { isSubmitted && <ResultCards phoneNumber={validatedPhoneNumber}/> }
    </>
  );
}

export default App;
