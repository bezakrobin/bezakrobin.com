import React, {useEffect} from 'react';
import {Page} from "./components/web/Page/Page";
import {useNavigation} from "./contexts/NavigationContext";
import {NavigationProvider} from "./contexts/NavigationProvider";
import {getDefaultPage, getDeviceType, menuNext, menuPrevious} from "./utils/functions";
import {navigationData} from "./utils/data";
import {Legend} from "./components/web/Overlays/Legend/Legend";
import {HintTopLeft} from "./components/web/Hints/HintTopLeft";
import {Page as MobilePage} from "./components/mobile/Page/Page";
import {MobileIsNotSupported} from './components/mobile/MobileIsNotSupported/MobileIsNotSupported';

const MainContent: React.FC = () => {
    const {currentMenuItem, menuItems, setMenuItemIndex, currentPage, setCurrentPage, showLegend, setMenuAnimation} = useNavigation();

    useEffect(() => {
        if (currentPage === null) {
            const page = getDefaultPage(navigationData.pages);
            if (page) {
                setCurrentPage(page);
            }
        }
    }, [currentPage, setCurrentPage]);

    const getFunction = (functionName: string | undefined) => {
        if (!functionName) return undefined;

        switch (functionName) {
            case 'menuPrevious':
                return () => menuPrevious(currentMenuItem, menuItems.length, setMenuItemIndex, setMenuAnimation);
            case 'menuNext':
                return () => menuNext(currentMenuItem, menuItems.length, setMenuItemIndex, setMenuAnimation);
            default:
                return undefined;
        }
    };

    return (
        <>
            {getDeviceType() === "mobile" ?
                (
                    <>
                        {/* MOBILE */}

                        {/* Mobile page wrapper */}
                        <MobilePage>
                            <MobileIsNotSupported />
                        </MobilePage>
                    </>
                ) : (
                    <>
                        {/* DESKTOP */}

                        {/* Escape Button for Legend Overlay */}
                        {!showLegend ? <HintTopLeft /> : null}

                        {/* Legend Overlay */}
                        {showLegend && <Legend />}

                        {/* Desktop page wrapper */}
                        <Page
                            arrowLeft={currentPage?.navigation.left}
                            arrowRight={currentPage?.navigation.right}
                            arrowDown={currentPage?.navigation.down}
                            arrowUp={currentPage?.navigation.up}
                            onArrowLeftMouseUp={getFunction(currentPage?.navigationFunctions.left)}
                            onArrowRightMouseUp={getFunction(currentPage?.navigationFunctions.right)}
                            onArrowLeftKeyUp={getFunction(currentPage?.navigationFunctions.left)}
                            onArrowRightKeyUp={getFunction(currentPage?.navigationFunctions.right)}
                            render={currentPage && currentPage.render ? currentPage.render : undefined}
                        />
                    </>
                )}
        </>
    );
};

const App: React.FC = () => {

    useEffect(() => {
        const handleContextMenu = (event: MouseEvent) => {
            event.preventDefault();
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.ctrlKey && (event.key === 'a' || event.key === 'A')) {
                event.preventDefault();
            }

            if (event.ctrlKey && (event.key === 'c' || event.key === 'C')) {
                event.preventDefault();
            }
        };

        const handleMouseDown = (event: MouseEvent) => {
            if (event.button !== 0) {
                event.preventDefault();
            }
        };

        window.addEventListener('contextmenu', handleContextMenu);
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('mousedown', handleMouseDown);

        return () => {
            window.removeEventListener('contextmenu', handleContextMenu);
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('mousedown', handleMouseDown);
        };
    }, []);

    return (
        <NavigationProvider>
            <MainContent/>
        </NavigationProvider>
    );
};

export default App;
