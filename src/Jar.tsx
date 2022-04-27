import React from 'react';
import { Ball } from './Ball';

interface Props {
    threshold: number;
    label: string;
    handleThresholdChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const Jar = (props: Props) => {

    const { threshold, handleThresholdChange, label } = props;

    return <div className="jar">
        <span>{label}</span>
        <Ball v={1 - threshold} kind='purple'></Ball>
        <input type="range" min="0" max="1" step="0.01" value={threshold} onChange={handleThresholdChange} />
        <Ball v={threshold} kind='orange'></Ball>
    </div>
}