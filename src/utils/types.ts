import React from "react";

export interface Page {
    name: string;
    isDefaultPage?: boolean;
    type: string;
    navigation: NavigationArrows;
    navigationFunctions: NavigationFunctions;
    render?: () => React.ReactNode;
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

export interface NavigationFunctions {
    up?: string;
    down?: string;
    left?: string;
    right?: string;
}