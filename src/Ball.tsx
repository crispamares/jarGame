import React from 'react';

export type BallKind = 'purple' | 'orange';


export const Ball = (props: { v?: number, kind: BallKind }) => {

    const formatPercentage = (n: number) => (`${Math.round(n * 100)}%`);

    return <div className={`ball ${props.kind === 'purple' ? 'purple' : 'orange'}`}>
        {props.v != null && formatPercentage(props.v)}
    </div>
}