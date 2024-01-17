import React, {useContext, useEffect, useState} from 'react';
import EnterKeyImg from '../../images/Enter.svg';
import SpacebarImg from '../../images/Spacebar.svg';
import './HintStyle.css';
import {NavigationContext} from "../../contexts/NavigationContext";

export const HintBottom: React.FC = () => {
    const [isEnterPressed, setIsEnterPressed] = useState(false);
    const [isSpacebarPressed, setIsSpacebarPressed] = useState(false);

    const { showLegend } = useContext(NavigationContext);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (showLegend) return;
            if (event.key === 'Enter') {
                setIsEnterPressed(true);
            }
            if (event.code === 'Space') {
                setIsSpacebarPressed(true);
            }
        };

        const handleKeyUp = (event: KeyboardEvent) => {
            if (showLegend) return;
            if (event.key === 'Enter') {
                setIsEnterPressed(false);
            }
            if (event.code === 'Space') {
                setIsSpacebarPressed(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [showLegend]);

    return (
        <div className="hint-bottom">
            <span>Press</span>
            <img
                src={EnterKeyImg}
                alt="Enter Key"
                className={`enter ${isEnterPressed ? 'key-pressed' : ''}`}
            />
            <span>or</span>
            <img
                src={SpacebarImg}
                alt="Spacebar"
                className={`spacebar ${isSpacebarPressed ? 'key-pressed' : ''}`}
            />
            <span>to continue...</span>
        </div>
    );
};