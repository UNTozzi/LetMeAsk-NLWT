import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './services/firebase.ts';

import './styles/global.scss';

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
