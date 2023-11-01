
import { Card, Checkbox, Col, Row } from 'antd'
import React, { useState } from 'react';

import Button from '../../../components/Button/Index'
import dummy2 from "../../../asset/dummy2.svg"
import Heart from "../../../asset/Heart.svg"
import chat from "../../../asset/Chat.svg"

import detailsUnActive from "../../../asset/detailsUnActive.svg"

import { Link } from 'react-router-dom';

const List = () => {
  const imageGalleryData = [
    { src: dummy2 },
    { src: dummy2 },
    { src: dummy2 },
    // Add more image data as needed
  ];

  return (
    <div className='main-div'>
      <Row justify={"space-between"}>
        <Checkbox className="foo">
          Dashboard Design
        </Checkbox>
        <img src={detailsUnActive} alt="Logo" height={20} width={20} style={{}} />
      </Row>
      <Row style={{ marginTop: 20, gap: 20 }}>
        <Button
          text={"Low"}
          color="#FFFF"
          // onClick={handleClick}
          backgroundColor="#FF69B4"
          borderRadius="22.5px"
          padding="7px 24px"
        />
        <Button
          text={"On Track"}
          color="#FFFF"
          // onClick={handleClick}
          backgroundColor="#03A89E"
          borderRadius="22.5px"
          padding="7px 24px"
        />
      </Row>
      <p className='Discussion'>Discussion for management dashboard UI design</p>
      <Row justify={"space-between"}>
        <div className="image-gallery">
          {imageGalleryData.map((item, index) => (
            <div key={index} className="image-item">
              <img src={item.src} alt={`Image ${index}`} height={20} width={20} />
            </div>
          ))}
          {imageGalleryData.length > 1 && (
            <div className="image-count">+</div>
          )}
        </div>
        <div className='flex-div' style={{ gap: 8 }}>
          <img src={chat} height={20} width={20} />
          23
          <img src={Heart} height={20} width={20} />
          25
        </div>
      </Row>
    </div>
  );
};

export default List;
