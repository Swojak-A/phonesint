import React from "react";

import Dropdown from 'react-bootstrap/Dropdown';

import countryCodes from '../consts/countryCodes';
import FlagIcon from './FlagIcon';


function FlagDropdown({ setSelectedCountryCode, selectedCountryCode }) {
  return (
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
  );
}

export default FlagDropdown;

