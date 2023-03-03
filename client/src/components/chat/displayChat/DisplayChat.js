import { Col, Row, theme } from "antd";
import Typography from "antd/es/typography/Typography.js";
import { useContext } from "react";
import { UserContext } from "../../../App.js";
const { useToken } = theme;

const DisplayChat = (data) => {
  const { token } = useToken();
  const { userData, setUserData } = useContext(UserContext);
  return (
    <Row
      style={{
        display: "flow-root",
      }}
    >
      {data.data.message_sender_id === userData.id ? (
        <Col
          style={{
            margin: "10px",
            display: "flex",
            justifyContent: "end",
            alignItems: "end",
          }}
        >
          <Typography
            style={{
              fontSize: "20px",
              fontWeight: "500",
              opacity: "0.8",
              background: `linear-gradient(270deg,${token.colorBgBase},${token.colorPrimary})`,
              padding: "3px 20px",
              borderRadius: "14px",
              color:'white',
            }}
          >
            {data.data.text_chat}
          </Typography>
        </Col>
      ) : (
        <Col
          xs={22}
          md={22}
          lg={22}
          xl={22}
          style={{
            margin: "10px",
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
          }}
        >
          <Typography
            style={{
              fontSize: "20px",
              fontWeight: "500",
              opacity: "0.8",
              background: `linear-gradient(270deg,${token.colorPrimary},${token.colorBgBase})`,
              padding: "3px 20px",
              borderRadius: "14px",
              color:'white',
            }}
          >
            {data.data.text_chat}
          </Typography>
        </Col>
      )}
    </Row>
  );
};

export default DisplayChat;
