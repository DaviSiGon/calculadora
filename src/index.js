import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/Calculator';
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
    <React.stricMode>
        <Calculator />
    </React.stricMode>,
    document.getElementById('root')
);

reportWebVitals