import React from 'react';
import { Ball, BallKind } from './Ball';

interface Props {
    balls: Array<BallKind>;
}

export const BallList = (props: Props) => {
    return <div className="ballList small">
        {props.balls.map((ball, i) => (
            <Ball key={i} kind={ball}/>
        ))}
    </div>
}