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
import DisplayChat from "./displayChat/DisplayChat.js";
import io from "socket.io-client";
import { UserOutlined } from "@ant-design/icons";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App.js";
import axios from "axios";
const { useToken } = theme;

const Chat = () => {
  const { token } = useToken();
  const { userData, setUserData } = useContext(UserContext);
  const [receiverId, setReceiverId] = useState(0);
  const [messageInput, setMessageInput] = useState("");
  const [userSocketId, setUserSocketId] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const [typingUsers, setTypingUsers] = useState([]);
  const [userList, setUserList] = useState([]);
  const [chatUserId, setChatUserId] = useState(1);
  const [chatMessages, setChatMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    setSocket(io("http://localhost:8081"));
    getListUsers();
  }, []);
  useEffect(() => {
    socket?.emit("newUser", userData.id);
  }, [socket, userData]);

  const getListUsers = async () => {
    try {
      const userLists = await axios.get("/api/v1/userfollow");
      setUserList(userLists.data);
    } catch (error) {
      console.error(error);
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
      const message_sender_id = userData.id;
      const message_receive_id = receiverId;
      const text_chat = messageInput;
      setChatMessages([
        ...chatMessages,
        { text_chat, message_receive_id, message_sender_id },
      ]);
      setMessageInput("");
      setIsTyping(false);
    }
    return false;
  };
  useEffect(() => {
    socket?.on("message", (message) => {
      console.log(message);
      const message_sender_id = message.id;
      const message_receive_id = message.receiverId;
      const text_chat = message.message;
      setChatMessages([
        ...chatMessages,
        { text_chat, message_receive_id, message_sender_id },
      ]);
      setTypingUsers(false);
    });
  }, [chatMessages, socket]);

  useEffect(() => {
    socket?.on("typing", (isTyping) => {
      if (isTyping.receiverId !== userData.id) {
        setTypingUsers(isTyping.typing);
      } else {
        setTypingUsers(isTyping.typing);
      }
    });
  }, [socket]);
  //   {
  //     "typing": true,
  //     "receiverId": "1"
  // }

  const handleInputChange = (e) => {
    setMessageInput(e.target.value);
    if (e.target.value.length > 0) {
      socket.emit("typing", { typing: true, receiverId: receiverId });
    } else if (e.target.value.length === 0) {
      socket.emit("typing", { typing: false ,receiverId: receiverId });
    }
  };
  useEffect(() => {
    console.log(chatUserId);
    if (chatUserId === null) {
      return;
    } else {
      getMasseges();
    }
  }, [chatUserId]);

  const getMasseges = async () => {
    try {
      const chatMessage = await axios.get(
        `/api/v1/messagesreceiver/${chatUserId}`
      );
      setChatMessages(chatMessage.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Row>
      <Col xs={6} md={6} lg={6} xl={6}>
        <Row>
          {userList.map((e) => (
            <Col
              key={e.id}
              id={e.id}
              span={20}
              style={{
                display: "flex",
                margin: "12px",
              }}
              onClick={(s) => {
                setChatUserId(s.currentTarget.id);
                setReceiverId(s.currentTarget.id);
              }}
            >
              <Row
                style={{
                  display: "flex",
                }}
              >
                <Col xs={2} md={2} lg={6} xl={6}>
                  <Badge count={1}>
                    <Avatar size={50} shape="circle" src={e.user_image} />
                  </Badge>
                </Col>
                <Col xs={0} md={0} lg={17} xl={17} className="nameUser">
                  <Typography
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "15px",
                      fontWeight: "bold",
                    }}
                  >
                    {e.user_name}
                  </Typography>
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </Col>
      <Col
        span={18}
        className="chat"
        style={{
          backgroundColor: "white",
          height: "40rem",
        }}
      >
        {/* // here */}
        {receiverId === 0
          ? "Select a User"
          : chatMessages.map((data) => <DisplayChat data={data} />)}
        {typingUsers === true ? (
          <Col>
            <Typography
              style={{
                bottom: 50,
                width: "100%",
              }}
            >
              is Typing ....{" "}
            </Typography>
          </Col>
        ) : (
          ""
        )}
      </Col>
      <Col
        offset={6}
        xs={16}
        md={17}
        lg={17}
        xl={18}
        style={{
          backgroundColor: "white",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        {receiverId === 0 ? (
          "Select a User"
        ) : (
          <form>
            <Row
              style={{
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
                    background: "red",
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
        )}
      </Col>
    </Row>
  );
};

export default Chat;
