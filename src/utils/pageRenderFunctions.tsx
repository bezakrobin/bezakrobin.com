import React from "react";
import {Menu} from "../components/Menu/Menu";
import {PageTitle} from "../components/PageTitle/PageTitle";
import {Spacing} from "../components/Spacing/Spacing";

export const renderHomePage = (): React.ReactNode => (
    <>
        <Spacing key="spacing" direction={"vertical"} spacing={10}/>
        <PageTitle key="pageTitle" text={'Robin Bezak'}/>
        <Menu key="menu" />
    </>
);
