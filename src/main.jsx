import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./store/reducer";

//Create the store
const store = createStore(
  reducer,
  //  This means: if you have the dev tools extension then execute the dev tools extention
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {" "}
      {/* //wraps app in provider */}
      <App />
    </Provider>
  </React.StrictMode>
);
