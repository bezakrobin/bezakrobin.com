import React from 'react';
import './AlertStyle.css';

interface AlertBottomProps {
    text: string;
}

export const AlertBottom: React.FC<AlertBottomProps> = ({text}) => {
    return (
        <div className="alert-bottom">
            <span>{text}</span>
        </div>
    );
};