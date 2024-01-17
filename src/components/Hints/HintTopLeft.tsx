import React, {useContext, useEffect, useState} from 'react';
import EscapeKeyImg from '../../images/Escape.svg';
import './HintStyle.css';
import { NavigationContext } from '../../contexts/NavigationContext';
import { toggleShowLegend } from '../../utils/functions';

export const HintTopLeft: React.FC = () => {
    const { setShowLegend, showLegend } = useContext(NavigationContext);
    const [isEscapePressed, setIsEscapePressed] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsEscapePressed(true);
            }
        };

        const handleKeyUp = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsEscapePressed(false);
                toggleShowLegend(setShowLegend, showLegend);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [setShowLegend, showLegend]);

    return (
        <div className="hint-top-left">
            <img
                src={EscapeKeyImg}
                alt="Escape Key"
                className={isEscapePressed ? 'escape-pressed' : ''}
                onClick={() => toggleShowLegend(setShowLegend, showLegend)}
            />
        </div>
    );
};