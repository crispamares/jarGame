import React, { useState } from 'react';
import { Ball, BallKind } from './Ball';
import { BallCount } from './BallCount';
import { BallList } from './BallList';
import { Jar } from './Jar';

export const App = () => {

    const [balls, setBalls] = useState<Array<BallKind>>([]);
    const [threshold, setThreshold] = useState<number>(0.5);

    const handleGetBall = (len: number) => {
        const tries: Array<BallKind> = (new Array(len)).fill(0).map(() => {
            const n = Math.random(); 
            return (n > threshold) ? 'purple' : 'orange';
        });
        setBalls([...balls, ...tries]);
    }

    const handleReset = () => {
        setBalls([]);
        setThreshold(0.5);
    }

    const handleThresholdChange: React.ChangeEventHandler<HTMLInputElement> = (ev) => {
        setThreshold(parseFloat(ev.target.value));
    }



    return <>
        <div className="title">
            <h1>Which jar is throwing balls?</h1>
            <h4>How many balls do you need to be sure?</h4>
        </div>
        <div className="jars">
            <Jar threshold={0.5} label="A:"></Jar>
            <Jar threshold={threshold} label="B:" handleThresholdChange={handleThresholdChange}></Jar>
        </div>
        <div className="buttons center">
            <button onClick={() => handleGetBall(1)}>Get a Ball!</button>
            <button onClick={() => handleGetBall(10)}>Get 10 Balls!</button>
            <button onClick={handleReset}>Reset</button>
        </div>
        <BallCount balls={balls}/>
        <BallList balls={balls}/>

    </>
}