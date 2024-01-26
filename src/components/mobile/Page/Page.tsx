import React from "react";
import "./PageStyle.css";

type Props = {
    children: React.ReactNode;
}

export const Page = (props: Props): JSX.Element => {
    return <div className="mobile-page-wrapper">{props.children}</div>;
}