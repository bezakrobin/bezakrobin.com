import React, { useRef } from 'react';
import './MenuStyle.css';
import {useNavigation} from "../../contexts/NavigationContext";
import {capitalizeFirstLetter} from "../../utils/functions";

export const Menu: React.FC = () => {
    const { currentMenuItem, menuItems } = useNavigation();
    const menuItemWidth = 400;
    const menuRef = useRef<HTMLDivElement>(null);

    const generateVisibleItems = () => {
        let visibleItems = [];
        for (let i = -1; i <= 1; i++) {
            let index = (currentMenuItem + i + menuItems.length) % menuItems.length;
            visibleItems.push(menuItems[index]);
        }

        return visibleItems;
    };

    const visibleItems = generateVisibleItems();

    return (
        <div className="menu-container">
            <div className="menu" ref={menuRef}>
                {visibleItems.map((item, index) => (
                    <div
                        key={index}
                        className={`menuItem ${index === 1 ? 'active' : ''}`}
                        style={{
                            transform: `translateX(${index * menuItemWidth - menuItemWidth}px)`
                        }}
                    >
                        {capitalizeFirstLetter(item)}
                    </div>
                ))}
            </div>
        </div>
    );
};