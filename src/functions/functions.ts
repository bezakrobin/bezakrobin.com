export const isMobile = (): boolean => {
    const mobileWidthThreshold = 768;
    return window.innerWidth < mobileWidthThreshold;
};