import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import fontawesome from "@fortawesome/fontawesome";
import fontawesomeFAS from "@fortawesome/fontawesome-free-solid";
import fontawesomeFAR from "@fortawesome/fontawesome-free-regular";

import store from "./redux/store";
import history from "./redux/history";
import App from "./components/App";

import "./index.scss";

fontawesome.library.add(fontawesomeFAS, fontawesomeFAR);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

export default App;
