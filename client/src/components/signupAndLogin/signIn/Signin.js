import "./style.css";

import { Button, Col, Form, Input, Row } from "antd";
import React, { useState } from "react";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
const SignIn = () => {
  const [status, setStatus] = useState("done");
  const navigate  = useNavigate();
const [error ,setError] = useState();
  const onFinish = (value) => {
      axios
        .post("/api/v1/signin", { data: value.user })
        .then(function (response) {
          console.log(response);
          setError();
          navigate("/")
        })
        .catch(function (error) {
          console.log(error);
          setError(error);
        });
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
                  border:`${status === 'error' ? "1px solid red" : '0px solid'}`
                }}
                className="passwordinput"
                placeholder="Enter Email"
              />
            </MyFormItem>
            <MyFormItem name="password" label="Password">
              <Input.Password
                status={status}
                style={{
                  border:`${error ? "1px solid red" : '0px solid'}`
                }}
                className="passwordinput"
                placeholder="Enter Password"
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

export default SignIn;
