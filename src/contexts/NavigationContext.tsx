import { createContext, useContext } from 'react';
import { Page } from '../utils/types';
import { getMenuItems } from "../utils/functions";
import { navigationData } from "../utils/data";

interface NavigationContextProps {
    currentPage: Page | null;
    setCurrentPage: (page: Page | null) => void;
    currentMenuItem: number;
    setMenuItemIndex: (index: number) => void;
    menuItems: string[];
}

const defaultState: NavigationContextProps = {
    currentPage: null,
    setCurrentPage: () => {},
    currentMenuItem: 0,
    setMenuItemIndex: () => {},
    menuItems: getMenuItems(navigationData.pages),
};

export const NavigationContext = createContext<NavigationContextProps>(defaultState);

export const useNavigation = () => useContext(NavigationContext);
