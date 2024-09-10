/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import person from "../../assets/border.png";
import "./style.css";
// import imgFace from "../../assets/Friend.png";
import { Image, Avatar, Typography, Row, Col, Spin, Button } from "antd";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { LoadingOutlined, PlusCircleFilled } from "@ant-design/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Storys = () => {
  const [storysData, setStorysData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setIsLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [msg, setMsg] = useState("");
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 40,
      }}
      spin
    />
  );
  useEffect(() => {
    fetchData();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleScroll = (event) => {
    const { scrollLeft, scrollWidth, clientWidth } = event.target;

    if (scrollLeft === 0) {
      return;
    } else if (scrollLeft + clientWidth + 1 >= scrollWidth) {
      setIsLoading(true);
      setPage(page + 1);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`/api/v1/getstorys/?page=${page}`);
        setStorysData(response.data.rows);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
        setMsg("");
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [msg]);
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`/api/v1/getstorys/?page=${page}`);
      setStorysData(storysData.concat(response.data.rows));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  const fileInputRef = useRef(null);

  const handleFileSelect = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };
  useEffect(() => {
    const formData = new FormData();
    formData.append("image", image);
    const sendDataForm = async () => {
      try {
        const responseImage = await axios.post(
          "/api/v1/addstorysimage",
          formData
        );
        setMsg(responseImage.data.message);
      } catch (err) {
        setMsg(err.message);
      }
    };
    sendDataForm();
  }, [image]);

  useEffect(() => {
    if (msg === ''){
      return ;
    }else if (msg === "Request failed with status code 500"){
      toast.error('Something went wrong', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    } else{
      toast.success(msg, {
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
}, [msg])
  return (
    <>
      <Row>
        <Col span={24}>
          <Typography
            style={{
              fontSize: "30px",
              marginLeft: "20px",
              paddingTop: "25px",
              fontWeight: "bold",
            }}
          >
            Storys
          </Typography>
        </Col>
        <div onScroll={handleScroll} className="storys">
          <Col>
            <div
              style={{
                position: "relative",
              }}
            >
              <Image
                preview={false}
                src={person}
                style={{
                  margin: "10px",
                  height: "220.5px",
                  width: "160.5px",
                  display: "flex",
                  justifyContent: "center",
                }}
              />
              <div
                style={{
                  background: "#9fb99f",
                  height: "25%",
                  width: "88%",
                  position: "absolute",
                  right: "12px",
                  top: "71%",
                  borderRadius: "0px 0px 25px 25px",
                  textAlign: "center",
                }}
              >
                <Row
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <Col
                    span={24}
                    style={{
                      fontSize: "1.5rem",
                      color: "white",
                    }}
                  >
                    <input
                      type="file"
                      name="image"
                      accept="image/*"
                      style={{ display: "none" }}
                      ref={fileInputRef}
                      onChange={handleFileChange}
                    />
                    <Button
                      style={{
                        background: "none",
                        border: "0px",
                      }}
                      icon={<PlusCircleFilled />}
                      onClick={handleFileSelect}
                    ></Button>
                  </Col>
                  <Col
                    span={24}
                    style={{
                      fontSize: "1.1rem",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Add Story
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          {storysData.length === 0 ? (
            <Col
              span={24}
              style={{
                textAlign: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <h1>No Story Yet</h1>
            </Col>
          ) : (
            storysData.map((e) => (
              <div
                key={e.id}
                style={{
                  position: "relative",
                }}
              >
                <Image
                  preview={false}
                  src={e.image}
                  className="storyImg"
                  style={{
                    height: "220.5px",
                    width: "160.5px",
                    margin: "10px",
                  }}
                />
                <Avatar className="userImg" src={e.User.user_image} />
                <h3 className="userName">{e.User.user_name}</h3>
              </div>
            ))
          )}
          <Col
            span={2}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {loading && (
              <Spin
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
                indicator={antIcon}
              />
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
        </div>
      </Row>
    </>
  );
};

export default Storys;
