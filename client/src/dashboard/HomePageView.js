/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ShowPsots from "../components/allPosts/ShowPosts";
import CreatePost from "../components/createapost/CreatePost";
import Friends from "../components/friends/Friends";
import HeaderComponent from "../components/header/Header";
import Storys from "../components/storys/Storys";
import { UserContext } from "../App.js";

const HomePageView = () => {
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(UserContext);
  const userDatafunc = async () => {
    try {
      const allDataUser = await axios.get("/api/v1/userdata");
      setUserData(allDataUser.data);
    } catch (err) {
      navigate("/welcome");
    }
  };

  useEffect(() => {
    userDatafunc();
  }, []);
  return (
    <>
      <HeaderComponent />
      <div
        style={{
          background: "#A5A2991A",
        }}
      >
        <div className="rootContuner">
          <Storys />
          <Friends />
          <CreatePost />
          <ShowPsots />
        </div>
      </div>
    </>
  );
};

export default HomePageView;
