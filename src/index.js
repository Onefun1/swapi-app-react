import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import { BASE_URL } from './config'
import './index.css';
import App from './App';


ReactDOM.render(
<BrowserRouter basename={BASE_URL}>
<App />
</BrowserRouter>
, document.getElementById('root')
);


