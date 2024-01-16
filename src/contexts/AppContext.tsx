import React, {createContext, useContext, useState} from 'react';
import {isMobile} from "../functions/functions";

interface MenuItem {
    id: string;
    label: string;
}

interface AppContextState {
    isMobile: boolean;
    selectedMenuItemIndex: number;
    setActiveIndex: (index: number) => void;
    items: MenuItem[];
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
    const [selectedMenuItemIndex, setSelectedMenuItemIndex] = useState<number>(0);
    const items: MenuItem[] = [
        { id: 'home', label: 'Home' },
        { id: 'showcase', label: 'Showcase' },
        { id: 'about', label: 'About' },
        { id: 'contact', label: 'Contact' },
    ];

    const setActiveIndex = (index: number) => {
        setSelectedMenuItemIndex(index);
    };

    const value = {
        isMobile: isMobile(),
        selectedMenuItemIndex,
        setActiveIndex,
        items,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
