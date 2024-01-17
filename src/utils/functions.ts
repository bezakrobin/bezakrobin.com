import {Page} from "./types";

export const getMenuItems = (pages: Page[]) => {
    return pages.map(page => page.name);
}

export const getDefaultPage = (pages: Page[]) => {
    const defaultPage = pages.find(page => page.isDefaultPage && page.type === 'desktop');
    return defaultPage || null;
}

export const getDeviceType = () => {
    const threshold = 768;
    return window.innerWidth <= threshold ? 'mobile' : 'desktop';
}

export const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const menuPrevious = (currentMenuItem: number, menuItemsLength: number, setMenuItemIndex:  (index: number) => void) => {
    if (currentMenuItem > 0) {
        setMenuItemIndex(currentMenuItem - 1);
    } else {
        setMenuItemIndex(menuItemsLength - 1);
    }
};

export const menuNext = (currentMenuItem: number, menuItemsLength: number, setMenuItemIndex:  (index: number) => void) => {
    if (currentMenuItem < menuItemsLength - 1) {
        setMenuItemIndex(currentMenuItem + 1);
    } else {
        setMenuItemIndex(0);
    }
};
