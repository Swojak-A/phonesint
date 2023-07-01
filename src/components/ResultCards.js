import React from "react";
import { useTranslation } from "react-i18next";

import Container from "react-bootstrap/Container";

import SingleCard from "./SingleCard";
import { generateFormats } from "../utils/phoneNumberUtils";
import { encodeGoogleSearchQuery } from "../utils/uriEncodingUtils";

function ResultCards({ phoneNumber, countryCode }) {
  const { t, i18n } = useTranslation();
  const phoneNumberFormats = generateFormats(phoneNumber, countryCode);
  const [copiedIndex, setCopiedIndex] = React.useState(null);

  return (
    <Container className="my-5">
      <h3 className="mb-3">{t("res_cards_combined_queries")}</h3>
      <SingleCard
        key="combinedQueryWithoutQuotationMarks"
        formattedNumber={phoneNumber}
        meta={t("res_cards_combined_queries_qm_meta")}
        googleSearch={encodeGoogleSearchQuery(
          phoneNumberFormats.map((phoneNumber) => phoneNumber.phoneNumber),
          false
        )}
        index={0}
        copiedIndex={copiedIndex}
        setCopiedIndex={setCopiedIndex}
      />
      <SingleCard
        key="combinedQueryWithQuotationMarks"
        formattedNumber={phoneNumber}
        meta={t("res_cards_combined_queries_no_qm_meta")}
        googleSearch={encodeGoogleSearchQuery(
          phoneNumberFormats.map((phoneNumber) => phoneNumber.phoneNumber, true)
        )}
        index={1}
        copiedIndex={copiedIndex}
        setCopiedIndex={setCopiedIndex}
      />
      <h3 className="mb-3">{t("res_cards_individual_queries")}</h3>
      {phoneNumberFormats.map((phoneNumber, index) => {
        const googleSearch = encodeGoogleSearchQuery(phoneNumber.phoneNumber);

        return (
          <SingleCard
            key={index + 2}
            formattedNumber={phoneNumber.phoneNumber}
            meta={phoneNumber.meta}
            googleSearch={googleSearch}
            index={index + 2}
            copiedIndex={copiedIndex}
            setCopiedIndex={setCopiedIndex}
          />
        );
      })}
    </Container>
  );
}

export default ResultCards;
