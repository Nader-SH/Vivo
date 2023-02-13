import "./style.css";
import person from "../../assets/border.png";
import imgFace from "../../assets/Friend.png";
import { Image, Avatar, Typography, Row, Col, Spin } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { LoadingOutlined } from "@ant-design/icons";
const Storys = () => {
  const [storysData, setStorysData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setIsLoading] = useState(false);
console.log(storysData);
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

  return (
    <>
      <Row>
        <Col>
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
                <h3
                  style={{
                    cursor: "pointer",
                  }}
                >
                  Add Story
                </h3>
              </div>
            </div>
          </Col>
          {storysData.map((e) => (
            <div
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
          ))}
        <Col span={2} style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            
        }}>
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
        </div>
      </Row>
    </>
  );
};

export default Storys;

const data = [
  {
    img: person,
    userName: "userName",
    userImg: imgFace,
  },
  {
    img: person,
    userName: "userName",
    userImg: imgFace,
  },
  {
    img: person,
    userName: "userName",
    userImg: imgFace,
  },
  {
    img: person,
    userName: "userName",
    userImg: imgFace,
  },
  {
    img: person,
    userName: "userName",
    userImg: imgFace,
  },
  {
    img: person,
    userName: "userName",
    userImg: imgFace,
  },
  {
    img: person,
    userName: "userName",
    userImg: imgFace,
  },
  {
    img: person,
    userName: "userName",
    userImg: imgFace,
  },
  {
    img: person,
    userName: "userName",
    userImg: imgFace,
  },
  {
    img: person,
    userName: "userName",
    userImg: imgFace,
  },
  {
    img: person,
    userName: "userName",
    userImg: imgFace,
  },
  {
    img: person,
    userName: "userName",
    userImg: imgFace,
  },
  {
    img: person,
    userName: "userName",
    userImg: imgFace,
  },
  {
    img: person,
    userName: "userName",
    userImg: imgFace,
  },
  {
    img: person,
    userName: "userName",
    userImg: imgFace,
  },
  {
    img: person,
    userName: "userName",
    userImg: imgFace,
  },
  {
    img: person,
    userName: "userName",
    userImg: imgFace,
  },
  {
    img: person,
    userName: "userName",
    userImg: imgFace,
  },
];
