import React from "react";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CopyToClipboardButton from "./CopyToClipboardButton";
import { generateFormats } from "../utils/phoneNumberUtils";


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
