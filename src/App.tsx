import React from 'react';
import {Page} from "./components/Page/Page";
import {PageTitle} from "./components/PageTitle/PageTitle";
import {Spacing} from "./components/Spacing/Spacing";
import {Menu} from "./components/Menu/Menu";
import {useAppContext} from "./contexts/AppContext";

const App: React.FC = () => {
    const {isMobile, setActiveIndex, selectedMenuItemIndex, items} = useAppContext();

    const menuPrevious = () => {
        if (selectedMenuItemIndex > 0) {
            setActiveIndex(selectedMenuItemIndex - 1);
        } else if (selectedMenuItemIndex === 0) {
            setActiveIndex(items.length - 1);
        }
    };

    const menuNext = () => {
        if (selectedMenuItemIndex < items.length) {
            setActiveIndex(selectedMenuItemIndex + 1);
        } else if (selectedMenuItemIndex === items.length) {
            setActiveIndex(1);
        }
    };

    return (
        <>
            {isMobile ?
                (
                    <>
                        {/* MOBILE */}
                        <p>mobile version is not available at this moment</p>
                    </>
                ) : (
                    <>
                        {/* DESKTOP */}
                        {/* Header Menu Page */}
                        <Page
                            id={'desktop-menu'}
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

export default App;
