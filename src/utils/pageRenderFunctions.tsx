import React from "react";
import {Menu} from "../components/Menu/Menu";
import {PageTitle} from "../components/PageTitle/PageTitle";
import {Spacing} from "../components/Spacing/Spacing";
import {HintBottom} from "../components/Hints/HintBottom";

export const renderHomePage = (): React.ReactNode => (
    <>
        <Spacing key="spacing" direction={"vertical"} spacing={10}/>
        <PageTitle key="pageTitle" text={'Robin Bezak'}/>
        <Menu key="menu" />
        <HintBottom />
    </>
);
