import React from 'react';
import './PageStyle.css';
import ArrowUp from '../../images/ArrowKeys/ArrowUp.svg'
import ArrowDown from '../../images/ArrowKeys/ArrowDown.svg'
import ArrowLeft from '../../images/ArrowKeys/ArrowLeft.svg'
import ArrowRight from '../../images/ArrowKeys/ArrowRight.svg'

interface PageProps {
    children?: React.ReactNode;
    arrowUp?: boolean;
    arrowDown?: boolean;
    arrowLeft?: boolean;
    arrowRight?: boolean;
    onArrowUpMouseUp?: () => void;
    onArrowDownMouseUp?: () => void;
    onArrowLeftMouseUp?: () => void;
    onArrowRightMouseUp?: () => void;
}

export const Page: React.FC<PageProps> = ({
                                              children,
                                              arrowUp,
                                              arrowDown,
                                              arrowLeft,
                                              arrowRight,
                                              onArrowUpMouseUp,
                                              onArrowDownMouseUp,
                                              onArrowLeftMouseUp,
                                              onArrowRightMouseUp,
                                          }) => {
    return (
        <div className="page">
            {arrowUp && <div className="top-centered"><img src={ArrowUp} alt="Arrow Up" className="arrow" onMouseUp={onArrowUpMouseUp} /></div>}
            {arrowDown && <div className="bottom-centered"><img src={ArrowDown} alt="Arrow Down" className="arrow" onMouseUp={onArrowDownMouseUp} /></div>}
            {arrowLeft && <div className="left-centered"><img src={ArrowLeft} alt="Arrow Left" className="arrow" onMouseUp={onArrowLeftMouseUp} /></div>}
            {arrowRight && <div className="right-centered"><img src={ArrowRight} alt="Arrow Right" className="arrow" onMouseUp={onArrowRightMouseUp} /></div>}
            {children}
        </div>
    );
};