import React, { createContext, useContext } from 'react';
import {isMobile} from "../functions/functions";

interface AppContextState {
    isMobile: boolean;
}

const AppContext = createContext<AppContextState | undefined>(undefined);

export function useAppContext() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within a AppContextProvider');
    }
    return context;
}

interface AppContextProviderProps {
    children: React.ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
    const isMobileState = isMobile();

    const value = {
        isMobile: isMobileState,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
