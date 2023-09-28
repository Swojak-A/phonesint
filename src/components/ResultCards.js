import React from "react";
import { useTranslation } from "react-i18next";

import Container from "react-bootstrap/Container";

import SingleCard from "./SingleCard";
import { generateFormats } from "../utils/phoneNumberUtils";
import { encodeGoogleSearchQuery } from "../utils/uriEncodingUtils";

function ResultCards({ phoneNumber, countryCode }) {
  const { t, i18n } = useTranslation();
  const phoneNumberFormats = generateFormats(phoneNumber, countryCode);
  const phoneNumberFormatsFlat = phoneNumberFormats.reduce(
    (acc, section) => acc.concat(section.formatsArray),
    []
  );
  const [copiedIndex, setCopiedIndex] = React.useState(null);

  let overallIndex = 1;

  return (
    <Container className="my-5">
      <h3 className="mb-3">{t("res_cards_combined_queries")}</h3>
      {phoneNumberFormats.map((section, index) => {
        const googleSearch = encodeGoogleSearchQuery(
          section.formatsArray.map((phoneNumber) => phoneNumber.phoneNumber)
        );
        overallIndex += 1;

        return (
          <SingleCard
            key={overallIndex}
            formattedNumber={section.formatsArray[0].phoneNumber}
            meta={section.meta + "_qm"}
            googleSearch={googleSearch}
            index={overallIndex}
            copiedIndex={copiedIndex}
            setCopiedIndex={setCopiedIndex}
          />
        );
        })}
      {phoneNumberFormats.map((section, index) => {
        const googleSearch = encodeGoogleSearchQuery(
          section.formatsArray.map((phoneNumber) => phoneNumber.phoneNumber), false
        );
        overallIndex += 1;

        return (
          <SingleCard
            key={overallIndex}
            formattedNumber={section.formatsArray[0].phoneNumber}
            meta={section.meta + "_noqm"}
            googleSearch={googleSearch}
            index={overallIndex}
            copiedIndex={copiedIndex}
            setCopiedIndex={setCopiedIndex}
          />
        );
          })}
      <h3 className="mb-3">{t("res_cards_individual_queries")}</h3>
      {phoneNumberFormatsFlat.map((phoneNumber, index) => {
        const googleSearch = encodeGoogleSearchQuery(phoneNumber.phoneNumber);
        overallIndex += 1;

        return (
          <SingleCard
            key={overallIndex}
            formattedNumber={phoneNumber.phoneNumber}
            meta={phoneNumber.meta}
            googleSearch={googleSearch}
            index={overallIndex}
            copiedIndex={copiedIndex}
            setCopiedIndex={setCopiedIndex}
          />
        );
      })}
    </Container>
  );
}

export default ResultCards;
