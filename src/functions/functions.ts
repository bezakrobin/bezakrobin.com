export const handleArrowUpMouseUp = () => {
    console.log('ARROW UP mouse up');
};

export const handleArrowDownMouseUp = () => {
    console.log('ARROW DOWN mouse up');
};

export const handleArrowLeftMouseUp = () => {
    console.log('ARROW LEFT mouse up');
};

export const handleArrowRightMouseUp = () => {
    console.log('ARROW RIGHT mouse up');
};

export const handleArrowUpKeyUp = () => {
    console.log('ARROW UP key up');
};

export const handleArrowDownKeyUp = () => {
    console.log('ARROW DOWN key up');
};

export const handleArrowLeftKeyUp = () => {
    console.log('ARROW LEFT key up');
};

export const handleArrowRightKeyUp = () => {
    console.log('ARROW RIGHT key up');
};

export const isMobile = (): boolean => {
    const mobileWidthThreshold = 768;
    return window.innerWidth < mobileWidthThreshold;
};