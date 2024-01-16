import React from 'react';
import './PageStyle.css';
import ArrowUp from '../../images/ArrowKeys/ArrowUp.svg'
import ArrowDown from '../../images/ArrowKeys/ArrowDown.svg'
import ArrowLeft from '../../images/ArrowKeys/ArrowLeft.svg'
import ArrowRight from '../../images/ArrowKeys/ArrowRight.svg'
import {Arrow} from "../../types/types";

interface PageProps {
    children?: React.ReactNode;
    arrowUp?: Arrow;
    arrowDown?: Arrow;
    arrowLeft?: Arrow;
    arrowRight?: Arrow;
}

export const Page: React.FC<PageProps> = ({
                                              children,
                                              arrowUp,
                                              arrowDown,
                                              arrowLeft,
                                              arrowRight
                                          }) => {
    return (
        <div className="page">
            {arrowUp && <div className="top-centered"><img src={ArrowUp} alt="Arrow Up" className="arrow" /></div>}
            {arrowDown && <div className="bottom-centered"><img src={ArrowDown} alt="Arrow Down" className="arrow" /></div>}
            {arrowLeft && <div className="left-centered"><img src={ArrowLeft} alt="Arrow Left" className="arrow" /></div>}
            {arrowRight && <div className="right-centered"><img src={ArrowRight} alt="Arrow Right" className="arrow" /></div>}
            {children}
        </div>
    );
};