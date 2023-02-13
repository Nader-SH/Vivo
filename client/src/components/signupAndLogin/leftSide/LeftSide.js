import "./style.css";
import { Avatar, Col, Image, Row, theme, Tabs, Typography } from "antd";
import logo from "../../../assets/vivo.png";
import SignIn from "../signIn/Signin";
import Signup from "../signup/Signup";

const { useToken } = theme;
const SignAndLogin = () => {
  const { token } = useToken();
  const colors = `linear-gradient(270deg,${token.colorBgBase},${token.colorPrimary})`;

  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div
      style={{
        marginTop: "250px",
      }}
    >
      <Row
        wrap={true}
        style={{
          // margin:'auto'
          display: "flex",
          justifyContent: "center",
          flexWrap:'wrap'
        }}
      >
        <Col offset={1} xs={23} md={12} lg={12} xl={12} style={{
          display: 'grid',
        }}>
          <Image width={331} height={90} src={logo} preview={false} />
          <Avatar.Group
            maxPopoverTrigger="click"
            size="large"
            maxStyle={{
              color: "#f56a00",
              backgroundColor: "#fde3cf",
              cursor: "pointer",
              marginTop: "45px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "45px",
              }}
            >
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </div>
            <span
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                marginTop: "40px",
              }}
            >
              3k+ people joined us, now it’s your turn
            </span>
          </Avatar.Group>
        </Col>
        <Col
          xs={20}
          md={20}
          lg={8}
          xl={8}
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
          }}
        >
          <Tabs
            defaultActiveKey="1"
            items={items}
            onChange={onChange}
            className="tabsStyle"
          >
            <span>{onChange}</span>
          </Tabs>
        </Col>
      </Row>
    </div>
  );
};

export default SignAndLogin;

const items = [
  {
    key: "1",
    label: `SIGN IN`,
    children: <SignIn />,
  },
  {
    key: "2",
    label: `SIGN UP`,
    children: <Signup />,
  },
];
