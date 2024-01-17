import {NavigationData} from "./types";

export const navigationData : NavigationData = {
    pages: [
        {
            name: 'home',
            isDefaultPage: true,
            type: 'desktop',
            navigation: {
                left: true,
                right: true
            }
        },
        {
            name: 'showcase',
            type: 'desktop',
            navigation: {
                left: true,
                right: true
            }
        },
        {
            name: 'about',
            type: 'desktop',
            navigation: {
                left: true,
                right: true
            }
        },
        {
            name: 'contact',
            type: 'desktop',
            navigation: {
                left: true,
                right: true
            }
        }
    ]
}