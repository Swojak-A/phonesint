import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "flag-icon-css/css/flag-icon.min.css";

import React, { useState } from "react";

import CustomNavbar from "./components/CustomNavbar";
import Header from "./components/Header";
import ResultCards from "./components/ResultCards";
import Footer from "./components/Footer";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validatedPhoneNumber, setValidatedPhoneNumber] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("PL");

  return (
    <>
      <CustomNavbar />

      <Header
        isSubmitted={isSubmitted}
        setIsSubmitted={setIsSubmitted}
        setValidatedPhoneNumber={setValidatedPhoneNumber}
        selectedCountryCode={selectedCountryCode}
        setSelectedCountryCode={setSelectedCountryCode}
      />

      {isSubmitted && validatedPhoneNumber && (
        <ResultCards
          phoneNumber={validatedPhoneNumber}
          countryCode={selectedCountryCode}
        />
      )}

      <Footer
        isSubmitted={isSubmitted}
        validatedPhoneNumber={validatedPhoneNumber}
      />
    </>
  );
}

export default App;
