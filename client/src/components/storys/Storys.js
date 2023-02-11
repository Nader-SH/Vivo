import './style.css';
import person from '../../assets/border.png';
import imgFace from '../../assets/Friend.png';
import { Image, Avatar, Typography, Row, Col } from 'antd';
const Storys = () => {

    return (<>
        <Row>
            <Col>
                <Typography style={{
                    fontSize: '30px',
                    marginLeft: '20px',
                    paddingTop: '25px',
                    fontWeight: 'bold',
                }}>Storys</Typography>
            </Col>
            <div
                className='storys'
            >
                <Col>
                    <div
                        style={{
                            position: 'relative',
                        }}
                    >
                        <Image
                            preview={false}
                            src={person}
                            style={{
                                margin: '10px',
                                height: '220.5px',
                                width: '160.5px',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        />
                        <div style={{
                            background: '#9fb99f',
                            height: '25%',
                            width: '88%',
                            position: 'absolute',
                            right: '12px',
                            top: '71%',
                            borderRadius: '0px 0px 25px 25px',
                            textAlign: 'center',
                        }}>
                            <h3 style={{
                                cursor:'pointer'
                            }} >Add Story</h3>
                        </div>
                    </div>
                </Col>
                    {data.map((e) => (
                        <div
                            style={{
                                position: 'relative',
                            }}
                        >
                            <Image
                                preview={false}
                                src={e.img}
                                className='storyImg'
                                style={{
                                    height: '220.5px',
                                    width: '160.5px',
                                    margin: '10px',
                                }}
                            />
                            <Avatar className='userImg' src={e.userImg} />
                            <h3 className='userName'>{e.userName}</h3>
                        </div>
                    ))}
            </div>
        </Row>
    </>);
};

export default Storys;


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