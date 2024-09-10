/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { Input, Button, theme, Row, Col, Avatar, Typography, Form } from "antd";
import "./style.css";
import friend from "../../../assets/Friend.png";
import { PostData } from "../../../dashboard/HomePageView";
import { MsgContext } from "../../../App.js";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../../App.js";
import { UserOutlined } from "@ant-design/icons";
const { TextArea } = Input;
const { useToken } = theme;
const PostForm = () => {
  // eslint-disable-next-line no-unused-vars
  const { userData, setUserData } = useContext(UserContext);
  const [imageUser, setImageUser] = useState(
    <Avatar size={50} icon={<UserOutlined />} />
  );
  const { msg, setMsg } = useContext(MsgContext);
  const [errMsg, setErrMsg] = useState("");
  const [form] = Form.useForm();
  const { token } = useToken();
  const [text, setText] = useState("");
  const [errorReaquireText, setErrorReaquireText] = useState("");
  const [errorReaquireColor, setErrorReaquireColor] = useState("");
  const requireTextPost = () => {
    if (userData === null) {
      return;
    } else {
      try {
        if (text === "") {
          setErrorReaquireColor("error");
          throw new Error("Please input description post!");
        } else {
          axios
            .post("/api/v1/addposts", { text_post: text })
            .then((response) => {
              setMsg(response.data.message);
              setErrMsg(response.data.message);
            })
            .catch((err) => {
              setErrMsg(err.message);
            });
          setErrorReaquireText("");
          setErrorReaquireColor("");
          form.resetFields();
        }
      } catch (err) {
        setErrMsg(err.message);
      }
    }
  };
useEffect(()=>{
  if (userData === null) {
    return;
  } else {
    if (userData.user_image !== "UserOutlined") {
      setImageUser(<Avatar size={50} src={userData.user_image} />);
    }
  }
},[userData])

  useEffect(() => {
    if (errMsg === "") {
      return;
    } else if (errMsg === "Please input description post!") {
      toast.error("Something went wrong", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setErrMsg('');
    } else if (errMsg === "Request failed with status code 500") {
      toast.error("Something went wrong", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setErrMsg('');
    } else if (errMsg === "Post Add Success") {
      toast.success(errMsg, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    setErrMsg('');
  }, [errMsg]);
  return (
    <>
      <Form form={form}>
        <Row wrap={false} align="middle">
          <Col xs={20} md={22} lg={22} xl={22}>
            <Form.Item
              name="note"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <TextArea
                allowClear
                status={errorReaquireColor}
                onChange={(e) => {
                  setText(e.target.value);
                }}
                style={{
                  height: 120,
                }}
                rows={9}
                placeholder="Try mix reality lens"
                maxLength={300}
              />
            </Form.Item>
            <Typography
              style={{
                color: "red",
              }}
            >
              {errorReaquireText}
            </Typography>
          </Col>
          <Col xs={4} md={2} lg={2} xl={2} style={{
            display:'flex',
            justifyContent:'center',
          }}>
            <Form.Item
              name="note"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Button
                type="primary"
                style={{
                  background: `linear-gradient(270deg,${token.colorPrimary},${token.colorBgBase})`,
                }}
                onClick={requireTextPost}
              >
                Post
              </Button>
            </Form.Item>
          </Col>
          <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </Row>
      </Form>
    </>
  );
};
export default PostForm;
