import React from 'react';
import EnterKeyImg from '../../images/Enter.svg';
import SpacebarImg from '../../images/Spacebar.svg';
import './HintStyle.css';

export const HintBottom: React.FC = () => {
    return (
        <div className="hint-bottom">
            <span>Press</span>
            <img src={EnterKeyImg} alt="Enter Key" />
            <span>or</span>
            <img src={SpacebarImg} alt="Spacebar" />
            <span>to continue...</span>
        </div>
    );
};