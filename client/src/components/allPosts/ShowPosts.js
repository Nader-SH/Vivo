/* eslint-disable no-unused-vars */
import "./style.css";
import Typography from "antd/es/typography/Typography";
import React, { useContext, useEffect, useState } from "react";
import ReactTimeAgo from "react-time-ago";
import {
  Avatar,
  Button,
  Col,
  Dropdown,
  Form,
  Image,
  Input,
  Row,
  theme,
} from "antd";
import { MoreOutlined, UserOutlined } from "@ant-design/icons";
import { IoMdShareAlt } from "react-icons/io";
import { BiCommentDetail } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { RiSendPlaneFill } from "react-icons/ri";
import { LoadingOutlined } from "@ant-design/icons";
import Comments from "./Comments.js";
import { Spin } from "antd";
import TimeAgo from "javascript-time-ago";
import { UserContext } from "../../App.js";
import en from "javascript-time-ago/locale/en.json";
import { MsgContext } from "../../App.js";
import axios from "axios";
const { useToken } = theme;

const ShowPsots = () => {
  TimeAgo.addDefaultLocale(en);
  const { userData, setUserData } = React.useContext(UserContext);
  const { msg, setMsg } = useContext(MsgContext);
  const [comment, setComment] = useState("");
  const [postId, setPostId] = useState();
  const { token } = useToken();
  const [form] = Form.useForm();
  const [errorReaquireText, setErrorReaquireText] = useState("");
  const [errorReaquireColor, setErrorReaquireColor] = useState("");
  const [dataPostAll, setDataPostAll] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setIsLoading] = useState(false);
  const [imageUser, setImageUser] = useState(
    <Avatar size={50} icon={<UserOutlined />} />
  );
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 40,
      }}
      spin
    />
  );
  useEffect(() => {
    fetchData();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`/api/v1/getposts/?page=${page}`);
        setDataPostAll(response.data.rows);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
        setMsg(null);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [msg]);
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`/api/v1/getposts/?page=${page}`);
      setDataPostAll(dataPostAll.concat(response.data.rows));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      setMsg(null);
    }
  };

  const fetchDataNormal = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`/api/v1/getposts/?page=${page}`);
      setDataPostAll(response.data.rows);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 20) {
      setPage(page + 1);
    }
  };

  const getComment = async () => {
    if (comment === "") {
      setErrorReaquireText("Please input description!");
      setErrorReaquireColor("error");
      return;
    } else {
      try {
        await axios.post("/api/v1/addcomment", {
          text_comment: comment,
          post_id: postId,
        });
        fetchDataNormal();
      } catch (error) {
        console.error(error);
      }
      setErrorReaquireText("");
      setErrorReaquireColor("");
      form.resetFields();
    }
  };

  return (
    <div
      style={{
        background: "white",
        marginTop: "20px",
        borderRadius: "12px",
      }}
    >
      {dataPostAll.map((e) => (
        <Row key={e.id}>
          <Col
            span={24}
            style={{
              margin: "20px",
            }}
          >
            <Row wrap={false}>
              <Col xs={4} sm={3} md={2} lg={2} xl={2}>
                {e.User.user_image === "UserOutlined" ? (
                  <Avatar size={50} icon={<UserOutlined />} />
                ) : (
                  <Avatar size={50} src={e.User.user_image} />
                )}
              </Col>
              <Col xs={14} sm={19} md={20} lg={20} xl={20}>
                <Typography
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                  }}
                >
                  {e.User.user_name}
                </Typography>
                <Typography
                  style={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                    opacity: "0.5",
                  }}
                >
                  <ReactTimeAgo date={e.createdAt} locale="en-US" />
                </Typography>
              </Col>
              <Col xs={4} sm={4} md={4} lg={2} xl={2}>
                <Dropdown
                  menu={{
                    items,
                  }}
                  placement="bottom"
                  trigger="click"
                >
                  <Button
                    style={{
                      border: "0px",
                      fontWeight: "bold",
                      fontSize: "20px",
                      color: "black",
                    }}
                  >
                    <MoreOutlined />
                  </Button>
                </Dropdown>
              </Col>
            </Row>
            <Row>
              {e.images_post === "" ? (
                ""
              ) : (
                <Col
                  xs={23}
                  sm={23}
                  md={23}
                  lg={23}
                  xl={23}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image width="360px" src={e.images_post} />
                </Col>
              )}
              <Col xs={23} sm={23} md={23} lg={23} xl={23} offset={1}>
                <Typography
                  style={{
                    fontSize: "1.2rem",
                    textAlign: "start",
                    fontWeight: "500",
                    marginTop: "20px",
                  }}
                >
                  {e.text_post}
                </Typography>
              </Col>
            </Row>
            <Row>
              <Col span={21} offset={1}>
                <AiFillHeart
                  style={{
                    color: "red",
                    marginTop: "15px",
                    fontSize: "20px",
                  }}
                />
                {e.likes}
              </Col>
            </Row>
          </Col>
          <hr
            style={{
              opacity: "0.5",
              width: "95%",
            }}
          />
          <Col span={21} offset={1}>
            <Row wrap={false}>
              <Col
                xs={5}
                sm={5}
                md={6}
                lg={6}
                xl={6}
                style={{
                  display: "flex",
                }}
              >
                <AiFillHeart
                  style={{
                    color: "red",
                    fontSize: "25px",
                  }}
                />
                <Typography
                  style={{
                    display: "flex",
                    fontSize: "1.2em",
                    fontWeight: "650",
                    opacity: "0.7",
                  }}
                >
                  Like
                </Typography>
              </Col>
              <Col
                xs={7}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                style={{
                  display: "flex",
                }}
              >
                <BiCommentDetail
                  style={{
                    color: "gray",
                    fontSize: "25px",
                    opacity: "0.7",
                  }}
                />
                <Typography
                  style={{
                    display: "flex",
                    fontSize: "1.2em",
                    fontWeight: "650",
                    opacity: "0.7",
                  }}
                >
                  Comment
                </Typography>
              </Col>
              <Col
                xs={6}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                style={{
                  display: "flex",
                }}
              >
                <IoMdShareAlt
                  style={{
                    color: "gray",
                    fontSize: "25px",
                    opacity: "0.7",
                  }}
                />
                <Typography
                  style={{
                    display: "flex",
                    fontSize: "1.2em",
                    fontWeight: "650",
                    opacity: "0.7",
                  }}
                >
                  Share
                </Typography>
              </Col>
              <Col
                xs={6}
                sm={6}
                md={6}
                lg={2}
                xl={2}
                style={{
                  display: "flex",
                }}
              >
                <RiSendPlaneFill
                  style={{
                    color: "gray",
                    fontSize: "25px",
                    opacity: "0.7",
                  }}
                />
                <Typography
                  style={{
                    display: "flex",
                    fontSize: "1.2em",
                    fontWeight: "650",
                    opacity: "0.7",
                  }}
                >
                  Send
                </Typography>
              </Col>
            </Row>
          </Col>
          <hr
            style={{
              opacity: "0.5",
              width: "95%",
            }}
          />
          <Col span={24}>
            <Form form={form}>
              <Row>
                <Col xs={4} sm={2} md={2} lg={2} xl={1}>
                  {userData?.user_image === "UserOutlined" ? (
                    <Avatar size={50} icon={<UserOutlined />} />
                  ) : (
                    <Avatar size={50} src={userData?.user_image} />
                  )}
                </Col>
                <Col xs={14} sm={18} md={19} lg={19} xl={20}>
                  <Form.Item
                    name="note"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input
                      onChange={(s) => {
                        setComment(s.target.value);
                        setPostId(e.id);
                      }}
                      status={errorReaquireColor}
                      placeholder="Write a Comment"
                      style={{
                        padding: "10px",
                        borderRadius: "20px",
                      }}
                    />
                    <Typography
                      style={{
                        color: "red",
                      }}
                    >
                      {errorReaquireText}
                    </Typography>
                  </Form.Item>
                </Col>
                <Col xs={5} sm={4} md={3} lg={3} xl={3}>
                  <Form.Item
                    name="note"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Button
                      onClick={getComment}
                      type="primary"
                      style={{
                        background: `linear-gradient(270deg,${token.colorPrimary},${token.colorBgBase})`,
                        height: "auto",
                        margin: "1px",
                      }}
                    >
                      Comment
                    </Button>
                  </Form.Item>
                </Col>
                <Col
                  style={{
                    width: "100%",
                  }}
                >
                  <Row
                    style={{
                      width: "100%",
                    }}
                  >
                    <Col
                      style={{
                        width: "100%",
                      }}
                    >
                      {e.Comments.length === 0
                        ? 
                        <Typography style={{
                          fontWeight:'bold',
                          textAlign:'center',
                          fontSize:'18px',
                        }}>
                          No Comments Yet
                        </Typography>
                        : e.Comments.map((comment) => (
                            <Comments
                              key={comment.id}
                              comment={comment}
                              fetchDataNormal={fetchDataNormal}
                              style={{
                                width: "100%",
                              }}
                            />
                          ))}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      ))}
      <Row>
        <Col span={24}>
          {loading && (
            <Spin
              style={{
                display: "flex",
                justifyContent: "center",
              }}
              indicator={antIcon}
            />
          )}
        </Col>
      </Row>
    </div>
  );
};

export default ShowPsots;

const items = [
  {
    key: "1",
    label: "Delete",
    onClick: finCal,
  },
];

function finCal() {
  return;
}

// {
//   "id": 27,
//   "text_post": "Gait Training/Functional Ambulation Treatment using Aerobic Endurance and Conditioning Equipment",
//   "images_post": "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
//   "likes": 788,
//   "createdAt": "2023-01-31T10:33:14.011Z",
//   "User": {
//       "user_name": "Porbandar Airport",
//       "id": 1,
//       "createdAt": "2023-01-31T10:33:13.943Z",
//       "user_image": "https://robohash.org/voluptatepraesentiummaxime.png?size=50x50&set=set1"
//   },
//   "Comments": [
//       {
//           "comment_date": "02/26/2022",
//           "likes": 726,
//           "text_comment": "Function-based regional knowledge user",
//           "createdAt": "2023-01-31T10:33:14.155Z",
//           "user_id": 94,
//           "User": {
//               "user_name": "Hazleton Municipal Airport",
//               "createdAt": "2023-01-31T10:33:13.943Z",
//               "user_image": "https://robohash.org/rerumipsamplaceat.png?size=50x50&set=set1"
//           },
//           "CommentReplies": []
//       }
//   ]
// }
