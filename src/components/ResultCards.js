import React from "react";
import Container from "react-bootstrap/Container";

import SingleCard from "./SingleCard";
import { generateFormats } from "../utils/phoneNumberUtils";
import { encodeGoogleSearchQuery } from "../utils/uriEncodingUtils";


function ResultCards({ phoneNumber, countryCode }) {
    const phoneNumberFormats = generateFormats(phoneNumber, countryCode);
    const [copiedIndex, setCopiedIndex] = React.useState(null);

    return (
        <Container className="my-5">
            <h3 className="mb-3">Combined queries:</h3>
            <SingleCard
                key="combinedQuery"
                formattedNumber={phoneNumber}
                meta="Combined querry"
                googleSearch={encodeGoogleSearchQuery(phoneNumberFormats.map(phoneNumber => phoneNumber.phoneNumber))}
                index={0}
                copiedIndex={copiedIndex}
                setCopiedIndex={setCopiedIndex}
            />
            <h3 className="mb-3">Individual queries:</h3>
            {phoneNumberFormats.map((phoneNumber, index) => {
                const googleSearch = encodeGoogleSearchQuery(phoneNumber.phoneNumber);

                return (
                    <SingleCard
                        key={index + 1}
                        formattedNumber={phoneNumber.phoneNumber}
                        meta={phoneNumber.meta}
                        googleSearch={googleSearch}
                        index={index + 1}
                        copiedIndex={copiedIndex}
                        setCopiedIndex={setCopiedIndex}
                    />
                )
            })}
        </Container>
    );
}

export default ResultCards;
