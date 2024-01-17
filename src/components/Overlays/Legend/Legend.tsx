import React, {useEffect} from 'react';
import './LegendStyle.css';
import KeyboardLayoutSVG from '../../../images/Keyboard.svg';

export const Legend: React.FC = () => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const keyElement = document.getElementById(`key-${event.key.toLowerCase()}`);
            if (keyElement) {
                keyElement.classList.add('highlight');
            }
        };

        const handleKeyUp = (event: KeyboardEvent) => {
            const keyElement = document.getElementById(`key-${event.key.toLowerCase()}`);
            if (keyElement) {
                keyElement.classList.remove('highlight');
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
        <div className="legend">
            <img src={KeyboardLayoutSVG} alt="Keyboard Layout" />
        </div>
    );
};