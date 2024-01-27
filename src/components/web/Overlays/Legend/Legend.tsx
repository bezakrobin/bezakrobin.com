import React, {useEffect, useState} from 'react';
import './LegendStyle.css';
import {Keyboard} from "../../Keyboard/Keyboard";
import {useNavigation} from "../../../../contexts/NavigationContext";

export const Legend: React.FC = () => {
    const {showLegend, setShowLegend} = useNavigation();
    const [isSelectionKeysHintVisible, setSelectionKeysHintVisible] = useState<boolean>(false);
    const [isOpenCloseWebsiteMap, setOpenCloseWebsiteMap] = useState<boolean>(false);
    const [isNavigationKeys, setNavigationKeys] = useState<boolean>(false);

    const handleEscapeClick = () => {
        setShowLegend(!showLegend);
    };

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
            if (event.code.toLowerCase() === 'keym') {
                setOpenCloseWebsiteMap(true);
            }
            if (event.code.toLowerCase() === 'enter' || event.code.toLowerCase() === 'space' || event.code.toLowerCase() === 'numpadenter') {
                setSelectionKeysHintVisible(true);
            }
            if (event.code.toLowerCase() === 'arrowleft' || event.code.toLowerCase() === 'arrowright' || event.code.toLowerCase() === 'arrowdown' || event.code.toLowerCase() === 'arrowup') {
                setNavigationKeys(true);
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
            if (event.code.toLowerCase() === 'keym') {
                setTimeout(() => {
                    setOpenCloseWebsiteMap(false);
                }, 2000);
            }
            if (event.code.toLowerCase() === 'enter' || event.code.toLowerCase() === 'space' || event.code.toLowerCase() === 'numpadenter') {
                setTimeout(() => {
                    setSelectionKeysHintVisible(false);
                }, 2000);
            }
            if (event.code.toLowerCase() === 'arrowleft' || event.code.toLowerCase() === 'arrowright' || event.code.toLowerCase() === 'arrowdown' || event.code.toLowerCase() === 'arrowup') {
                setTimeout(() => {
                    setNavigationKeys(false);
                }, 2000);
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
            <Keyboard onEscapeClick={handleEscapeClick} isSelectionKeysHintVisible={isSelectionKeysHintVisible} isOpenCloseKeysHintMenu={true} isOpenCloseWebsiteMap={isOpenCloseWebsiteMap} isNavigationKeys={isNavigationKeys} />
        </div>
    );
};