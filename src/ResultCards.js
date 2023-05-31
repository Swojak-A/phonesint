import React from "react";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const countryPrefixes = ['+48', '0048', '48'];
const nationalNumberFormats = [' ', '-', ''];


function formatNationalNumber(number, separator) {
    return number.split(' ').join(separator);
}


function generateFormats(formattedNumber) {
    // In this case we rely on the fact that the number is formatted in certain way:
    // - starts with '+XX ' (where XX is country code)
    // - there are already pre-existing spaces in the national number
    // Without both of these assumptions present, the function will produce incorrect results.

    const nationalNumber = formattedNumber.slice(4);

    return countryPrefixes.reduce((formats, prefix) => {
        nationalNumberFormats.forEach(separator => {
            const reformattedNumber = formatNationalNumber(nationalNumber, separator);
            formats.push(`${prefix}${separator}${reformattedNumber}`);
        });
        return formats;
    }, []);
}


function ResultCards({ phoneNumber }) {
    const phoneNumberFormats = generateFormats(phoneNumber);

    console.log(phoneNumberFormats);

    return (
        <Container className="my-4">
            {phoneNumberFormats.map((format, index) => (
                <Card key={index} className="mb-3">
                <Card.Body>
                    <Card.Text>
                    {format}
                    </Card.Text>
                </Card.Body>
                </Card>
            ))}
        </Container>
    );
}

export default ResultCards;
