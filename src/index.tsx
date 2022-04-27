import * as React from 'react';
import ReactDom from 'react-dom/client';
import { App } from './App';

const container = document.querySelector('.container');

const root = ReactDom.createRoot(container);
root.render(<App></App>);
