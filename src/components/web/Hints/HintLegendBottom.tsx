import React from 'react';

type Props = {
    hint: string;
    className: string;
}

export const HintLegendBottom = (props: Props) => {
    return <div id="hint-legend-bottom" className={props.className}>{props.hint}</div>;
};
