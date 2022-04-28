import React from 'react';
import toast from 'react-hot-toast';
import { MdContentCopy } from 'react-icons/md';

const CopyButton = ({ text }: { text: string }) => {
    const onCopy = () => window.navigator.clipboard.writeText(text).then(() => toast.success('Copied to clipboard.'));
    return <MdContentCopy onClick={onCopy} className="cursor-pointer" />
}

export default CopyButton;