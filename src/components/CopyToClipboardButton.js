import React from 'react';

import Button from 'react-bootstrap/Button';

import { CopyToClipboard } from 'react-copy-to-clipboard';


function CopyToClipboardButton({ text, index, copiedIndex, setCopiedIndex }) {
    const onCopy = () => {
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 1000); // resets after 1 seconds
    };

    return (
        <CopyToClipboard text={text} onCopy={onCopy}>
            <Button variant="secondary" style={{width: '100%'}}>
                {copiedIndex === index ? "Copied!" : "Copy to clipboard"}
            </Button>
        </CopyToClipboard>
    );
}

export default CopyToClipboardButton;
