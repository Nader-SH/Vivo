import "./App.css";
import React, { createContext, useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useCookies } from "react-cookie";
import HomePageView from "./dashboard/HomePageView";
import MarketPlace from "./dashboard/MarketPlaceView";
import Metaverse from "./dashboard/MetaverseView";
import Pi from "./dashboard/PiView";
import Meetings from "./dashboard/MeetingsView";
import CartPageView from "./dashboard/CartPageView";
import WelcomePage from "./dashboard/WelcomePageView";
import LoginPage from "./dashboard/LoginPageView";
export const CartData = createContext({ data: null, setData: null });

function App() {
  const [data, setData] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  console.log(cookies.token);

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
  ]);
  return (
    <CartData.Provider value={{ data, setData }}>
      <RouterProvider router={router} />
    </CartData.Provider>
  );
}
export default App;
