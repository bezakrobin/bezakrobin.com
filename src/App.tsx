import React from 'react';
import {Page} from "./components/Page/Page";

const App: React.FC = () => {
    return (
        <>
            <Page
                arrowLeft={{label: 'arrowLeft'}}
                arrowRight={{label: 'arrowRight'}}
            >
                children belongs here
            </Page>
        </>
    );
};

export default App;
