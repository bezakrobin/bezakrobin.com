import React, {useEffect} from 'react';
import './LegendStyle.css';
import {Keyboard} from "../../Keyboard/Keyboard";
import {useNavigation} from "../../../contexts/NavigationContext";

export const Legend: React.FC = () => {
    const {showLegend, setShowLegend} = useNavigation();

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const rectKeyElement = document.getElementById(`rect-key-${event.code.toLowerCase()}`);
            const pathKeyElement = document.getElementById(`path-key-${event.code.toLowerCase()}`);
            if (rectKeyElement) {
                rectKeyElement.classList.add('highlight');
            }
            if (pathKeyElement) {
                pathKeyElement.classList.add('highlight');
            }
        };

        const handleKeyUp = (event: KeyboardEvent) => {
            const rectKeyElement = document.getElementById(`rect-key-${event.code.toLowerCase()}`);
            const pathKeyElement = document.getElementById(`path-key-${event.code.toLowerCase()}`);
            if (rectKeyElement) {
                rectKeyElement.classList.remove('highlight');
            }
            if (pathKeyElement) {
                pathKeyElement.classList.remove('highlight');
            }
            if (event.code === "Escape") {
                setShowLegend(!showLegend);
                event.preventDefault();
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
        <div className="legend">
            <Keyboard />
        </div>
    );
};