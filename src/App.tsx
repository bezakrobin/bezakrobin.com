import React, {useEffect} from 'react';
import {Page} from "./components/Page/Page";
import {useNavigation} from "./contexts/NavigationContext";
import {NavigationProvider} from "./contexts/NavigationProvider";
import {getDefaultPage, getDeviceType, menuNext, menuPrevious} from "./utils/functions";
import {navigationData} from "./utils/data";
import {Legend} from "./components/Overlays/Legend/Legend";

const MainContent: React.FC = () => {
    const {currentMenuItem, menuItems, setMenuItemIndex, currentPage, setCurrentPage, showLegend} = useNavigation();

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
                return () => menuPrevious(currentMenuItem, menuItems.length, setMenuItemIndex);
            case 'menuNext':
                return () => menuNext(currentMenuItem, menuItems.length, setMenuItemIndex);
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
                        <p>mobile version is not available at this moment, to visit the website use your laptop</p>
                    </>
                ) : (
                    <>
                        {/* DESKTOP */}

                        {/* Legend Overlay */}
                        {showLegend && <Legend />}

                        {/* Header Menu Page */}
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
    return (
        <NavigationProvider>
            <MainContent/>
        </NavigationProvider>
    );
};

export default App;
