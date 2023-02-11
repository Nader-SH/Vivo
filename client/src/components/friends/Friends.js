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
        img: person,
        userName: 'userName',
        userImg: imgFace,
    },
    {
        img: person,
        userName: 'userName',
        userImg: imgFace,
    },
    {
        img: person,
        userName: 'userName',
        userImg: imgFace,
    },
    {
        img: person,
        userName: 'userName',
        userImg: imgFace,
    },
    {
        img: person,
        userName: 'userName',
        userImg: imgFace,
    },
    {
        img: person,
        userName: 'userName',
        userImg: imgFace,
    },
    {
        img: person,
        userName: 'userName',
        userImg: imgFace,
    },
    {
        img: person,
        userName: 'userName',
        userImg: imgFace,
    },
    {
        img: person,
        userName: 'userName',
        userImg: imgFace,
    },
    {
        img: person,
        userName: 'userName',
        userImg: imgFace,
    },
    {
        img: person,
        userName: 'userName',
        userImg: imgFace,
    },
    {
        img: person,
        userName: 'userName',
        userImg: imgFace,
    },
    {
        img: person,
        userName: 'userName',
        userImg: imgFace,
    },
    {
        img: person,
        userName: 'userName',
        userImg: imgFace,
    },
    {
        img: person,
        userName: 'userName',
        userImg: imgFace,
    },
    {
        img: person,
        userName: 'userName',
        userImg: imgFace,
    },
    {
        img: person,
        userName: 'userName',
        userImg: imgFace,
    },
    {
        img: person,
        userName: 'userName',
        userImg: imgFace,
    },
]