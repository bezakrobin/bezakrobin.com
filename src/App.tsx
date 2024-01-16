import React, {useState} from 'react';
import {Page} from "./components/Page/Page";
import {
    handleArrowLeftKeyUp,
    handleArrowLeftMouseUp,
    handleArrowRightKeyUp,
    handleArrowRightMouseUp
} from "./functions/functions";
import {PageTitle} from "./components/PageTitle/PageTitle";
import {Spacing} from "./components/Spacing/Spacing";
import {Menu} from "./components/Menu/Menu";
import {useAppContext} from "./contexts/AppContext";

const menuItems = [
    {id: 'home', label: 'Home'},
    {id: 'showcase', label: 'Showcase'},
    {id: 'about', label: 'About'},
    {id: 'contact', label: 'Contact'},
];

const App: React.FC = () => {
    const {isMobile} = useAppContext();

    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleMenuItemClick = (index: number) => {
        setActiveIndex(index);
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
                            onArrowLeftMouseUp={handleArrowLeftMouseUp}
                            onArrowRightMouseUp={handleArrowRightMouseUp}
                            onArrowLeftKeyUp={handleArrowLeftKeyUp}
                            onArrowRightKeyUp={handleArrowRightKeyUp}
                        >
                            <Spacing direction={"vertical"} spacing={50}/>
                            <PageTitle text={'Robin Bezak'}/>
                            <Menu
                                items={menuItems}
                                activeIndex={activeIndex}
                                onMenuItemClick={handleMenuItemClick}
                            />
                        </Page>
                    </>
                )}
        </>
    );
};

export default App;
