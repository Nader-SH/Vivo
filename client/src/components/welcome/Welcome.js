import "./style.css";
import { Button, Col, Image, Row, theme } from "antd";
import logo from "../../assets/vimeo.png";
import nameLogo from "../../assets/vivo.png";
import PhoneSvge from "../svg/PhoneSvg";
import mapOfWorld from  "../../assets/mapOfWorld.png";
import { Link, useNavigate } from 'react-router-dom';
import {UserContext} from "../../App.js";
import React, { useEffect } from "react";
import axios from "axios";
const { useToken } = theme;
// xs={16} md={16} lg={16} xl={16}
const Welcome = () => {
  const navigate = useNavigate();
  const { token } = useToken();
  const { userData, setUserData } = React.useContext(UserContext);
  const colors = `linear-gradient(270deg,${token.colorBgBase},${token.colorPrimary})`;
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
    if(userData !== null){
      navigate("/");
    }
  }, [userData])
  return (
    <div className="backgroundImage" style={{
      background: `url( ${ mapOfWorld }`,
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
    }}>
      <Row style={{
        marginBottom:'100px'
      }}>
        <Col
          xs={24}
          md={24}
          lg={24}
          xl={24}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          
        >
          <Image width={90} src={logo} preview={false} />
        </Col>
        <Col
          xs={24}
          md={24}
          lg={24}
          xl={24}
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "15px",
          }}
        >
          <Image width={160} src={nameLogo} preview={false} />
        </Col>
      </Row>
      <Row
        style={{
          justifyContent: "center",
        }}
      >
        <Col xs={22} sm={24} md={24} lg={24} xl={24}>
        <Link to ='/login'>
          <Button
            type="primary"
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "auto",
              width: "90%",
              height: "auto",
              background: colors,
              border: "0xp",
              color: "white",
            }}
          >
            <span
              style={{
                padding: "10px 100px",
                fontSize: "14px",
              }}
            >
              Sing in
            </span>
          </Button>
          </Link>
          <Button className="contactButton">
            <span
              className="gradianColorText"
              style={{
                padding: "10px 100px",
                fontSize: "16px",
              }}
            >
              <PhoneSvge /> Connect with Phone
            </span>
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Welcome;
