import "./style.css";
import Typography from "antd/es/typography/Typography";
import React, { useState } from "react";
import { Avatar, Button, Col, Input, Row, theme } from "antd";
import { UserOutlined } from "@ant-design/icons";
import TimeAgo from "javascript-time-ago";

import ReactTimeAgo from "react-time-ago";
import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";
import { AiFillHeart } from "react-icons/ai";

import axios from "axios";
const { useToken } = theme;

const Comments = ({ comment, fetchDataNormal }) => {
  TimeAgo.addDefaultLocale(en);
  TimeAgo.addLocale(ru);
  const { token } = useToken();
  const [showReplies, setShowRplies] = useState(false);
  const [commentReply, setCommentReply] = useState("");
  const [commentReplyId, setCommentReplyId] = useState();
  const [replyForm, setReplyForm] = useState(false);

  const getCommentReply = async () => {
    if (commentReply === "") {
      return;
      return;
    } else {
      try {
        const response = await axios.post("/api/v1/addcommentreply", {
          text_reply: commentReply,
          comment_id: commentReplyId,
        });
        fetchDataNormal();
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <>
      <Row
        wrap={false}
        className="commentData"
        style={{
          width: "100%",
        }}
      >
        <Col
          xs={4}
          sm={2}
          md={2}
          lg={2}
          xl={1}
          style={{
            width: "100%",
          }}
        >
          {comment.User.user_image === "UserOutlined" ? (
            <Avatar size={50} icon={<UserOutlined />} />
          ) : (
            <Avatar size={50} src={comment.User.user_image} />
          )}
        </Col>
        <Col xs={15} sm={19} md={19} lg={19} xl={20} className="commentText">
          <Typography
            style={{
              fontWeight: "bold",
            }}
          >
            {comment.User.user_name}
          </Typography>
          <Typography
            style={{
              fontWeight: "500",
              opacity: "0.8",
              width: "100%",
            }}
          >
            {comment.text_comment}
          </Typography>
        </Col>
        <Row>
          <Col>
            <Typography
              style={{
                fontWeight: "500",
                opacity: "0.8",
              }}
            >
              <ReactTimeAgo date={comment.createdAt} locale="en-US" />
            </Typography>
          </Col>
        </Row>
      </Row>
      <Row
        style={{
          width: "100%",
        }}
      >
        <Col
          offset={2}
          style={{
            display: "flex",
            width: "100%",
          }}
        >
          <AiFillHeart
            style={{
              color: "red",
              fontSize: "20px",
            }}
          />
          <Typography
            style={{
              padding: "0px 10px",
            }}
          >
            {comment.likes}
          </Typography>
          <Typography
            style={{
              cursor: "pointer",
              margin: "0px 12px",
            }}
            onClick={() => {
              if (replyForm === false) {
                setReplyForm(true);
              } else {
                setReplyForm(false);
              }
            }}
          >
            Reply
          </Typography>
          {comment.CommentReplies[0] === undefined ? (
            <Typography>No Replies</Typography>
          ) : (
            <Typography
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                if (showReplies === true) {
                  setShowRplies(false);
                } else {
                  setShowRplies(true);
                }
              }}
            >
              {showReplies ? "Hide" : "Show"} Replies
            </Typography>
          )}
        </Col>
        <Row
          style={{
            width: "100%",
          }}
        >
          {replyForm === false ? (
            ""
          ) : (
            <>
              <Col
                xs={3}
                sm={2}
                md={2}
                lg={2}
                xl={2}
                offset={2}
                style={{
                  width: "100%",
                }}
              >
                <Avatar size={50} icon={<UserOutlined />} />
              </Col>
              <Col
                xs={14}
                sm={16}
                md={17}
                lg={17}
                xl={17}
                style={{
                  width: "100%",
                }}
              >
                <Input
                  onChange={(s) => {
                    setCommentReply(s.target.value);
                    setCommentReplyId(comment.id);
                  }}
                  placeholder="Write a Reply"
                  style={{
                    padding: "10px",
                    borderRadius: "20px",
                  }}
                />
              </Col>
              <Col
                xs={5}
                sm={4}
                md={3}
                lg={3}
                xl={3}
                className="divReplyButton"
                style={{
                  width: "100%",
                }}
              >
                <Button
                  type="primary"
                  style={{
                    background: `linear-gradient(270deg,${token.colorPrimary},${token.colorBgBase})`,
                    height: "auto",
                    margin: "1px",
                  }}
                  onClick={getCommentReply}
                >
                  Reply
                </Button>
              </Col>
            </>
          )}
        </Row>
        <Col
          offset={2}
          style={{
            width: "100%",
          }}
        >
          {comment.CommentReplies[0] !== undefined
            ? showReplies === true
              ? comment.CommentReplies.map((reply) => {
                  return (
                    <Row>
                      <Row wrap={false} className="replyData">
                        <Col xs={3} sm={3} md={3} lg={3} xl={2}>
                          <Avatar size={50} src={reply.User.user_image} />
                        </Col>
                        <Col
                          xs={18}
                          sm={18}
                          md={18}
                          lg={18}
                          xl={18}
                          className="replyText"
                        >
                          <Typography
                            style={{
                              fontWeight: "bold",
                            }}
                          >
                            {reply.User.user_name}
                          </Typography>
                          <Typography
                            style={{
                              fontWeight: "500",
                              opacity: "0.8",
                              width: "100%",
                            }}
                          >
                            {reply.text_reply}
                          </Typography>
                        </Col>
                        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                          <Typography
                            style={{
                              fontWeight: "500",
                              opacity: "0.8",
                              display: "flex",
                            }}
                          >
                            <ReactTimeAgo
                              date={reply.createdAt}
                              locale="en-US"
                            />
                          </Typography>
                        </Col>
                      </Row>
                      <Row>
                        <Col></Col>
                      </Row>
                    </Row>
                  );
                })
              : ""
            : ""}
        </Col>
      </Row>
    </>
  );
};

export default Comments;
