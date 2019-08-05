import { createStore, applyMiddleware, compose } from 'redux'

import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import reducers from '../reducers'
import   history  from '../history'

const enhancers = [];
const middleware = routerMiddleware(history);

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
}

const store = createStore(
    reducers,
    {},
    compose(applyMiddleware(thunk, middleware), ...enhancers)
);

export default store;