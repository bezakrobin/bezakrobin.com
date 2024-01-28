import React, {useCallback, useEffect, useState} from 'react';
import './LegendStyle.css';
import {Keyboard} from "../../Keyboard/Keyboard";
import {useNavigation} from "../../../../contexts/NavigationContext";

export const Legend: React.FC = () => {
    const {showLegend, setShowLegend} = useNavigation();
    const [isOpenAnimation, setIsOpenAnimation] = useState<boolean>(false);
    const [isCloseAnimation, setIsCloseAnimation] = useState<boolean>(false);

    const handleEscapeClick = useCallback(() => {
        setShowLegend(!showLegend);
    }, [setShowLegend, showLegend]);

    const handleOpenAnimation = (finished: boolean) => {
        setIsOpenAnimation(finished);
    };

    const handleCloseAnimation = (finished: boolean) => {
        setIsCloseAnimation(finished);
    };

    useEffect(() => {
        const selectionKeysHint = document.getElementById('SelectionKeysHint');
        const openCloseWebsiteMapHint = document.getElementById('OpenCloseWebsiteMap');
        const navigationKeysHint = document.getElementById('NavigationKeys');
        if (isOpenAnimation) {
            const handleKeyDown = (event: KeyboardEvent) => {
                const rectKeyElement = document.getElementById(`rect-key-${event.code.toLowerCase()}`);
                const pathKeyElement = document.getElementById(`path-key-${event.code.toLowerCase()}`);
                if (rectKeyElement) {
                    rectKeyElement.classList.add('highlight');
                }
                if (pathKeyElement) {
                    pathKeyElement.classList.add('highlight');
                }
                if (event.code.toLowerCase() === 'keym') {
                    if (openCloseWebsiteMapHint) {
                        openCloseWebsiteMapHint.style.opacity = '1';
                    }
                }
                if (event.code.toLowerCase() === 'enter' || event.code.toLowerCase() === 'space' || event.code.toLowerCase() === 'numpadenter') {
                    if (selectionKeysHint) {
                        selectionKeysHint.style.opacity = '1';
                    }
                }
                if (event.code.toLowerCase() === 'arrowleft' || event.code.toLowerCase() === 'arrowright' || event.code.toLowerCase() === 'arrowdown' || event.code.toLowerCase() === 'arrowup') {
                    if (navigationKeysHint) {
                        navigationKeysHint.style.opacity = '1';
                    }
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
                    setIsCloseAnimation(true);
                    event.preventDefault();

                    setTimeout(() => {
                        handleEscapeClick();
                    }, 4000);
                }
                if (event.code.toLowerCase() === 'keym') {
                    if (openCloseWebsiteMapHint) {
                        openCloseWebsiteMapHint.style.opacity = '0';
                    }
                }
                if (event.code.toLowerCase() === 'enter' || event.code.toLowerCase() === 'space' || event.code.toLowerCase() === 'numpadenter') {
                    if (selectionKeysHint) {
                        selectionKeysHint.style.opacity = '0';
                    }
                }
                if (event.code.toLowerCase() === 'arrowleft' || event.code.toLowerCase() === 'arrowright' || event.code.toLowerCase() === 'arrowdown' || event.code.toLowerCase() === 'arrowup') {
                    if (navigationKeysHint) {
                        navigationKeysHint.style.opacity = '0';
                    }
                }
            };

            window.addEventListener('keydown', handleKeyDown);
            window.addEventListener('keyup', handleKeyUp);

            return () => {
                window.removeEventListener('keydown', handleKeyDown);
                window.removeEventListener('keyup', handleKeyUp);
            };
        }
    }, [setShowLegend, showLegend, isOpenAnimation, isCloseAnimation, handleEscapeClick]);

    return (
        <div className="legend">
            <Keyboard isOpenAnimationFinished={handleOpenAnimation} isCloseAnimation={isCloseAnimation} isCloseAnimationFinished={handleCloseAnimation}/>
        </div>
    );
};