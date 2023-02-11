import React, { useState } from 'react';
import { Checkbox, Col, Row, Typography } from 'antd';
import './style.css';
import { LeftOutlined, MenuUnfoldOutlined } from '@ant-design/icons/lib/icons';

const CheckBox = ({ selected, setSelected, props }) => {
  const [collapse, setCollapse] = useState(false);
  const handleTagAdd = (newTags) => {
    setSelected([...newTags]);
  };
  const onFilterChange = (checkedValues) => {
    handleTagAdd(checkedValues);
  };
  return (<>
    <Col
      xs={0}
      md={collapse ? 1 : 5}
      style={{
        borderRight: '2px solid #0000001A',
      }}
    >
      <Row
        wrap={false}
        align="middle"
        justify={collapse ? 'center' : 'space-between'}
      >
        <Col>
          <Row align="middle" justify="center" style={{
            margin:'20px'
          }}>
            <MenuUnfoldOutlined
              style={{ cursor: 'pointer', marginInlineEnd: '0.5rem', fontSize:'18px' }}
              onClick={() => setCollapse(false)}
            />
            {!collapse && (
              <Typography.Text className="fw-600 fz-16" level={5} style={{
                fontWeight:'bold',
                fontSize:'18px'
              }}>
                Categories
              </Typography.Text>
            )}
          </Row>
        </Col>
        <br />

        {!collapse && (
          <LeftOutlined
            className="clickable"
            style={{
              marginInlineEnd: '0.5rem',
              display: 'flex',
              flexDirection: 'column',
              margin:'10px',
              fontSize:'18px'
            }}
            onClick={() => setCollapse(true)}
          />
        )}
      </Row>
      {!collapse && (
        <Checkbox.Group
        className='checkBoxFix'
        style={{
            display: 'flex',
            flexDirection: 'column',
            marginInlineStart: '10px',
          }}
          options={props === 'Shopping' ? plainOptionsShopping : plainOptions}
          onChange={onFilterChange}
          value={selected}
        />
      )}
    </Col>
  </>
  );
}

export default CheckBox;



const plainOptions = [
  'New',
  'Popular',
  '3D Dynamic',
  '3D Assests',
  'Lands(𝛑)',
  'Art',
  'Photography',
  'Wearables',
  'Domain Names',
  'Music',
  'Blockchain',
];

const plainOptionsShopping = ['Fashion', 'Beauty And Cosmetics', 'Electronics'];