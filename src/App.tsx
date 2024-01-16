import React from 'react';
import {Page} from "./components/Page/Page";
import {
    handleArrowLeftKeyUp,
    handleArrowLeftMouseUp,
    handleArrowRightKeyUp,
    handleArrowRightMouseUp
} from "./functions/functions";

const App: React.FC = () => {
    return (
        <>
            {/* Header Menu Page */}
            <Page
                title={'menu'}
                arrowLeft={true}
                arrowRight={true}
                onArrowLeftMouseUp={handleArrowLeftMouseUp}
                onArrowRightMouseUp={handleArrowRightMouseUp}
                onArrowLeftKeyUp={handleArrowLeftKeyUp}
                onArrowRightKeyUp={handleArrowRightKeyUp}
            >
                {/* Children components */}
            </Page>
        </>
    );
};

export default App;
