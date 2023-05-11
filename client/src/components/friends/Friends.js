import './style.css';
import person from '../../assets/border.png';
import imgFace from '../../assets/Friend.png';
import { Col, Image, Row, Typography } from 'antd';
const Friends = () => {

    return (<>
        <Row>
            <Col>
            <Typography style={{
                fontSize: '30px',
                marginLeft: '20px',
                fontWeight: 'bold',
            }}>Friends</Typography>
            </Col>
            <Col className='friends'>
                {data.map((e) => (
                    <div
                    key={e.id}
                        style={{
                            position: 'relative',
                        }}
                    >
                        <Image
                            preview={false}
                            src={e.userImg}
                            className="friends"
                            style={{
                                height: '70px',
                                width: '70px',
                                margin: '10px',
                            }}
                        />
                    </div>
                ))}
            </Col>
        </Row>
    </>);
};

export default Friends;


const data = [
    {
        id:1,
        img: person,
        userName: 'userName',
        userImg: imgFace,
    },
    {
        id:2,
        img: person,
        userName: 'userName',
        userImg: imgFace,
    },
    {
        id:3,
        img: person,
        userName: 'userName',
        userImg: imgFace,
    },
    {
        id:4,
        img: person,
        userName: 'userName',
        userImg: imgFace,
    },
    {
        id:5,
        img: person,
        userName: 'userName',
        userImg: imgFace,
    },
    {
        id:6,

        img: person,
        userName: 'userName',
        userImg: imgFace,
    },
    {
        id:7,

        img: person,
        userName: 'userName',
        userImg: imgFace,
    },
    {
        id:8,

        img: person,
        userName: 'userName',
        userImg: imgFace,
    },
    {
        id:9,

        img: person,
        userName: 'userName',
        userImg: imgFace,
    },
    {
        id:10,

        img: person,
        userName: 'userName',
        userImg: imgFace,
    },
    {
        id:11,
        img: person,
        userName: 'userName',
        userImg: imgFace,
    },
    {
        id:12,

        img: person,
        userName: 'userName',
        userImg: imgFace,
    },
    {
        id:13,
        img: person,
        userName: 'userName',
        userImg: imgFace,
    },
    {
        id:14,

        img: person,
        userName: 'userName',
        userImg: imgFace,
    },
    {
        id:15,

        img: person,
        userName: 'userName',
        userImg: imgFace,
    },
    {
        id:16,

        img: person,
        userName: 'userName',
        userImg: imgFace,
    },
    {
        id:17,

        img: person,
        userName: 'userName',
        userImg: imgFace,
    },
    {
        id:18,

        img: person,
        userName: 'userName',
        userImg: imgFace,
    },
]