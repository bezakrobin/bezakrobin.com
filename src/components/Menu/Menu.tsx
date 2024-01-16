import React from 'react';
import './MenuStyle.css';

interface MenuItem {
    id: string;
    label: string;
}

interface MenuProps {
    items: MenuItem[];
    activeIndex?: number;
    onMenuItemClick?: (index: number) => void;
}

export const Menu: React.FC<MenuProps> = ({ items, activeIndex, onMenuItemClick }) => {
    return (
        <div className="menu-container">
            <div className="menu">
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className={`menuItem ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => onMenuItemClick && onMenuItemClick(index)}
                    >
                        {item.label}
                    </div>
                ))}
            </div>
        </div>
    );
};