import './style.css';
import React, { useState } from 'react';
import { Avatar, Col, Radio, Row, Select, theme } from 'antd';
import VirtualItems from './VirtualItems/VirtualItems';
import Shopping from './Shopping/Shopping';
import FoodBeverages from './Food & Beverages/Food&Beverages';
import Services from './Services/Services';
import Typography from 'antd/es/typography/Typography';
import fashionImg from '../../assets/fashion.jpg';
import iphonePic from '../../assets/iphone.jpg';
import CheckBox from './CheckBox/CheckBox';
import { useMediaQuery } from 'react-responsive';
const { useToken } = theme;
const VirtualFilter = () => {
    const { token } = useToken();
    const [dataComponents, setDataComponents] = useState(<VirtualItems />);
    const [selected, setSelected] = useState([]);
    const [checkBoxData, setCheckBoxData] = useState(items);
    const [myStyle, setMyStyle] = useState({});
    const [myStyleTwo, setMyStyleTwo] = useState({});
    const [myStyleOne, setMyStyleOne] = useState({})
    const handleChange = (value) => {
        setSelected(value);
    }
    const isDesktopOrLaptop = useMediaQuery({
        query: '(max-width: 760px)'
    })
    const handleDataCheckBox = () => {
        setCheckBoxData(plainOptionsShopping)
    }
    const handleClick = (id) => {
        setMyStyle((prevState) => ({
            ...myStyle,
            [id]: !prevState[id]
        }));
    };
    const handleClickTwo = (id) => {
        setMyStyleTwo((prevState) => ({
            ...myStyleTwo,
            [id]: !prevState[id]
        }));
    };
    const handleClickOne = (id) => {
        setMyStyleOne((prevState) => ({
            ...myStyleOne,
            [id]: !prevState[id]
        }));
    };
    return (<>
        <div style={{
            margin: '8px',
            display: 'flex',
            justifyContent: 'center',
        }}>
            <Row>
                <Col span={24}>
                    <Radio.Group defaultValue="a" className='tabs' style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyItems: 'center',
                        height: '100px',
                    }}>
                        <Radio.Button
                            style={{
                                height: '60px',
                                textAlign: 'center',
                                justifyContent: 'center',
                                display: 'flex',
                                alignItems: 'center',
                                borderColor: `${token.colorBorderSecondary}`,
                                border: `1px solid ${token.colorBorderSecondary}`
                            }}
                            value="a"
                            onClick={() => {
                                setDataComponents(<VirtualItems />);
                            }}
                        ><Typography.Text style={{
                            fontSize: '20px',
                        }} ellipsis={true}

                        >Virtual Items</Typography.Text ></Radio.Button>
                        <Radio.Button
                            style={{
                                height: '60px',
                                textAlign: 'center',
                                justifyContent: 'center',
                                display: 'flex',
                                alignItems: 'center',
                                borderColor: `${token.colorBorderSecondary}`,
                                border: `1px solid ${token.colorBorderSecondary}`
                            }}
                            value="b"
                            onClick={() => {
                                setDataComponents(<Shopping />);
                                handleDataCheckBox();
                            }}
                        ><Typography.Text

                            style={{
                                fontSize: '20px'
                            }} ellipsis={true}>Shopping</Typography.Text ></Radio.Button>
                        <Radio.Button
                            style={{
                                height: '60px',
                                textAlign: 'center',
                                justifyContent: 'center',
                                display: 'flex',
                                alignItems: 'center',
                                borderColor: `${token.colorBorderSecondary}`,
                                border: `1px solid ${token.colorBorderSecondary}`,
                            }}
                            value="c"
                            onClick={() => {
                                setDataComponents(<FoodBeverages />);
                            }}
                        ><Typography.Text
                            style={{
                                fontSize: '20px',
                            }}
                            ellipsis={true}> Food Beverages </Typography.Text ></Radio.Button>
                        <Radio.Button
                            style={{
                                height: '60px',
                                textAlign: 'center',
                                justifyContent: 'center',
                                display: 'flex',
                                alignItems: 'center',
                                borderColor: `${token.colorBorderSecondary}`,
                                border: `1px solid ${token.colorBorderSecondary}`,
                            }}
                            value="d"
                            onClick={() => {
                                setDataComponents(<Services />);
                            }}
                        ><Typography.Text
                            style={{
                                fontSize: '20px',
                            }}
                            ellipsis={true}>Services</Typography.Text ></Radio.Button>
                    </Radio.Group>
                </Col>
            </Row>
        </div>
        
        <div className='rootContuner sideCheckBox'>
            <CheckBox setSelected={setSelected} selected={selected} props={dataComponents.type.name} />
            <div style={{
                alignItems: 'center',
            }}>
                <div style={{
                    display: 'flex'
                }}>

                    {dataComponents.type.name === 'Shopping' ?
                        selected.includes("Fashion") ?
                            subCategories[0].sub.map((e, i) => (
                                <div style={{
                                    margin: '14px',
                                    textAlign: 'center'
                                }}>
                                    <Avatar key={i} size={80} src={e.img} onClick={() => handleClick(i)}
                                        style={{
                                            backgroundColor: myStyle[`${i}`] ? 'green' : '',
                                            color: myStyle[`${i}`] ? 'white' : '',
                                        }}
                                    />
                                    <Typography>{e.name}</Typography>
                                </div>
                            ))
                            : ''

                        : ''}
                </div>
                <div style={{
                    display: 'flex'
                }}>
                    {dataComponents.type.name === 'Shopping' ?
                        selected.includes("Beauty And Cosmetics") ?
                            subCategories[1].sub.map((e, i) => (
                                <div style={{
                                    margin: '14px',
                                    textAlign: 'center'
                                }}>
                                    <Avatar size={80} src={e.img} style={{
                                        backgroundColor: myStyleOne[`${i}`] ? 'green' : '',
                                        color: myStyleOne[`${i}`] ? 'white' : '',
                                    }}
                                        onClick={() => handleClickOne(i)}
                                    />
                                    <Typography>{e.name}</Typography>
                                </div>
                            ))
                            : ''

                        : ''}
                </div>

                <div style={{
                    display: 'flex'
                }}>
                    {dataComponents.type.name === 'Shopping' ?
                        selected.includes("Electronics") ?
                            subCategories[2].sub.map((e, i) => (
                                <div style={{
                                    margin: '14px',
                                    textAlign: 'center'
                                }}>
                                    <Avatar size={80} src={e.img} style={{
                                        backgroundColor: myStyleTwo[`${i}`] ? 'green' : '',
                                        color: myStyleTwo[`${i}`] ? 'white' : '',
                                    }}
                                        onClick={() => handleClickTwo(i)}
                                    />
                                    <Typography>{e.name}</Typography>
                                </div>
                            ))
                            : ''

                        : ''}
                </div>
                {dataComponents.type.name === 'VirtualItems' ?
                    <div style={{
                        display:'flex'
                    }}>
                        <Select
                            onChange={handleChange}
                            mode="multiple"
                            className='searchSelected'
                            style={{
                                width: '80%',
                                height:'auto',
                                border: `${isDesktopOrLaptop === false ? '0px solid white':'2px solid gray' }`,
                                borderRadius: '10px',
                                opacity:'0.5'
                            }}
                            value={selected}
                            options={checkBoxData}
                            showSearch={false}
                            bordered={true}
                            isDesktopOrLaptop
                            dropdownStyle={{ display: `${isDesktopOrLaptop === false ? 'none' : ''}` }}
                        /> <Typography style={{
                            cursor: 'pointer',
                            fontWeight:'bold',
                            opacity:'0.7',
                            display:'flex',
                            alignItems:'center'
                            
                        }} onClick={() => {
                            setSelected([]);
                        }}>Clear all</Typography>
                    </div> : ''
                }
                {dataComponents}
            </div>
        </div>
    </>);
};

export default VirtualFilter;

const items = [
    {
        key: '1',
        label: 'New',
        value: '1'
    },
    {
        key: '2',
        label: 'Popular',
        value: '2'
    },
    {
        key: '3',
        label: '3D Dynamic',
        value: '3'
    },
    {
        key: '4',
        label: '3D Assests',
        value: '4'
    },
    {
        key: '5',
        label: 'Lands(𝛑)',
        value: '5'
    },
    {
        key: '6',
        label: 'Art',
        value: '6'
    },
    {
        key: '7',
        label: 'nav Photography',
        value: '7'
    },
    {
        key: '8',
        label: 'Wearables',
        value: '8'
    },
    {
        key: '9',
        label: 'Domain Names',
        value: '9'
    },
    {
        key: '10',
        label: 'Music',
        value: '10'
    },
    {
        value: '11',
        label: 'Blockchain',
        key: '11',
    },
]

const plainOptionsShopping = [{
    key: '1',
    label: 'Fashion',
    value: '1'
},
{
    key: '2',
    label: 'Beauty And Cosmetics',
    value: '2'
},
{
    value: '3',
    label: 'Electronics',
    key: '3',
},
]


const subCategories = [
    {
        categories: 'Fashion',
        sub: [
            {
                img: fashionImg,
                name: 'All',
                id: 1,
            },
            {
                img: fashionImg,
                name: 'Top',
                id: 2,
            },
            {
                img: fashionImg,
                name: 'Bottoms',
                id: 3,
            },
            {
                img: fashionImg,
                name: 'Formal',
                id: 4,
            },
            {
                img: fashionImg,
                name: 'Footwear',
                id: 5,
            },
            {
                img: fashionImg,
                name: 'InnerWear',
                id: 6,
            },
            {
                img: fashionImg,
                name: 'Special CL',
                id: 7,
            },
        ],
    },

    {
        categories: 'Beauty And Cosmetics',
        sub: [],
    },
    {
        categories: 'Electronics',
        sub: [
            {
                img: iphonePic,
                name: 'All',
                id: 8,
            },
            {
                img: iphonePic,
                name: 'Apple',
                id: 9,
            },
            {
                img: iphonePic,
                name: 'Samsung',
                id: 10,
            },
            {
                img: iphonePic,
                name: 'Lg',
                id: 11,
            },
            {
                img: iphonePic,
                name: 'Acer',
                id: 12,
            },
        ],
    },
];