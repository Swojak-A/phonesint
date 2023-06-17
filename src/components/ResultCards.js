import React from "react";
import Container from "react-bootstrap/Container";

import SingleCard from "./SingleCard";
import { generateFormats } from "../utils/phoneNumberUtils";

function ResultCards({ phoneNumber, countryCode }) {
    const phoneNumberFormats = generateFormats(phoneNumber, countryCode);
    const [copiedIndex, setCopiedIndex] = React.useState(null);

    return (
        <Container className="my-5">
            {phoneNumberFormats.map((phoneNumber, index) => {
                const googleSearch = `https://www.google.com/search?q=${encodeURIComponent(phoneNumber.phoneNumber).replace(/%20/g, '+')}`;

                return (
                    <SingleCard
                        key={index}
                        formattedNumber={phoneNumber.phoneNumber}
                        meta={phoneNumber.meta}
                        googleSearch={googleSearch}
                        index={index}
                        copiedIndex={copiedIndex}
                        setCopiedIndex={setCopiedIndex}
                    />
                )
            })}
        </Container>
    );
}

export default ResultCards;
