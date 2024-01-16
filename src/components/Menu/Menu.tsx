import React, { useEffect, useState, useRef } from 'react';
import './MenuStyle.css';
import { useAppContext } from '../../contexts/AppContext';

export const Menu: React.FC = () => {
    const { selectedMenuItemIndex, setActiveIndex, items } = useAppContext();
    const menuItemWidth = 100; // Fixed width of each menu item
    const menuRef = useRef<HTMLDivElement>(null);
    const [menuWidth, setMenuWidth] = useState(0);

    useEffect(() => {
        if (menuRef.current) {
            setMenuWidth(menuRef.current.offsetWidth);
        }
    }, []);

    return (
        <div className="menu-container">
            <div className="menu" ref={menuRef}>
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className={`menuItem ${index === selectedMenuItemIndex ? 'active' : ''}`}
                        onClick={() => setActiveIndex(index)}
                        style={{
                            transform: `translateX(${(index - selectedMenuItemIndex) * menuItemWidth + menuWidth / 2 - menuItemWidth / 2}px)`
                        }}
                    >
                        {item.label}
                    </div>
                ))}
            </div>
        </div>
    );
};
