import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'flag-icon-css/css/flag-icon.min.css';

import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Header from './components/Header';
import ResultCards from './components/ResultCards';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validatedPhoneNumber, setValidatedPhoneNumber] = useState('');
  const [selectedCountryCode, setSelectedCountryCode] = useState('PL');

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
        selectedCountryCode={selectedCountryCode}
        setSelectedCountryCode={setSelectedCountryCode}
      />

      { isSubmitted && validatedPhoneNumber && <ResultCards phoneNumber={validatedPhoneNumber} countryCode={selectedCountryCode}/> }
    </>
  );
}

export default App;
