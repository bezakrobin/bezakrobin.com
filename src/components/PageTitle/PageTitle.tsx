import React from 'react';
import './PageTitleStyle.css';

interface PageTitleProps {
    text: string;
}

export const PageTitle: React.FC<PageTitleProps> = ({ text }) => {

    return (
        <h1 className="pageTitle">{text}</h1>
    );
};