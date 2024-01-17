import React, {useEffect, useState} from 'react';
import EnterKeyImg from '../../images/Enter.svg';
import SpacebarImg from '../../images/Spacebar.svg';
import './HintStyle.css';

export const HintBottom: React.FC = () => {
    const [isEnterPressed, setIsEnterPressed] = useState(false);
    const [isSpacebarPressed, setIsSpacebarPressed] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                setIsEnterPressed(true);
            }
            if (event.code === 'Space') {
                setIsSpacebarPressed(true);
            }
        };

        const handleKeyUp = (event: KeyboardEvent) => {
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
    }, []);

    return (
        <div className="hint-bottom">
            <span>Press</span>
            <img
                src={EnterKeyImg}
                alt="Enter Key"
                className={isEnterPressed ? 'key-pressed' : ''}
            />
            <span>or</span>
            <img
                src={SpacebarImg}
                alt="Spacebar"
                className={isSpacebarPressed ? 'key-pressed' : ''}
            />
            <span>to continue...</span>
        </div>
    );
};