import React, {useContext} from 'react';
import EscapeKeyImg from '../../images/Escape.svg';
import './HintStyle.css';
import { NavigationContext } from '../../contexts/NavigationContext';
import { toggleShowLegend } from '../../utils/functions';

export const HintTopLeft: React.FC = () => {
    const { setShowLegend, showLegend } = useContext(NavigationContext);

    return (
        <div className="hint-top-left">
            <img src={EscapeKeyImg} alt="Escape Key" onClick={() => toggleShowLegend(setShowLegend, showLegend)} />
            <span>Legend...</span>
        </div>
    );
};