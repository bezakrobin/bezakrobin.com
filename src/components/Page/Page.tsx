import React, {useEffect} from 'react';
import './PageStyle.css';
import ArrowUp from '../../images/ArrowUp.svg'
import ArrowDown from '../../images/ArrowDown.svg'
import ArrowLeft from '../../images/ArrowLeft.svg'
import ArrowRight from '../../images/ArrowRight.svg'

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
    onArrowUpKeyUp?: () => void;
    onArrowDownKeyUp?: () => void;
    onArrowLeftKeyUp?: () => void;
    onArrowRightKeyUp?: () => void;
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
                                              onArrowUpKeyUp,
                                              onArrowDownKeyUp,
                                              onArrowLeftKeyUp,
                                              onArrowRightKeyUp,
                                          }) => {
    useEffect(() => {
        const handleKeyUp = (event: KeyboardEvent) => {
            if (event.key === 'ArrowUp' && onArrowUpKeyUp) {
                onArrowUpKeyUp();
            } else if (event.key === 'ArrowDown' && onArrowDownKeyUp) {
                onArrowDownKeyUp();
            } else if (event.key === 'ArrowLeft' && onArrowLeftKeyUp) {
                onArrowLeftKeyUp();
            } else if (event.key === 'ArrowRight' && onArrowRightKeyUp) {
                onArrowRightKeyUp();
            }
        };

        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [onArrowUpKeyUp, onArrowDownKeyUp, onArrowLeftKeyUp, onArrowRightKeyUp]);

    return (
        <div className="page">
            {arrowUp && (
                <div className="top-centered">
                    <img src={ArrowUp} alt="Arrow Up" className="arrow" onMouseUp={onArrowUpMouseUp}/>
                </div>
            )}
            {arrowDown && (
                <div className="bottom-centered">
                    <img src={ArrowDown} alt="Arrow Down" className="arrow" onMouseUp={onArrowDownMouseUp}/>
                </div>
            )}
            {arrowLeft && (
                <div className="left-centered">
                    <img src={ArrowLeft} alt="Arrow Left" className="arrow" onMouseUp={onArrowLeftMouseUp}/>
                </div>
            )}
            {arrowRight && (
                <div className="right-centered">
                    <img src={ArrowRight} alt="Arrow Right" className="arrow" onMouseUp={onArrowRightMouseUp}/>
                </div>
            )}
            {children ? children : null}
        </div>
    );
};