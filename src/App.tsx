import React from 'react';
import {Page} from "./components/Page/Page";

const App: React.FC = () => {
    return (
        <>
            {/* Header Menu Page */}
            <Page
                arrowLeft={true}
                arrowRight={true}
            >
                {/* Children components */}
            </Page>
        </>
    );
};

export default App;
