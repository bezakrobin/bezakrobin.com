import React from "react";
import {Menu} from "../components/web/Menu/Menu";
import {PageTitle} from "../components/web/PageTitle/PageTitle";
import {Spacing} from "../components/web/Spacing/Spacing";
import {HintBottom} from "../components/web/Hints/HintBottom";
import {AlertBottom} from "../components/web/Alerts/AlertBottom";

const showHintBottom = true;
const showAlertBottom = false;

export const renderHomePage = (): React.ReactNode => (
    <>
        <Spacing key="spacing" direction={"vertical"} spacing={10}/>
        <PageTitle key="pageTitle" text={'Robin Bezak'}/>
        <Menu key="menu" />
        {showHintBottom && <HintBottom />}
        {showAlertBottom && <AlertBottom text={"You are already on this page . . ."} />}
    </>
);
