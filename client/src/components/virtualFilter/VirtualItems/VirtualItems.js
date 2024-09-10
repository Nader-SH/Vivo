/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import './style.css';
import { Card, Col, Image, Row, Typography } from 'antd';
import nftPic from '../../../assets/nft.jpg';
import avatarPic from '../../../assets/Friend.png';
import { AiFillCheckCircle, AiFillHeart, AiOutlineShareAlt } from "react-icons/ai";
const VirtualItems = () => {
    // profilePic
    return (<>
        <div className='rootContuner'>
            <Row justify='start'>
                {virtualItems.map((e) => (
                    <Col xs={24} md={12} lg={8}>
                        <Card
                            hoverable={false}
                            style={{
                                width: 'auto',
                                margin: '5px',
                                borderColor: '#a5a299b8'
                            }}
                        >
                            <div style={{
                                display: "flex",
                                justifyContent: 'space-between'
                            }}>
                                <div>
                                    <Typography style={{
                                        fontWeight: 'bold'
                                    }}>{e.itemName}</Typography>
                                    <Typography style={{
                                        opacity: '0.7'
                                    }}>{e.collectionNumber}</Typography>
                                </div>
                                <div style={{
                                    display: "flex",
                                    justifyContent: 'space-between',

                                }}>

                                    <AiFillHeart style={{
                                        display: 'flex',
                                        color: 'rgb(255, 83, 83)',
                                        paddingRight: '2px',
                                        marginRight: '2px',
                                        margin: 'auto',
                                    }} />
                                    <br />
                                    <Typography style={{
                                        display: 'flex',
                                        textAlign: 'center',
                                        alignItems: 'center',
                                    }}>{e.likes}</Typography>
                                </div>
                            </div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                position: 'relative',
                                maxWidth: 'max-content',
                                margin: 'auto'
                            }}>
                                <Image
                                    style={{
                                        position: 'relative',
                                        borderRadius: '15px',
                                        marginTop: '10px',
                                        maxHeight: '300px',
                                        minHeight: '270px',
                                        width: '100%'
                                    }}
                                    src={e.itemPic}
                                    preview={false}
                                />
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-10%',
                                    left: '70%',

                                }}>
                                    <Image
                                        style={{
                                            border: '3px solid white',
                                            borderRadius: '100%'
                                        }}
                                        height={72}
                                        width={72}
                                        src={e.profilePic}
                                        preview={false}
                                    />{e.verified === true ?
                                        <AiFillCheckCircle style={{
                                            backgroundColor: 'white',
                                            borderRadius: '100%',
                                            position: 'absolute',
                                            color: 'green',
                                            left: '66%',
                                            bottom: '75%',
                                            height: '23px',
                                            width: '23px',
                                        }} /> :
                                        ""
                                    }

                                </div>
                                <Typography style={{
                                    position: 'absolute',
                                    backgroundColor: 'white',
                                    padding: '5px 12px',
                                    top: "20px",
                                    opacity: '0.8',
                                    borderRadius: '30px'
                                }}>{e.timeLeft}</Typography>
                                <AiOutlineShareAlt
                                    style={{
                                        fontSize: '20px',
                                        left: '25px',
                                        position: 'absolute',
                                        backgroundColor: 'gray',
                                        padding: '6px 6px',
                                        top: "20px",
                                        opacity: '0.8',
                                        borderRadius: '30px'
                                    }}
                                />
                            </div>
                            <div style={{
                                display: 'flex',
                                marginTop: '20px',
                                justifyContent: 'space-between'
                            }}>
                                <div>
                                    <Typography style={{
                                        fontSize: '18px',
                                        opacity: '0.7'
                                    }}>currentBid</Typography>
                                    <Typography style={{
                                        fontWeight: 'bold',
                                        fontSize: '16px',
                                    }}>
                                        {e.currentBid} ETH
                                    </Typography>
                                </div>
                                <div>
                                    <Typography style={{
                                        fontWeight: 'bold',
                                        paddingTop: '20px'
                                    }}>{e.userName}</Typography>
                                </div>
                            </div>
                        </Card>
                    </Col>
                ))

                }

            </Row>
        </div>
    </>
    )

};

export default VirtualItems;


const virtualItems = [
    {
        itemName: 'Digital Art project',
        userName: 'iDoodleStudio',
        profilePic: avatarPic,
        itemPic: nftPic,
        collectionNumber: '#458561',
        verified: true,
        currentBid: 0.08935,
        timeLeft: '02 : 10 : 40 : 52',
        likes: 99,
    },

    {
        itemName: 'Digital Art project',
        userName: 'iDoodleStudio',
        profilePic: avatarPic,
        itemPic: nftPic,
        collectionNumber: '#458561',
        verified: true,
        currentBid: 0.08935,
        timeLeft: '02 : 10 : 40 : 52',
        likes: 99,
    },

    {
        itemName: 'Digital Art project',
        userName: 'iDoodleStudio',
        profilePic: avatarPic,
        itemPic: nftPic,
        collectionNumber: '#458561',
        verified: false,
        currentBid: 0.08935,
        timeLeft: '02 : 10 : 40 : 52',
        likes: 99,
    },

    {
        itemName: 'Digital Art project',
        userName: 'iDoodleStudio',
        profilePic: avatarPic,
        itemPic: nftPic,
        collectionNumber: '#458561',
        verified: false,
        currentBid: 0.08935,
        timeLeft: '02 : 10 : 40 : 52',
        likes: 99,
    },

    {
        itemName: 'Digital Art project',
        userName: 'iDoodleStudio',
        profilePic: avatarPic,
        itemPic: nftPic,
        collectionNumber: '#458561',
        verified: false,
        currentBid: 0.08935,
        timeLeft: '02 : 10 : 40 : 52',
        likes: 99,
    },

    {
        itemName: 'Digital Art project',
        userName: 'iDoodleStudio',
        profilePic: avatarPic,
        itemPic: nftPic,
        collectionNumber: '#458561',
        verified: false,
        currentBid: 0.08935,
        timeLeft: '02 : 10 : 40 : 52',
        likes: 99,
    },

    {
        itemName: 'Digital Art project',
        userName: 'iDoodleStudio',
        profilePic: avatarPic,
        itemPic: nftPic,
        collectionNumber: '#458561',
        verified: false,
        currentBid: 0.08935,
        timeLeft: '02 : 10 : 40 : 52',
        likes: 99,
    },
];