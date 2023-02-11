import React, { useState } from "react";
import {
  Avatar,
  Col,
  theme,
  Row,
  Typography,
  Upload,
  message,
  Image,
  Form,
  Button,
} from "antd";
import SvgComponent from "../../svg/AddImage";
import { LoadingOutlined } from "@ant-design/icons";
import "./style.css";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
const { useToken } = theme;
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  console.log(file);
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size < 50000000000000;
  if (!isLt2M) {
    message.error("Image must smaller than 5MB!");
  }
  console.log(isJpgOrPng && isLt2M);
  return isJpgOrPng && isLt2M;
};
const UploadFiles = () => {
  const { token } = useToken();
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  console.log(text);
  console.log(imageUrl);
  const addPostWithImage = async () => {
    if (text === "") {
      console.log("Please input description!");
      return;
    } else {
      try {
        const response = await axios.post("/api/v1/addposts", {
          text_post: text,
          images_post: imageUrl,
        });
        console.log(response.data.message);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      console.log(info.file);
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : ""}
      <Avatar size={30} icon={<SvgComponent />} />
      <Typography
        style={{
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        Add Media
      </Typography>
      <Typography
        style={{
          fontWeight: "bold",
          opacity: "0.7",
        }}
      >
        or drag and drop
      </Typography>
    </div>
  );

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
              onClick={addPostWithImage}
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
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl ? (
              <>
                <Image
                  src={imageUrl}
                  alt="avatar"
                  width={200}
                  preview={false}
                />
              </>
            ) : (
              uploadButton
            )}
          </Upload>
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
                setImageUrl();
              }}
            >
              Clear Image{" "}
            </Typography>
          ) : (
            ""
          )}
        </Col>
      </Row>
    </>
  );
};
export default UploadFiles;
