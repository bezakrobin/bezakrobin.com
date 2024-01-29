import React, { createContext, useContext } from 'react';
import { Page } from '../utils/types';
import {getDefaultPage, getMenuItems} from "../utils/functions";
import { navigationData } from "../utils/data";

export interface NavigationContextProps {
    currentPage: Page | null;
    setCurrentPage: (page: Page | null) => void;
    currentMenuItem: number;
    setMenuItemIndex: React.Dispatch<React.SetStateAction<number>>;
    menuItems: string[];
    showLegend: boolean;
    setShowLegend: (show: boolean) => void;
    menuAnimation: string;
    setMenuAnimation: (animation: string) => void;
}

const defaultState: NavigationContextProps = {
    currentPage: getDefaultPage(navigationData.pages),
    setCurrentPage: () => {},
    currentMenuItem: 0,
    setMenuItemIndex: () => {},
    menuItems: getMenuItems(navigationData.pages),
    showLegend: false,
    setShowLegend: () => {},
    menuAnimation: '',
    setMenuAnimation: () => {},
};

export const NavigationContext = createContext<NavigationContextProps>(defaultState);

export const useNavigation = () => useContext(NavigationContext);
