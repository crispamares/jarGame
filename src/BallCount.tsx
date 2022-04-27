import React from 'react';
import { Ball, BallKind } from './Ball';
// import { goodnessOfFit } from './chiSquare';

export const BallCount = (props: { balls: Array<BallKind> }) => {
    const { balls } = props;
    
    
    const purpleCount = balls.filter(b => b === 'purple').length;
    const orangeCount = balls.filter(b => b === 'orange').length;
    const purplePerc = purpleCount / balls.length;
    const orangePerc = orangeCount / balls.length;
    
    // const { value, pValue } = goodnessOfFit([purpleCount, orangeCount], [balls.length/2, balls.length/2]);

    if (balls.length === 0) return null;

    return <div className='center'>
        {`${balls.length} balls: `}
        <Ball v={purplePerc} kind={'purple'}></Ball>
        vs
        <Ball v={orangePerc} kind={'orange'}></Ball>
        {/* {`value: ${value.toFixed(2)} p-Value: ${pValue.toFixed(4)}`} */}
    </div>
}