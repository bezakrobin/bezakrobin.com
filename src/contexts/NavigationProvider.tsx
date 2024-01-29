import React, {ReactNode, useState} from 'react';
import {NavigationContext} from './NavigationContext';
import {Page} from '../utils/types';
import {navigationData} from "../utils/data";
import {getMenuItems} from "../utils/functions";

interface NavigationProviderProps {
    children: ReactNode;
}

export const NavigationProvider: React.FC<NavigationProviderProps> = ({children}) => {
    const [currentPage, setCurrentPage] = useState<Page | null>(null);
    const [currentMenuItem, setMenuItemIndex] = useState<number>(0);
    const [showLegend, setShowLegend] = useState<boolean>(false);
    const [menuAnimation, setMenuAnimation] = useState<string>('');

    const menuItems = getMenuItems(navigationData.pages);

    const value = {
        currentPage,
        setCurrentPage,
        currentMenuItem,
        setMenuItemIndex,
        menuItems,
        showLegend,
        setShowLegend,
        menuAnimation,
        setMenuAnimation,
    };

    return (
        <NavigationContext.Provider value={value}>
            {children}
        </NavigationContext.Provider>
    );
};
