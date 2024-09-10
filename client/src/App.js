/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import React, { createContext, useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePageView from "./dashboard/HomePageView";
import MarketPlace from "./dashboard/MarketPlaceView";
import Metaverse from "./dashboard/MetaverseView";
import Pi from "./dashboard/PiView";
import Meetings from "./dashboard/MeetingsView";
import CartPageView from "./dashboard/CartPageView";
import WelcomePage from "./dashboard/WelcomePageView";
import LoginPage from "./dashboard/LoginPageView";
import ChatPageView from "./dashboard/ChatPageView";
import axios from "axios";
export const CartData = createContext({ data: null, setData: null });
export const UserContext = createContext({ userData: null, setUserData: null });
export const MsgContext = createContext({ msg: null, setMsg: null });
export const errorTextSignUpSignIn = createContext({
  msgErr: null,
  setMsgErr: null,
});
function App() {
  const [msgErr, setMsgErr] = useState(null);
  const [userData, setUserData] = useState(null);
  const [data, setData] = useState([]);
  const [msg, setMsg] = useState(null);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePageView />,
    },
    {
      path: "/marketplace",
      element: <MarketPlace />,
    },
    {
      path: "/metaverse",
      element: <Metaverse />,
    },
    {
      path: "/pi",
      element: <Pi />,
    },
    {
      path: "/meetings",
      element: <Meetings />,
    },
    {
      path: "/cart",
      element: <CartPageView />,
    },
    {
      path: "/welcome",
      element: <WelcomePage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/chat",
      element: <ChatPageView />,
    },
  ]);
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <errorTextSignUpSignIn.Provider value={{ msgErr, setMsgErr }}>
        <MsgContext.Provider value={{ msg, setMsg }}>
          <CartData.Provider value={{ data, setData }}>
            <RouterProvider router={router} />
          </CartData.Provider>
        </MsgContext.Provider>
      </errorTextSignUpSignIn.Provider>
    </UserContext.Provider>
  );
}
export default App;
