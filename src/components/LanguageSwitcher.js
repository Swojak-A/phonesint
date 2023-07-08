import React from "react";
import { useTranslation } from "react-i18next";

import { Dropdown } from "react-bootstrap";

import FlagIcon from "./FlagIcon";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
        {i18n.language === "en" ? "English" : "Polski"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleLanguageChange("en")}>
          <FlagIcon code={"gb"} /> English
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleLanguageChange("pl")}>
          <FlagIcon code={"pl"} /> Polski
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageSwitcher;
