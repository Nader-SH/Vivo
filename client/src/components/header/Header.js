/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  BellOutlined,
  MessageOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Image,
  Input,
  Button,
  Avatar,
  theme,
  Badge,
  Divider,
  Dropdown,
  Typography,
  Card,
  Checkbox,
  Row,
  Col,
} from "antd";
import { CartData } from "../../App";
import logo from "../../assets/vivo.png";
import person from "../../assets/Friend.png";
import vverse from "../../assets/vimeo.png";
import HomeSvg from "../svg/HomeSvg";
import Img2Svg from "../svg/Img2Svg";
import Img3Svg from "../svg/Img3Svg";
import Img4Svg from "../svg/Img4Svg";
import Img5Svg from "../svg/Img5Svg";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../../App.js";
import axios from "axios";

const { useToken } = theme;

const navButtons = [
  {
    id : 1,
    name: "",
    icon: HomeSvg,
  },
   {
    id : 2,
    name: 'metaverse',
    icon: Img2Svg
  }, {
    id : 3,
    name: 'pi',
    icon: Img3Svg
  }, {
    id : 4,
    name: 'meetings',
    icon: Img4Svg
  },
  {
    id : 5,
    name: "marketplace",
    icon: Img5Svg,
  },
];
const HeaderComponent = () => {
  const { userData, setUserData } = React.useContext(UserContext);
  const { data, setData } = useContext(CartData);
  const [imageUser,setImageUser] = useState(<Avatar size={50} icon={<UserOutlined />} />);
  const { token } = useToken();
  const colors = `linear-gradient(270deg,${token.colorBgBase},${token.colorPrimary})`;
  let location = useLocation();
  let splitedUrl = location.pathname.split("/")[1];
  const [activeBut, setActiveBut] = useState(1);
  const [endPointMark, setEndPointMark] = useState(splitedUrl);
  const [total, setTotal] = useState(0);
  const [dataNum, setDataNum] = useState(0);
  const [hovred, setHovred] = useState(false);
useEffect(()=>{
if (userData === null){
  setImageUser(<Avatar size={50} src={userData?.user_image} />)
}
},[userData])
  useEffect(() => {
    data === undefined || data.length === 0
      ? setDataNum(0)
      : setDataNum(data.length);
    data === undefined || data.length === 0
      ? console.log("no data in Cart")
      : countTotalPrice(data);
  }, [data]);
  useEffect(() => {
    setActiveBut(activeBut);
    setEndPointMark(endPointMark);
    if (splitedUrl === "") {
      setActiveBut(1);
    } else if (splitedUrl === "marketplace") {
      setActiveBut(5);
    } else if (splitedUrl === "pi") {
      setActiveBut(3);
    } else if (splitedUrl === "meetings") {
      setActiveBut(4);
    } else if (splitedUrl === "metaverse") {
      setActiveBut(2);
    }
  }, [endPointMark, activeBut, splitedUrl]);

  const countTotalPrice = (data) => {
    let sum = 0;
    data.forEach(function (e) {
      sum += e.price * e.quantity;
    });
    setTotal(sum);
  };
  useEffect(()=>{
    if (userData === null) {
      return;
    } else {
      if (userData?.user_image !== "UserOutlined") {
        setImageUser(<Avatar size={50} src={userData.user_image} />);
      }
    }
  },[userData])

  return (
    <Row
      justify="space-between"
      align="middle"
      wrap={true}
      style={{
        background: "white",
      }}
    >
      <Col xs={20} md={10} lg={10} xl={8}>
        <Row wrap={false} gutter={24}>
          <Col xs={0} sm={0} md={0} lg={12} xl={10}>
            <Link to="/">
              <Image
                src={logo}
                width={160}
                height={45}
                preview={false}
                style={{
                  marginLeft: "10px",
                }}
              />
            </Link>
          </Col>
          <Link to="/">
            <Col xs={6} sm={6} md={8} lg={0} xl={0}>
              <Image
                src={vverse}
                width={35}
                preview={false}
                style={{
                  margin: "5px",
                }}
              />
            </Col>
          </Link>
          <Col
            xs={20}
            sm={22}
            md={16}
            lg={14}
            xl={16}
            style={{
              paddingLeft: "12px",
              display: "flex",
              paddingRight: "12px",
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <Input
              size="large"
              className="search-input"
              placeholder="Search.."
              prefix={<SearchOutlined />}
            />
          </Col>
        </Row>
      </Col>
      <Col
        xs={{ span: 24, order: 1 }}
        md={{ span: 10, order: 0 }}
        lg={{ span: 8, order: 0 }}
        xl={{ span: 8, order: 0 }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {navButtons.map((e, index) => (
          <Link to={`/${e.name}`} key={e.id}>
            <Button
              className={`headerIcons ${
                endPointMark === "" ? "headerIconsActive" : ""
              }`}
              style={{
                borderBottom: `${
                  endPointMark === e.name ? "3px solid transparent" : ""
                }`,
                borderImage: `${endPointMark === e.name ? `${colors}` : ""}`,
                borderImageSlice: `${endPointMark === e.name ? index + 1 : ""}`,
              }}
              onClick={() => setActiveBut(index + 1)}
            >
              <e.icon activeBut={activeBut} endPointMark={endPointMark} />
            </Button>
          </Link>
        ))}
      </Col>
      <Col xs={4}>
        <Row wrap={false} align="middle" justify="center">
          <Col xs={0} md={0} lg={0} xl={6}>
            <Button type="text" className="leftSideHeader">
              <BellOutlined />
            </Button>
          </Col>
          <Link to="/chat">
          <Col xs={0} md={0} lg={0} xl={6}>
            <Button type="text" className="leftSideHeader">
              <MessageOutlined />
            </Button>
          </Col>
          </Link>

          <Col xs={0} md={0} lg={0} xl={6}>
            <Button
              className="leftSideHeader"
              type="text"
              onClick={(e) => e.preventDefault()}
            >
              <Badge
                count={data ? data.length : ""}
                style={{
                  background: "rgb(147, 200, 80)",
                }}
              >
                <Dropdown
                  className="myCartDataIn"
                  menu={{
                    items,
                  }}
                  placement="bottomLeft"
                  trigger={["click"]}
                  autoFocus={false}
                  dropdownRender={(menu) => (
                    <div
                      style={{
                        background: "white",
                        borderRadius: "16px",
                        boxShadow: "0 3px 6px rgb(0 0 0 / 16%)",
                        width: "auto",
                      }}
                    >
                      <Divider
                        style={{
                          margin: "20px",
                        }}
                      />
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          margin: "10px",
                        }}
                      >
                        <Typography
                          style={{
                            fontSize: "1.8rem",
                            fontWeight: "bold",
                            padding: "5px",
                            opacity: "0.9",
                          }}
                        >
                          Cart
                        </Typography>
                        <Typography
                          style={{
                            maxWidth: "100%",
                            position: "relative",
                            padding: "10px",
                            fontWeight: "bold",
                            opacity: "0.7",
                            fontSize: "16px",
                          }}
                        >
                          {dataNum} items
                        </Typography>
                      </div>
                      {data === undefined || data?.length === 0 ? (
                        <>
                          <hr
                            style={{
                              margin: "10px",
                              background: "gray",
                              opacity: "0.5",
                            }}
                          />
                          <Typography
                            style={{
                              overflowWrap: "break-word",
                              fontSize: "1.75rem",
                              textAlign: "center",
                              fontWeight: "bold",
                              opacity: "0.5",
                              border: "absolute",
                              padding: "20px 50px",
                            }}
                          >
                            Cart Is Empty !
                          </Typography>

                          {splitedUrl === "cart" ? (
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <Link to="/marketplace">
                                <Button
                                  className="teansparentText"
                                  onMouseEnter={() => {
                                    setHovred(true);
                                  }}
                                  onMouseLeave={() => {
                                    setHovred(false);
                                  }}
                                  type="text"
                                  style={{
                                    width: "350px",
                                    height: "3.5rem",
                                    fontSize: "1rem",
                                    fontWeight: "bold",
                                    margin: "10px",
                                    background: `${
                                      hovred === true ? colors : ""
                                    }`,
                                  }}
                                >
                                  Back To Shop
                                </Button>
                              </Link>
                            </div>
                          ) : (
                            ""
                          )}
                        </>
                      ) : (
                        data?.map((e) => (
                          <>
                            <Card
                            key="item"
                              className="divCard"
                              bordered={true}
                              style={{
                                border: "0px",
                                margin: "10px",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <Checkbox
                                    checked={e.checked}
                                    onClick={() => {
                                      if (e.checked === false) {
                                        e.checked = true;
                                        setData([...data]);
                                      } else {
                                        e.checked = false;
                                        setData([...data]);
                                      }
                                    }}
                                  ></Checkbox>
                                </div>
                                <div>
                                  <Image
                                    preview={false}
                                    style={{
                                      height: "75px",
                                      width: "75px",
                                      borderRadius: "16px",
                                    }}
                                    src={e.itemPic}
                                  ></Image>
                                </div>
                                <div
                                  style={{
                                    width: "auto",
                                  }}
                                >
                                  <div>
                                    <Typography>
                                      <strong
                                        style={{
                                          fontWeight: "bold",
                                          fontSize: "16px",
                                        }}
                                      >
                                        {e.itemName}
                                      </strong>
                                    </Typography>
                                  </div>
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "space-between",
                                    }}
                                  >
                                    <div>
                                      <Typography>
                                        <span
                                          style={{
                                            fontWeight: "bold",
                                            opacity: "0.5",
                                            fontSize: "16px",
                                          }}
                                        >
                                        
                                          Qty :
                                        </span>
                                        <span
                                          style={{
                                            fontWeight: "bold",
                                            fontSize: "16px",
                                          }}
                                        >
                                          {e.quantity}
                                        </span>
                                      </Typography>
                                    </div>
                                    <div>
                                      <Typography>
                                        <span
                                          style={{
                                            fontWeight: "bold",
                                            opacity: "0.5",
                                            fontSize: "16px",
                                          }}
                                        >
                                          Size :
                                        </span>{" "}
                                        <span
                                          style={{
                                            fontWeight: "bold",
                                            fontSize: "16px",
                                          }}
                                        >
                                          {e.size}
                                        </span>
                                      </Typography>
                                    </div>
                                  </div>
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "space-between",
                                      fontSize: "16px",
                                    }}
                                  >
                                    <Typography>
                                      <span
                                        style={{
                                          fontWeight: "bold",
                                          opacity: "0.5",
                                          fontSize: "16px",
                                        }}
                                      >
                                        Color :
                                      </span>
                                      <span
                                        style={{
                                          fontWeight: "bold",
                                          fontSize: "16px",
                                        }}
                                      >
                                        {e.color}
                                      </span>
                                    </Typography>
                                  </div>
                                </div>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <Typography>
                                    <strong
                                      style={{
                                        fontWeight: "bold",
                                        fontSize: "17px",
                                      }}
                                    >
                                      ${e.price}
                                    </strong>
                                  </Typography>
                                </div>
                              </div>
                            </Card>
                            <hr
                              style={{
                                color: "gray",
                                margin: "15px",
                                opacity: "0.5",
                              }}
                            />
                          </>
                        ))
                      )}
                      {data === undefined || data.length === 0 ? (
                        ""
                      ) : (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            margin: "20px",
                          }}
                        >
                          <div
                            style={{
                              fontSize: "0.9rem",
                              fontWeight: "bold",
                              opacity: "0.7",
                            }}
                          >
                            Subtotal
                          </div>
                          <div
                            style={{
                              fontWeight: "bold",
                              fontSize: "0.9rem",
                            }}
                          >
                            ${total}
                          </div>
                        </div>
                      )}
                      {data === undefined || data.length === 0 ? (
                        <Typography></Typography>
                      ) : (
                        <>
                          {splitedUrl === "cart" ? (
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <Link to="/marketplace">
                                <Button
                                  className="teansparentText"
                                  onMouseEnter={() => {
                                    setHovred(true);
                                  }}
                                  onMouseLeave={() => {
                                    setHovred(false);
                                  }}
                                  type="text"
                                  style={{
                                    width: "350px",
                                    height: "3.5rem",
                                    fontSize: "1rem",
                                    fontWeight: "bold",
                                    margin: "10px",
                                    background: `${
                                      hovred === true ? colors : ""
                                    }`,
                                  }}
                                >
                                  Back To Shop
                                </Button>
                              </Link>
                            </div>
                          ) : (
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <Link to="/cart">
                                <Button
                                  className="teansparentText"
                                  onMouseEnter={() => {
                                    setHovred(true);
                                  }}
                                  onMouseLeave={() => {
                                    setHovred(false);
                                  }}
                                  type="text"
                                  style={{
                                    width: "350px",
                                    height: "3.5rem",
                                    fontSize: "1rem",
                                    fontWeight: "bold",
                                    margin: "10px",
                                    background: `${
                                      hovred === true ? colors : ""
                                    }`,
                                  }}
                                >
                                  View Cart
                                </Button>
                              </Link>
                            </div>
                          )}

                          <div>
                            <Button
                              style={{
                                width: "350px",
                                margin: "10px",
                                height: "3.5rem",
                                fontSize: "1rem",
                                background: `${colors}`,
                                color: "white",
                                fontWeight: "bold",
                                border: "none",
                              }}
                              type="text"
                            >
                              Checkout
                            </Button>
                          </div>
                        </>
                      )}
                    </div>
                  )}
                >
                  <ShoppingCartOutlined
                    style={{
                      fontSize: "20px",
                      height: "auto",
                      border: "none",
                      color: "#a7a7a7",
                    }}
                  />
                </Dropdown>
              </Badge>
            </Button>
          </Col>
          <Col xs={4}>
            {imageUser}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default HeaderComponent;

const items = [
  {
    key: "1",
    label: "",
  },
];
