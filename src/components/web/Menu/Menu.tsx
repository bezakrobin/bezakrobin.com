import React, { useEffect, useRef, useMemo } from 'react';
import './MenuStyle.css';
import {useNavigation} from "../../../contexts/NavigationContext";
import {capitalizeFirstLetter} from "../../../utils/functions";

export const Menu: React.FC = () => {
    const {menuItems, menuAnimation, currentMenuItem} = useNavigation();
    const menuItemWidth = 400;
    const visibleItemsCount = 3;
    const menuRef = useRef<HTMLDivElement>(null);

    const duplicatedMenuItems = useMemo(() => {
        return [
            ...menuItems,
            ...menuItems,
            ...menuItems,
        ];
    }, [menuItems]);

    const totalItems = duplicatedMenuItems.length;
    const totalWidth = totalItems * menuItemWidth;

    const initialOffset = -menuItemWidth * visibleItemsCount;

    useEffect(() => {
        if (menuRef.current) {
            menuRef.current.style.width = `${totalWidth}px`;
            menuRef.current.style.transform = `translateX(${initialOffset}px)`;
        }
    }, [totalWidth, initialOffset]);

    useEffect(() => {
        if(menuRef.current){
            let newTransformValue = parseInt(menuRef.current.style.transform.replace('translateX(', ''));
            menuRef.current.style.transition = 'none';

            if(menuAnimation === 'previous'){
                newTransformValue += menuItemWidth;
                if (currentMenuItem !== 0) {
                    menuRef.current.style.transition = 'transform 0.5s ease-in-out';
                }
                if (currentMenuItem === 0) {
                    menuRef.current.style.transition = 'transform 0s';
                    const lastSet = duplicatedMenuItems.slice(-menuItems.length);
                    duplicatedMenuItems.unshift(...lastSet);
                    duplicatedMenuItems.splice(-menuItems.length, menuItems.length);
                    newTransformValue -= 2400;
                    setTimeout(() => {
                        if (menuRef.current) {
                            newTransformValue += menuItemWidth;
                            menuRef.current.style.transition = 'transform 0.5s ease-in-out';
                            menuRef.current.style.transform = `translateX(${newTransformValue}px)`;
                        }
                    }, 10);
                }
            } else {
                newTransformValue -= menuItemWidth;
                if (currentMenuItem !== 4) {
                    menuRef.current.style.transition = 'transform 0.5s ease-in-out';
                }
                if (currentMenuItem === 4) {
                    menuRef.current.style.transition = 'transform 0s';
                    const firstSet = duplicatedMenuItems.splice(0, menuItems.length);
                    duplicatedMenuItems.push(...firstSet);
                    newTransformValue += 2400;
                    setTimeout(() => {
                        if (menuRef.current) {
                            newTransformValue -= menuItemWidth;
                            menuRef.current.style.transition = 'transform 0.5s ease-in-out';
                            menuRef.current.style.transform = `translateX(${initialOffset}px)`;
                        }
                    }, 10);
                }
            }
            menuRef.current.style.transform = `translateX(${newTransformValue}px)`;
        }
    }, [menuAnimation, menuItemWidth, currentMenuItem, menuItems.length, duplicatedMenuItems]);

    return (
        <div className="menu-container">
            <div className="menu" ref={menuRef}>
                {duplicatedMenuItems.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={`menuItem ${index % menuItems.length === currentMenuItem ? 'active' : ''}`}
                            style={{
                                left: `${index * menuItemWidth}px`
                            }}
                        >
                            {capitalizeFirstLetter(item)}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};