/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ConfigProvider } from "antd";
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#afda1a",
            colorBgBase: "#579ADD",
            colorBgContainer: "white",
            colorBorderSecondary: "#a5a299b8",
          },
          components: {
            Tabs: {
              // colorPrimary:'red',
              // colorText: 'black',
              // colorPrimaryHover:'black',
            },
          },
        }}
      >
        <App />
      </ConfigProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
