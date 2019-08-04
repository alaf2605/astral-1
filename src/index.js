import React from 'react';
import { render }from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider} from 'react-redux';
import { ConnectedRouter} from 'connected-react-router';
import * as serviceWorker from './serviceWorker';


render(
    <Provider>
        <ConnectedRouter>
    
    <div>
        <App />

    </div>,
    </ConnectedRouter>

    </Provider>,
    document.getElementById('root')

);
serviceWorker.unregister();
