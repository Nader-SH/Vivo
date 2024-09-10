/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import WelcomeComponents from "../components/welcome/Welcome";
import { UserContext } from "../App.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const WelcomePage = () => {
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
      <div>
        <WelcomeComponents />
      </div>
    </>
  );
};

export default WelcomePage;
