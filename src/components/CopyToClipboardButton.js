import React from 'react';

import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaste, faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';


function CopyToClipboardButton({ text, index, copiedIndex, setCopiedIndex }) {
    const onCopy = () => {
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 1000); // resets after 1 seconds
    };

    return (
        <CopyToClipboard text={text} onCopy={onCopy}>
            <Button variant="secondary" style={{width: '40  px'}} >
                {copiedIndex === index ? <FontAwesomeIcon icon={faCircleCheck} /> : <FontAwesomeIcon icon={faPaste} />}
            </Button>
        </CopyToClipboard>
    );
}

export default CopyToClipboardButton;
