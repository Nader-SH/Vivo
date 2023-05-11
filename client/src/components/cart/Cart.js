/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { CloseOutlined } from '@ant-design/icons';
import { Button, Checkbox, Col, Image, Input, Row, Select, theme, Tooltip, Typography } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { CartData } from '../../App';
import classes from './style.module.css';
const { useToken } = theme;
const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];
const provinceData = ['Lg', 'Sm', 'M'];
const cityData = {
    Lg: ['Green', 'Red'],
    Sm: ['Green', 'Red', 'Orange'],
    M: ['Orange', 'yallow']
};
const Cart = () => {
    const { token } = useToken();
    const colors = `linear-gradient(270deg,${token.colorBgBase},${token.colorPrimary})`;
    const { data, setData } = useContext(CartData);

    const [checkedList, setCheckedList] = useState(defaultCheckedList);

    const [indeterminate, setIndeterminate] = useState(false);

    const [checkAll, setCheckAll] = useState(false);

    const [subtotal, setSubtotal] = useState(0);

    const [shipping, setShipping] = useState(20);
    const [discount, setDiscount] = useState(0);
    const [total, setTotal] = useState(0);

    const [cities, setCities] = useState(cityData[provinceData[0]]);
    const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0]);

    const [changeChecked , setChangeChecked] = useState();
    const [checkedForAll , setCheckedForAll] = useState();

    const handleProvinceChange = (value) => {
        setCities(cityData[value]);
        setSecondCity(cityData[value][0]);
    };
    const onSecondCityChange = (value) => {
        setSecondCity(value);
    };
    const removeFromCart = (id) => {
        setData(data.filter((e) => e.id !== id));
    }
    const addQuantity = (id) => {
        data.map((e) => {
            if (e.id === id) {
                e.quantity = e.quantity + 1;
                setData([...data]);
            }
        })
    }
    const subtractQuantity = (id) => {
        data.map((e) => {
            if (e.id === id) {
                if (e.quantity === 1) {
                    return;
                } else {
                    e.quantity = e.quantity - 1;
                }
                setData([...data]);
            }
        })
    }
    const totalDataCountPrice = () => {
        let sum = [];
        
        data.forEach((e) => {
            if (e.checked === true){
                sum.push(e.quantity * e.price);
            }
        });
        const initialValue = 0;
        setSubtotal(sum.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            initialValue
        )
        );
    }



    const checkAllFun = () => {
        data.forEach((e) => {
            if (changeChecked === false) {
                setCheckedForAll(false);
                setChangeChecked(true);

            }else{
                setChangeChecked(false);
                setCheckedForAll(true);
            }
            e.checked = changeChecked;
            setData([...data]);
        })
    }

    useEffect(() => {
        totalDataCountPrice();
    }, [data]);

    useEffect(() => {
        setCheckedForAll(data.length === 0 ? false : true);
    }, []);
    return (<>
        <div style={{
            background: 'rgba(165, 162, 153, 0.1)',
        }}>
            <Row wrap={true} justify="space-between">
                <Col xs={24} md={24} lg={16} style={{
                    background: 'white',
                    borderRadius: '20px'
                }} >
                    <div>
                        <div>
                            <Typography
                                style={{
                                    fontWeight: '500',
                                    fontSize: '30px',
                                    padding: '30px'
                                }}
                                className={classes.red}
                            >Order</Typography>
                        </div>
                        <div>
                            <Checkbox 
                            checked={checkedForAll}
                            indeterminate={indeterminate}
                                onClick={checkAllFun}
                                style={{
                                    margin: '20px 50px',
                                }}
                            >
                                <Typography
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: '16px',
                                    }}
                                >All</Typography>
                            </Checkbox>
                        </div>
                        <div>
                            {data.map((e) => (<>
                                <div 
                                key={e.id}
                                style={{
                                    display: 'flex',
                                    margin: '20px',
                                    justifyContent: 'space-between',
                                    flexWrap: 'wrap',
                                }}>
                                    <Row gutter={32} wrap={true} align='middle' style={{
                                        display: 'contents',
                                    }}>
                                        <Col>
                                            <div style={{
                                                display: 'flex',
                                                justifyContent: 'center'
                                            }}>
                                                <div style={{
                                                    display: 'flex',
                                                    margin: '20px',
                                                }}>
                                                    <Checkbox key={e.id} checked={e.checked} onClick={() => {
                                                        if (e.checked === false) {
                                                            e.checked = true;
                                                            setData([...data]);
                                                        } else {
                                                            e.checked = false;
                                                            setData([...data]);
                                                        }
                                                    }} />
                                                </div>
                                                <div>
                                                    <Image
                                                        preview={false}
                                                        width={75}
                                                        height={75}
                                                        style={{
                                                            borderRadius: '16px'
                                                        }}
                                                        src={e.itemPic}
                                                    />
                                                </div>
                                                <div style={{
                                                    display: 'block',
                                                    minWidth: '50px'
                                                }}>
                                                    <div>
                                                        <Typography>{e.itemName}</Typography>
                                                    </div>
                                                    <div style={{
                                                        display: 'flex',
                                                        justifyContent: 'space-around',
                                                    }}>
                                                        <Tooltip>
                                                            <Button shape="circle"
                                                                style={{
                                                                    background: 'rgb(197, 197, 197)',
                                                                    border: '0px',
                                                                }}
                                                                onClick={() => {
                                                                    subtractQuantity(e.id);
                                                                }}
                                                            ><Typography>-</Typography></Button>
                                                        </Tooltip>
                                                        <Typography>
                                                            {e.quantity}
                                                        </Typography>
                                                        <Tooltip>
                                                            <Button shape="circle" style={{
                                                                background: 'rgb(197, 197, 197)',
                                                                border: '0px',
                                                            }}
                                                                onClick={() => {
                                                                    addQuantity(e.id)
                                                                }}
                                                            ><Typography>+</Typography></Button>
                                                        </Tooltip>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                            }}>
                                                <div style={{
                                                    margin: '10px'
                                                }}>
                                                    <Select
                                                        defaultValue={e.size}
                                                        style={{
                                                            width: 120,
                                                        }}
                                                        onChange={handleProvinceChange}
                                                        options={provinceData.map((province) => ({
                                                            label: province,
                                                            value: province,
                                                        }))}
                                                    />
                                                </div>
                                                <div style={{
                                                    margin: '10px'
                                                }}>
                                                    <Select
                                                        defaultValue={e.color}
                                                        style={{
                                                            width: 120,
                                                        }}
                                                        value={secondCity}
                                                        onChange={onSecondCityChange}
                                                        options={cities.map((city) => ({
                                                            label: city,
                                                            value: city,
                                                        }))}
                                                    />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col style={{
                                            display: 'contents'
                                        }}>
                                            <Row align='middle' >
                                                <Col xs={24} md={24} lg={24} >
                                                    <div
                                                        style={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            textAlign: 'center',
                                                            justifyItems: 'center',
                                                            justifyContent: 'flex-end'
                                                        }}
                                                    >
                                                        <Typography style={{
                                                            fontSize: '16px',
                                                            fontWeight: 'bold',
                                                        }}>
                                                            $ {e.price * e.quantity}
                                                        </Typography>
                                                        <Button value={e.id} shape="none" icon={<CloseOutlined />}
                                                            onClick={() => removeFromCart(e.id)}
                                                            style={{
                                                                border: '0px',
                                                            }}
                                                        />
                                                    </div>

                                                </Col>

                                            </Row>

                                        </Col>
                                    </Row>
                                </div>
                                <hr style={{
                                    opacity: '0.5',
                                    width: '90%'
                                }} />

                            </>))}
                        </div>
                    </div>
                </Col>
                <Col xs={24} md={24} lg={7} style={{
                    background: 'white',
                    borderRadius: '20px'
                }}>
                    <div>
                        <Typography style={{
                            fontWeight: '500',
                            fontSize: '30px',
                            padding: '30px'
                        }}>Order Summary</Typography>
                    </div>
                    <Row style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '20px',
                    }}>
                        <Col >
                            <Typography style={{
                                fontWeight: 'bold',
                                fontSize: '18px',
                                opacity: '0.7',
                            }}>
                                Subtotal
                            </Typography>
                        </Col>
                        <Col>
                            <Typography style={{
                                fontWeight: '500',
                                fontSize: '18px',
                            }}>
                                $ {subtotal}
                            </Typography>
                        </Col>
                    </Row>
                    <Row style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        margin: '20px',
                    }}>
                        <Col >
                            <Typography style={{
                                fontWeight: 'bold',
                                fontSize: '18px',
                                opacity: '0.7',
                            }}>
                                Shipping
                            </Typography>
                        </Col>
                        <Col>
                            <Typography style={{
                                fontWeight: '500',
                                fontSize: '18px',
                            }}>
                                $ {shipping}
                            </Typography>
                        </Col>
                    </Row>
                    <Row style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        margin: '20px',
                    }}>
                        <Col >
                            <Typography style={{
                                fontWeight: 'bold',
                                fontSize: '18px',
                                opacity: '0.7',
                            }}>
                                Discount
                            </Typography>
                        </Col>
                        <Col>
                            <Typography style={{
                                fontWeight: '500',
                                fontSize: '18px',
                            }}>
                                $ {discount}
                            </Typography>
                        </Col>
                    </Row>
                    <Row style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        margin: '20px',
                    }}>
                        <Col>
                            <Typography style={{
                                fontWeight: 'bold',
                                fontSize: '20px',
                            }}>
                                Total
                            </Typography>
                        </Col>
                        <Col>
                            <Typography style={{
                                fontWeight: '500',
                                fontSize: '18px',
                            }}>
                                $ {subtotal === 0 ? total : subtotal + shipping}
                            </Typography>
                        </Col>
                    </Row>
                    <Row
                        style={{
                            display: 'flex',
                            margin: '20px',
                        }}
                    >
                        <Col >
                            <Typography style={{
                                fontWeight: '500',
                                fontSize: '18px',
                            }}>
                                Coupon Code
                            </Typography>
                        </Col>
                    </Row>
                    <Row wrap={false} gutter={10} justify="start" style={{
                        display: 'flex',
                        margin: '10px 20px'
                    }}>
                        <Col xs={18} sm={20} md={21} lg={18} xl={18}>
                            <Input placeholder="Enter Coupon Code" style={{
                                padding: '13px 10px',
                            }} />
                        </Col>
                        <Col xs={2} sm={1} md={2} lg={6} xl={6}>
                            <Button style={{
                                background: 'rgb(227, 227, 229)',
                                border: '0px',
                                padding: '25px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}><span> Apply </span></Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={22} sm={22} md={22} lg={22} xl={22}>
                            <Button className='buttonCheckout' style={{
                                width: '100%',
                                margin: '20px 20px',
                                height: '3.5rem',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                border: 'none',
                                color: 'white',
                                background: colors,
                            }}
                                onClick={() => {
                                    setData([])
                                }}
                                type='text'
                            >Checkout</Button>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </div>
    </>);
};

export default Cart;
