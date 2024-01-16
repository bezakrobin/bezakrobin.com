import React from 'react';
import './PageStyle.css';

interface PageProps {
    children?: React.ReactNode;
}

export const Page: React.FC<PageProps> = ({ children }) => {
    return (
        <div className="page">
            {children}
        </div>
    );
};