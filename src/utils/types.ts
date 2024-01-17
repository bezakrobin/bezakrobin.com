export interface Page {
    name: string;
    isDefaultPage?: boolean;
    type: string;
    navigation: NavigationArrows;
}

export interface NavigationData {
    pages: Page[]
}

export interface NavigationArrows {
    up?: boolean;
    down?: boolean;
    left?: boolean;
    right?: boolean;
}