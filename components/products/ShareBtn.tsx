"use client"

import React, { useState } from 'react';
import ShareSvg from '../svg/shareIcon';
import ShareModal from './ShareModal';

interface Props {
    content: string;
};

const ShareBtn = ({ content }: Props) => {
    const [isOver, setIsOver] = useState<boolean>(false);
    const [isModal, setIsModal] = useState<boolean>(false);

    const handleClick = (event: any) => {
        event.preventDefault();
        setIsModal(true)
        // Handle share functionality
    };

    return (
        <>
            <a href="#"
                className="share-btn"
                onClick={handleClick}
                onMouseOver={() => setIsOver(true)}
                onMouseLeave={() => setIsOver(false)}
            >
                <ShareSvg fill={isOver ? "#ffffff" : "#000000"} className='mx-1' />
                {`${content}`}
            </a>
            <ShareModal show={isModal} onCancel={() => setIsModal(false)} />
        </>
    );
};

export default ShareBtn;
