import './style.css';
import { InsertRowAboveOutlined, InsertRowRightOutlined, SearchOutlined, TableOutlined } from '@ant-design/icons';
import { Col, Input, Radio, Row, Select, theme, Typography } from 'antd';
import { useState } from 'react';
const { useToken } = theme;

const VirtualSearch = () => {
    const { token } = useToken();
    const [size, setSize] = useState('none'); // default is 'middle'

    return (<>
        <Row>
            <Col span={24}>
                <Typography style={{
                    fontSize: '24px',
                    margin: '20px',
                    fontWeight: 'bold',
                }}>P2P Marketplace</Typography>
            </Col>
            <Col span={24}>
                <Row wrap={false}  style={{
                    display:'flex',
                    alignContent:'center',
                    justifyContent:'space-between',
                }}>

                    <Col xs={16} md={16} lg={16} xl={16} style={{
                        margin:'0px 10px'
                    }} >
                        <Input placeholder="Search..." prefix={<SearchOutlined />} style={{
                            height: '55px',
                            borderColor: `${useToken.colorBorderSecondary}`,
                            border: `1px solid ${token.colorBorderSecondary}`,
                        }} />
                    </Col>
                    <Col xs={6} md={6} lg={3} xl={3} >
                        <Select
                        className='selector'
                            style={{
                                borderColor: `${useToken.colorBorderSecondary}`,
                            }}
                            placeholder="Sort By"
                            optionFilterProp="children"
                            filterOption={(input, option) => (option?.label ?? '').includes(input)}
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            const options={[
                                {
                                    value: '1',
                                    label: 'Newest',
                                },
                                {
                                    value: '2',
                                    label: 'Popular',
                                },
                                {
                                    value: '3',
                                    label: 'Price (Low to High)',
                                },
                                {
                                    value: '4',
                                    label: 'Price (High to Low)',
                                },
                            ]}
                        />
                    </Col>
                    <Col xs={0} md={0} lg={3} xl={3} style={{
                    }}>
                        <Radio.Group value={size} onChange={(e) => setSize(e.target.value)} className='buttonsShow'   >
                            <Radio.Button><InsertRowRightOutlined /></Radio.Button>
                            <Radio.Button ><TableOutlined /></Radio.Button>
                            <Radio.Button ><InsertRowAboveOutlined /></Radio.Button>
                        </Radio.Group>
                    </Col>
                </Row>
            </Col>
        </Row>
    </>
    )

};

export default VirtualSearch;


