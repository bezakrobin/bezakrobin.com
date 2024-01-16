import React, { useRef } from 'react';
import './MenuStyle.css';
import { useAppContext } from '../../contexts/AppContext';

export const Menu: React.FC = () => {
    const { selectedMenuItemIndex, setActiveIndex, items } = useAppContext();
    const menuItemWidth = 400;
    const menuRef = useRef<HTMLDivElement>(null);

    const generateVisibleItems = () => {
        let visibleItems = [];
        for (let i = -1; i <= 1; i++) {
            let index = (selectedMenuItemIndex + i + items.length) % items.length;
            visibleItems.push(items[index]);
        }

        return visibleItems;
    };

    const visibleItems = generateVisibleItems();

    return (
        <div className="menu-container">
            <div className="menu" ref={menuRef}>
                {visibleItems.map((item, index) => (
                    <div
                        key={item.id}
                        className={`menuItem ${index === 1 ? 'active' : ''}`}
                        onClick={() => setActiveIndex(items.indexOf(item))}
                        style={{
                            transform: `translateX(${index * menuItemWidth - menuItemWidth}px)`
                        }}
                    >
                        {item.label}
                    </div>
                ))}
            </div>
        </div>
    );
};