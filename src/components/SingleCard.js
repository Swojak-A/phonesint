import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Fade from "react-bootstrap/Fade";

import CopyToClipboardButton from "./CopyToClipboardButton";

const SingleCard = ({
  formattedNumber,
  meta,
  googleSearch,
  index,
  copiedIndex,
  setCopiedIndex,
}) => {
  const { t, i18n } = useTranslation();
  const [fadeIn, setFadeIn] = useState(false);
  const truncateString = (str) =>
    str.length > 64 ? `${str.slice(0, 62)}...` : str;

  useEffect(() => {
    setFadeIn(false);
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 300 + index * 100); // incrementally delay the fadeIn

    // Clean up function to clear the timeout in case the component unmounts
    return () => clearTimeout(timer);
  }, [formattedNumber, googleSearch]); // dependency on props

  return (
    <Fade in={fadeIn}>
      <Card key={index} className="mb-3">
        <Card.Header>
          <Card.Title className="mt-2">{t(meta)}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={10}>
              <Card.Text>{formattedNumber}</Card.Text>
              <Card.Link href={googleSearch} target="_blank">
                {truncateString(googleSearch)}
              </Card.Link>
            </Col>
            <Col md={2} className="mt-auto text-end">
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
    </Fade>
  );
};

export default SingleCard;
