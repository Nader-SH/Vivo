/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import Cart from "../components/cart/Cart";
import HeaderComponent from "../components/header/Header";
import { UserContext } from "../App.js";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import axios from "axios";

const CartPageView = () => {
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
    <div
      style={{
        background: "rgba(165, 162, 153, 0.1)",
        height: "833px", // هبد
      }}
    >
      <div>
        <HeaderComponent />
        <div
          className="contantCart"
          style={{
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default CartPageView;
