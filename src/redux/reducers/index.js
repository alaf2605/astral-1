import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import todo from "./todo";
import history from "../history";

export default combineReducers({
  router: connectRouter(history),
  todo,
});
