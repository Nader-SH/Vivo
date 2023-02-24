import "./style.css";
import {
  Avatar,
  Badge,
  Button,
  Col,
  Input,
  Row,
  theme,
  Typography,
} from "antd";
import io from "socket.io-client";
import { UserOutlined } from "@ant-design/icons";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App.js";
const { useToken } = theme;
const socket = io("http://localhost:8081");

const Chat = () => {
  const { token } = useToken();
  const { userData, setUserData } = useContext(UserContext);
  const [receiverId, setReceiverId] = useState(1);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [userSocketId, setUserSocketId] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const [typingUsers, setTypingUsers] = useState([]);

  useEffect(() => {
    socket.on("message", (message) => {
      console.log(message);
      setMessages([...messages, message]);
    });
    console.log(messages);
  }, [messages]);

  useEffect(() => {
    socket.on("typing", (isTyping, user) => {
      if (isTyping) {
        setIsTyping(isTyping);
        setTypingUsers(typingUsers.filter((u) => u !== user));
      } else {
        setIsTyping(isTyping);
        setTypingUsers([...typingUsers, user]);
      }
    });
  }, [typingUsers]);

  const handleInputChange = (e) => {
    setMessageInput(e.target.value);
    if (e.target.value.length > 0 && !isTyping) {
      socket.emit("typing", true);
    } else if (e.target.value.length === 0 && isTyping) {
      socket.emit("typing", false);
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (messageInput !== "") {
      setUserSocketId(socket.id);
      socket.emit("send_message", {
        message: messageInput,
        receiverId: receiverId,
        id: userData.id,
      });
      setMessageInput("");
      setIsTyping(false);
    }
    return false;
  };
  return (
    <Row>
      <Col xs={6} md={6} lg={6} xl={6}>
        <Row>
          <Col
            span={20}
            style={{
              display: "flex",
              margin: "12px",
            }}
          >
            <Badge count={1}>
              <Avatar size={50} shape="circle" icon={<UserOutlined />} />
            </Badge>
            <Typography
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "10px",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              User Name
            </Typography>
          </Col>
          <Col
            span={20}
            style={{
              display: "flex",
              margin: "12px",
            }}
          >
            <Badge count={1}>
              <Avatar size={50} shape="circle" icon={<UserOutlined />} />
            </Badge>
            <Typography
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "10px",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              User Name
            </Typography>
          </Col>
        </Row>
      </Col>
      <Col
        span={18}
        style={{
          backgroundColor: "white",
          height: "53rem",
        }}
      >
        {/* // here */}
        {/* {messages.map((data)=>{
          <Typography>data.message</Typography>
        })} */}
        {isTyping === true ? (
          <Typography
            style={{
              position: "absolute",
              bottom: 50,
              width: "100%",
            }}
          >
            is Typing ....{" "}
          </Typography>
        ) : (
          ""
        )}
        <form>
          <Row
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
            }}
          >
            <Col span={22}>
              <Input
                value={messageInput}
                type="text"
                name="chat message"
                placeholder="Write a Messgae"
                style={{
                  padding: "10px",
                  borderRadius: "20px",
                }}
                onChange={handleInputChange}
              />
            </Col>
            <Col
              span={2}
              style={{
                alignSelf: "center",
              }}
            >
              <Button
                onClick={handleSendMessage}
                style={{
                  background: `linear-gradient(270deg,${token.colorPrimary},${token.colorBgBase})`,
                  height: "auto",
                  margin: "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  justifyItems: "center",
                  color: "white",
                }}
              >
                Send
              </Button>
            </Col>
          </Row>
        </form>
      </Col>
    </Row>
  );
};

export default Chat;
