import "./style.css";
import { Button, Col, Form, Input, Row, Space } from "antd";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";

const MyFormItemContext = React.createContext([]);
function toArr(str) {
  return Array.isArray(str) ? str : [str];
}
const MyFormItemGroup = ({ prefix, children }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(
    () => [...prefixPath, ...toArr(prefix)],
    [prefixPath, prefix]
  );
  return (
    <MyFormItemContext.Provider value={concatPath}>
      {children}
    </MyFormItemContext.Provider>
  );
};
const MyFormItem = ({ name, ...props }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName =
    name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
  return <Form.Item name={concatName} {...props} />;
};
const Signup = () => {
  const [status, setStatusError] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();
  console.log(passwordError);

  const onFinish = (value) => {
    if (value.user.password === value.user.confirmPassword) {
      axios
        .post("/api/v1/signup", { data: value.user })
        .then(function (response) {
          setPasswordError(false);
        })
        .catch(function (error) {
          console.log(error);
          setStatusError(error);
          setPasswordError(false);
        });
      console.log(value);
    } else {
      setPasswordError(true);
    }
  };

  return (
    <Row>
      <Col xs={24} md={24} lg={24} xl={24}>
        <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
          <MyFormItemGroup prefix={["user"]}>
            <MyFormItem name="email" label="Email">
              <Input
                status={status}
                style={{
                  border: `${
                    status === "error" ? "1px solid red" : "0px solid"
                  }`,
                }}
                className="passwordinput"
                placeholder="Enter Email"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </MyFormItem>
            <MyFormItem name="user_name" label="First Name">
              <Input
                status={status}
                style={{
                  border: `${
                    status === "error" ? "1px solid red" : "0px solid"
                  }`,
                }}
                className="passwordinput"
                placeholder="Enter First Name"
              />
            </MyFormItem>
            <MyFormItem name="password" label="Password">
              <Input.Password
                status={status}
                style={{
                  border: `${
                    passwordError === true ? "1px solid red" : "0px solid"
                  }`,
                }}
                className="passwordinput"
                placeholder="input password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </MyFormItem>
            <MyFormItem name="confirmPassword" label="Confirm Password">
              <Input.Password
                status={status}
                style={{
                  border: `${
                    passwordError === true ? "1px solid red" : "0px solid"
                  }`,
                }}
                className="passwordinput"
                placeholder="input password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </MyFormItem>
          </MyFormItemGroup>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Signup;
