import React, {useContext, useEffect} from 'react';
import EscapeKeyImg from '../../images/Escape.svg';
import './HintStyle.css';
import { NavigationContext } from '../../contexts/NavigationContext';
import { toggleShowLegend } from '../../utils/functions';

export const HintTopLeft: React.FC = () => {
    const { setShowLegend, showLegend } = useContext(NavigationContext);

    useEffect(() => {
        const handleKeyUp = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                toggleShowLegend(setShowLegend, showLegend);
            }
        };

        window.addEventListener('keyup', handleKeyUp);

        return () => window.removeEventListener('keyup', handleKeyUp);
    }, [setShowLegend, showLegend]);

    return (
        <div className="hint-top-left">
            <img src={EscapeKeyImg} alt="Escape Key" onClick={() => toggleShowLegend(setShowLegend, showLegend)} />
            <span>Legend...</span>
        </div>
    );
};