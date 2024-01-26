import React, {useContext, useEffect, useState} from 'react';
import './PageStyle.css';
import ArrowUp from '../../../images/ArrowUp.svg'
import ArrowDown from '../../../images/ArrowDown.svg'
import ArrowLeft from '../../../images/ArrowLeft.svg'
import ArrowRight from '../../../images/ArrowRight.svg'
import {NavigationContext} from "../../../contexts/NavigationContext";

interface PageProps {
    render?: () => React.ReactNode;
    arrowUp?: boolean;
    arrowDown?: boolean;
    arrowLeft?: boolean;
    arrowRight?: boolean;
    onArrowUpMouseUp?: () => void;
    onArrowDownMouseUp?: () => void;
    onArrowLeftMouseUp?: () => void;
    onArrowRightMouseUp?: () => void;
    onArrowUpKeyUp?: () => void;
    onArrowDownKeyUp?: () => void;
    onArrowLeftKeyUp?: () => void;
    onArrowRightKeyUp?: () => void;
}

export const Page: React.FC<PageProps> = ({
                                              render,
                                              arrowUp,
                                              arrowDown,
                                              arrowLeft,
                                              arrowRight,
                                              onArrowUpMouseUp,
                                              onArrowDownMouseUp,
                                              onArrowLeftMouseUp,
                                              onArrowRightMouseUp,
                                              onArrowUpKeyUp,
                                              onArrowDownKeyUp,
                                              onArrowLeftKeyUp,
                                              onArrowRightKeyUp,
                                          }) => {
    const [isArrowUpPressed, setIsArrowUpPressed] = useState(false);
    const [isArrowDownPressed, setIsArrowDownPressed] = useState(false);
    const [isArrowLeftPressed, setIsArrowLeftPressed] = useState(false);
    const [isArrowRightPressed, setIsArrowRightPressed] = useState(false);

    const { showLegend } = useContext(NavigationContext);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (showLegend) return;
            switch (event.key) {
                case 'ArrowUp':
                    setIsArrowUpPressed(true);
                    break;
                case 'ArrowDown':
                    setIsArrowDownPressed(true);
                    break;
                case 'ArrowLeft':
                    setIsArrowLeftPressed(true);
                    break;
                case 'ArrowRight':
                    setIsArrowRightPressed(true);
                    break;
            }
        };

        const handleKeyUp = (event: KeyboardEvent) => {
            if (showLegend) return;
            if (event.key === 'ArrowUp' && onArrowUpKeyUp) {
                setIsArrowUpPressed(false);
                onArrowUpKeyUp();
            } else if (event.key === 'ArrowDown' && onArrowDownKeyUp) {
                setIsArrowDownPressed(false);
                onArrowDownKeyUp();
            } else if (event.key === 'ArrowLeft' && onArrowLeftKeyUp) {
                setIsArrowLeftPressed(false);
                onArrowLeftKeyUp();
            } else if (event.key === 'ArrowRight' && onArrowRightKeyUp) {
                setIsArrowRightPressed(false);
                onArrowRightKeyUp();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [onArrowUpKeyUp, onArrowDownKeyUp, onArrowLeftKeyUp, onArrowRightKeyUp, showLegend]);

    return (
        <div className="page">
            <>
                {arrowUp && (
                    <div className="top-centered">
                        <img src={ArrowUp} alt="Arrow Up" className={`arrow ${isArrowUpPressed ? 'pressed' : ''}`} onMouseUp={onArrowUpMouseUp}/>
                    </div>
                )}
                {arrowDown && (
                    <div className="bottom-centered">
                        <img src={ArrowDown} alt="Arrow Down" className={`arrow ${isArrowDownPressed ? 'pressed' : ''}`} onMouseUp={onArrowDownMouseUp}/>
                    </div>
                )}
                {arrowLeft && (
                    <div className="left-centered">
                        <img src={ArrowLeft} alt="Arrow Left" className={`arrow ${isArrowLeftPressed ? 'pressed' : ''}`} onMouseUp={onArrowLeftMouseUp}/>
                    </div>
                )}
                {arrowRight && (
                    <div className="right-centered">
                        <img src={ArrowRight} alt="Arrow Right" className={`arrow ${isArrowRightPressed ? 'pressed' : ''}`} onMouseUp={onArrowRightMouseUp}/>
                    </div>
                )}
                {render && render()}
            </>
        </div>
    );
};