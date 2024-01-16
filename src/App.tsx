import React from 'react';
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

const App: React.FC = () => {
    const {isMobile} = useAppContext();

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
