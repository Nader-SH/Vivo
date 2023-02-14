import React, { useContext, useState } from "react";
import { Input, Button, theme, Row, Col, Avatar, Typography, Form } from "antd";
import "./style.css";
import friend from "../../../assets/Friend.png";
import { PostData } from "../../../dashboard/HomePageView";
import { MsgContext } from "../../../App.js";
import axios from "axios";
const { TextArea } = Input;
const { useToken } = theme;
const PostForm = () => {
  // eslint-disable-next-line no-unused-vars
  const { msg, setMsg } = useContext(MsgContext);
  const [form] = Form.useForm();
  const { dataPost, setDataPost } = useContext(PostData);
  const { token } = useToken();
  const [text, setText] = useState("");
  const [errorReaquireText, setErrorReaquireText] = useState("");
  const [errorReaquireColor, setErrorReaquireColor] = useState("");

  const requireTextPost = () => {
    if (text === "") {
      setErrorReaquireText("Please input description!");
      setErrorReaquireColor("error");
      return;
    } else {
      axios
        .post("/api/v1/addposts", { text_post: text })
        .then((response) => {
          setMsg(response.data.message)
        })
        .catch((err) => {
          console.log(err);
        });
      setErrorReaquireText("");
      setDataPost([text, ...dataPost]);
      setErrorReaquireColor("");
      form.resetFields();
    }
  };

  return (
    <>
      <Form form={form}>
        <Row wrap={false} align="middle">
          <Col xs={4} md={2} lg={1} xl={1}>
            <Avatar size={50} src={friend} />
          </Col>
          <Col xs={16} md={20} lg={20} xl={22}>
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
          <Col xs={4} md={2} lg={1} xl={1}>
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
        </Row>
      </Form>
    </>
  );
};
export default PostForm;
