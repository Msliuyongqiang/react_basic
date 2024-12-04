//xiangmu de入口

import React from "react";
import ReactDOM from "react-dom/client";
//导入项目的更目录
import App from "./App";
import store from "./store/index";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
