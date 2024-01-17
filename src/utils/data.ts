import { NavigationData } from "./types";
import { renderHomePage } from './pageRenderFunctions';

export const navigationData : NavigationData = {
    pages: [
        {
            name: 'home',
            isDefaultPage: true,
            type: 'desktop',
            navigation: {
                left: true,
                right: true,
            },
            navigationFunctions: {
                left: 'menuPrevious',
                right: 'menuNext',
            },
            render: renderHomePage
        },
        {
            name: 'showcase',
            type: 'desktop',
            navigation: {
                left: true,
                right: true
            },
            navigationFunctions: {
                left: '',
                right: '',
            }
        },
        {
            name: 'about',
            type: 'desktop',
            navigation: {
                left: true,
                right: true
            },
            navigationFunctions: {
                left: '',
                right: '',
            }
        },
        {
            name: 'contact',
            type: 'desktop',
            navigation: {
                left: true,
                right: true
            },
            navigationFunctions: {
                left: '',
                right: '',
            }
        }
    ]
}