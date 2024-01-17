import {Page} from "./types";

export const getMenuItems = (pages: Page[]) => {
    return pages.map(page => page.name);
}

export const getDeviceType = () => {
    const threshold = 768;
    return window.innerWidth <= threshold ? 'mobile' : 'desktop';
}

export const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}