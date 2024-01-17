import React from 'react';
import {Page} from "./components/Page/Page";
import {PageTitle} from "./components/PageTitle/PageTitle";
import {Spacing} from "./components/Spacing/Spacing";
import {Menu} from "./components/Menu/Menu";
import {useNavigation} from "./contexts/NavigationContext";
import {NavigationProvider} from "./contexts/NavigationProvider";
import {getDeviceType} from "./utils/functions";

const MainContent: React.FC = () => {
    const { currentMenuItem, menuItems, setMenuItemIndex } = useNavigation();

    const menuPrevious = () => {
        if (currentMenuItem > 0) {
            setMenuItemIndex(currentMenuItem - 1);
        } else if (currentMenuItem === 0) {
            setMenuItemIndex(menuItems.length - 1);
        }
    };

    const menuNext = () => {
        if (currentMenuItem < menuItems.length - 1) {
            setMenuItemIndex(currentMenuItem + 1);
        } else if (currentMenuItem === menuItems.length - 1) {
            setMenuItemIndex(0);
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
                        {/* Header Menu Page */}
                        <Page
                            arrowLeft={true}
                            arrowRight={true}
                            onArrowLeftMouseUp={menuPrevious}
                            onArrowRightMouseUp={menuNext}
                            onArrowLeftKeyUp={menuPrevious}
                            onArrowRightKeyUp={menuNext}
                        >
                            <Spacing direction={"vertical"} spacing={10}/>
                            <PageTitle text={'Robin Bezak'}/>
                            <Menu />
                        </Page>
                    </>
                )}
        </>
    );
};

const App: React.FC = () => {
    return (
        <NavigationProvider>
            <MainContent />
        </NavigationProvider>
    );
};

export default App;
