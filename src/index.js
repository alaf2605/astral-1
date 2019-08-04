import React from 'react';
import { render }from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';


render(
    <div>
        <App />

    </div>
    document.getElementById('root')

);
serviceWorker.unregister();
