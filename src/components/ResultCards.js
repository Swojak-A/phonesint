import React from "react";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CopyToClipboardButton from "./CopyToClipboardButton";
import countryCodeMappings from "../consts/countryCodeMappings";


function formatNationalNumber(number, separator) {
    return number.split(' ').join(separator);
}


function generateFormats(formattedNumber, countryCode) {
    // In this case we rely on the fact that the number is formatted in certain way:
    // - starts with '+XX ' (where XX is country code)
    // - there are already pre-existing spaces in the national number
    // Without both of these assumptions present, the function will produce incorrect results.

    console.log(`generateFormats, formatted number: ${formattedNumber}`);

    const countryCodeMapping = countryCodeMappings[countryCode.toLowerCase()];

    const nationalNumber = formattedNumber.slice(countryCodeMapping.prefixSlice);

    return countryCodeMapping.prefixesArray.reduce((formats, prefix) => {
        countryCodeMapping.separatorsArray.forEach(separator => {
            const reformattedNumber = formatNationalNumber(nationalNumber, separator);
            formats.push(`${prefix}${prefix ? " " : ""}${reformattedNumber}`);
        });
        return formats;
    }, []);
}


function ResultCards({ phoneNumber, countryCode }) {
    const phoneNumberFormats = generateFormats(phoneNumber, countryCode);
    const [copiedIndex, setCopiedIndex] = React.useState(null);

    return (
        <Container className="my-5">
            {phoneNumberFormats.map((formattedNumber, index) => {
                const googleSearch = `https://www.google.com/search?q=${encodeURIComponent(formattedNumber).replace(/%20/g, '+')}`;

                return (
                    <Card key={index} className="mb-3">
                    <Card.Header>
                        {formattedNumber}
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col md={10}>
                                <Card.Link href={googleSearch}>
                                    {googleSearch}
                                </Card.Link>
                            </Col>
                            <Col md={2}>
                                    <CopyToClipboardButton
                                        text={googleSearch}
                                        index={index}
                                        copiedIndex={copiedIndex}
                                        setCopiedIndex={setCopiedIndex}
                                    />
                            </Col>
                        </Row>
                    </Card.Body>
                    </Card>
                )
            })}
        </Container>
    );
}

export default ResultCards;
