import React from 'react';
import EscapeKeyImg from '../../images/Escape.svg';
import './HintStyle.css';

export const HintTopLeft: React.FC = () => {
    return (
        <div className="hint-top-left">
            <img src={EscapeKeyImg} alt="Escape Key" />
            <span>Legend...</span>
        </div>
    );
};