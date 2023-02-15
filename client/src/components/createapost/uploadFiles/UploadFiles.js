import React, { useContext, useEffect, useState } from "react";
import {
  // Avatar,
  Col,
  theme,
  Row,
  Typography,
  Form,
  Button,
} from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import SvgComponent from "../../svg/AddImage";
// import { LoadingOutlined } from "@ant-design/icons";
import "./style.css";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import { MsgContext } from "../../../App.js";
const { useToken } = theme;

const UploadFiles = () => {
  const { msg, setMsg } = useContext(MsgContext);
  const [errMsg, setErrMsg] = useState("");
  const { token } = useToken();
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("image", imageUrl);
    formData.append("text", text);
    try {
      if (text === "") {
        throw new Error("Please input description!");
      } else {
        try {
          const responseImage = await axios.post(
            "/api/v1/addpostsimage",
            formData
          );
          setMsg(responseImage.data.message);
          setErrMsg(responseImage.data.message);
        } catch (err) {
          setErrMsg(err.message);
        }
      }
    } catch (err) {
      setErrMsg(err.message);
    }
  };

  // handle image
  const handleImage = (e) => {
    setImageUrl(e.target.files[0]);
  };

  // const uploadButton = (
  //   <div>
  //     {loading ? <LoadingOutlined /> : ""}
  //     <Avatar size={30} icon={<SvgComponent />} />
  //     <Typography
  //       style={{
  //         fontWeight: "bold",
  //         fontSize: "16px",
  //       }}
  //     >
  //       Add Media
  //     </Typography>
  //     <Typography
  //       style={{
  //         fontWeight: "bold",
  //         opacity: "0.7",
  //       }}
  //     >
  //       or drag and drop
  //     </Typography>
  //   </div>
  // );

  useEffect(() => {
    if (errMsg === "") {
      return;
    } else if (errMsg === "Please input description!") {
      toast.error("Please input description!", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
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
    } else if (errMsg === "Post and Image Add Success") {
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
    }else if (errMsg === "Post Add Success"){
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
  }, [errMsg]);

  return (
    <>
      <Row>
        <Col xs={19} md={20} lg={22} xl={22}>
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
        </Col>
        <Col
          xs={5}
          md={4}
          lg={2}
          xl={2}
          style={{
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Form.Item>
            <Button
              type="submit"
              style={{
                background: `linear-gradient(270deg,${token.colorPrimary},${token.colorBgBase})`,
              }}
              onClick={handleSubmit}
            >
              Post
            </Button>
          </Form.Item>
        </Col>
        <Col
          xs={24}
          md={24}
          lg={24}
          xl={24}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Form.Item onSubmit={handleSubmit} encType="multipart/form-data">
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImage}
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={24} lg={24} xl={24}>
          {imageUrl ? (
            <Typography
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                setImageUrl(null);
              }}
            >
              Clear Image{" "}
            </Typography>
          ) : (
            ""
          )}
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
    </>
  );
};
export default UploadFiles;
