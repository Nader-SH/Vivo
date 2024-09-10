/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import './style.css';
import { Button, Card, Col, Image, Rate, Row, Typography } from 'antd';
import { useContext, useState } from 'react';
import iphonePic from '../../../assets/iphone.jpg';
import { AiFillCheckCircle, AiFillHeart, AiOutlineShareAlt } from 'react-icons/ai';
import { ShoppingCartOutlined } from '@ant-design/icons';

import { CartData } from '../../../App';

const Shopping = () => {
    
    const { data, setData } = useContext(CartData);
    const [cartData, setCartData] = useState([]);
    setData(cartData);
    const handleCartAdd = (newObjectData) => {
        if (!data.map((e) => (e.id)).includes(newObjectData.id) === true) {
            newObjectData.quantity = newObjectData.quantity + 1;
            setCartData([...cartData, newObjectData]);
        } else if (data.map((e) => (e.id)).includes(newObjectData.id) === true) {
            newObjectData.quantity = newObjectData.quantity + 1;
            setCartData([...cartData]);
        }
    };

    return (<>
        <div className='rootContuner' style={{
            margin: '0px',
        }}>
            <Row>
                {shoppingItems.map((e) => (
                    <Col xs={24} md={12} lg={8}>
                        <Card className='cardStyle'
                            hoverable={false}
                            style={{
                                width: 'auto',
                                margin: '5px',
                                borderColor: '#a5a299b8'
                            }}
                        >
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
                                        maxHeight: '340px',
                                        minHeight: '270px',
                                        width: '100%'
                                    }}
                                    src={e.itemPic}
                                    preview={false}
                                />
                                <div className='hoverHeart' hoverable style={{
                                    position: 'absolute',
                                    top: "7%",
                                    left: '90%',
                                    opacity: '1',
                                }}>

                                    <AiFillHeart style={{
                                        backgroundColor: 'white',
                                        position: "absolute",
                                        color: 'rgb(255, 83, 83)',
                                        height: '25px',
                                        width: '25px',
                                        borderRadius: '50%',
                                    }} />
                                </div>
                                <div style={{
                                    position: 'absolute',
                                    top: '15px',
                                    left: '5px',
                                }}>
                                    <Typography style={{
                                        color: 'white',
                                        padding: '0.2rem 0.5rem',
                                        borderRadius: '15px',
                                        background: `${e.statusText === 'New' ? 'green' : e.statusText === 'Sold Out' ? 'gray' : 'red'}`,
                                    }}>
                                        {e.statusText}
                                    </Typography>
                                </div>
                                <div style={{
                                    position: 'absolute',
                                    top: '240px',
                                    left: '10px',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <Rate disabled value={e.rating} />
                                    <Typography style={{
                                        color: '#000',
                                        opacity: '0.8'
                                    }}>({e.rating})</Typography>
                                </div>

                                <div style={{
                                    position: 'absolute',
                                    bottom: '-16%',
                                    left: '70%',

                                }}>
                                    <Image
                                        style={{
                                            border: '3px solid white',
                                            borderRadius: '100%',
                                        }}
                                        height={72}
                                        width={72}
                                        src={e.itemPic}
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
                                    <div>
                                        <Typography style={{
                                            fontWeight: 'bold',
                                        }}>{e.traderName}</Typography>
                                    </div>

                                </div>
                            </div>
                            <div style={{
                                marginTop: '40px',
                                display: 'flex',
                            }}>
                                <div >
                                    <Typography style={{
                                        fontWeight: 'bold'
                                    }}>{e.itemName}</Typography>
                                    <Typography style={{
                                        color: 'rgb(147, 200, 80)',
                                    }}>{e.catagory}</Typography>
                                </div>
                            </div>
                            <div>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <AiOutlineShareAlt
                                        style={{
                                            fontSize: '24px',
                                            left: '25px',
                                            color: 'gray',
                                            padding: '26px 26px',
                                            top: "20px",
                                            opacity: '0.8',
                                            borderRadius: '30px',
                                            cursor: 'pointer'

                                        }}
                                    />
                                    <Button style={{
                                        backgroundColor: '#e3e3e5',
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        border: '0px',
                                        height: '50px',
                                        alignItems: 'center',
                                        fontSize: '20px'
                                    }}
                                        onClick={() => handleCartAdd(e)}
                                    >
                                        <Typography></Typography>
                                        <Typography style={{
                                            fontSize: '14px',
                                            textDecoration: 'line-through'
                                        }}>{e.discountFrom ? `$${e.discountFrom}` : ''}</Typography>

                                        <Typography style={{
                                            fontSize: '18px',
                                        }}>
                                            ${e.price}
                                        </Typography>
                                        <ShoppingCartOutlined />
                                    </Button>
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

export default Shopping;



const shoppingItems = [
    {
        id: 1,
        itemName: 'iPhone 14 Pro',
        traderName: 'Trader name',
        catagory: 'Electronics',
        itemPic: iphonePic,
        price: 4500,
        discountFrom: 5000,
        statusText: 'New',
        statusColor: '#93C850',
        rating: 4.8,
        verified: true,
        quantity: 0,
        size:'Lg',
        color:'red',
        checked:true,
    },
    {
        id: 2,
        itemName: 'iPhone 14 ProPro',
        traderName: 'Trader name',
        catagory: 'Electronics',
        itemPic: iphonePic,
        price: 4500,
        discountFrom: 5000,
        statusText: '20% Sale',
        statusColor: '#F93E3E',
        rating: 5,
        verified: false,
        quantity: 0,
        size:'M',
        color:'purple',
        checked:true,
    },
    {
        id: 3,
        itemName: 'iPhone 14 Pro',
        traderName: 'Trader name',
        catagory: 'Electronics',
        itemPic: iphonePic,
        price: 4500,
        statusText: 'Sold Out',
        statusColor: '#9F9F9F',
        rating: 3.5,
        verified: true,
        quantity: 0,
        size:'Sm',
        color:'gray',
        checked:true,
    },

    {
        id: 4,
        itemName: 'iPhone 14 Pro',
        traderName: 'Trader name',
        catagory: 'Electronics',
        itemPic: iphonePic,
        price: 4500,
        statusText: 'New',
        statusColor: '#93C850',
        rating: 4.8,
        verified: false,
        quantity: 0,
        size:'Lg',
        color:'green',
        checked:true,
    },
    {
        id: 5,
        itemName: 'iPhone 14 Pro',
        traderName: 'Trader name',
        catagory: 'Electronics',
        itemPic: iphonePic,
        price: 4500,
        discountFrom: 5000,
        statusText: 'Sold Out',
        statusColor: '#9F9F9F',
        rating: 4,
        verified: true,
        quantity: 0,
        size:'M',
        color:'red',
        checked:true,
    },
];
