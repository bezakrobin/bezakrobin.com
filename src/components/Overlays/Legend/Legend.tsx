import React from 'react';
import './LegendStyle.css';
import {HintTopLeft} from "../../Hints/HintTopLeft";

export const Legend: React.FC = () => {
    return (
        <div className="legend">
            <HintTopLeft />
        </div>
    );
};