import { Card, Checkbox, Col, Row } from 'antd'
import React, { useState } from 'react';

import Button from '../../components/Button/Index'
import { FieldTimeOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons'
import Calender from '../../components/Calender'
import dummy from "../../asset/dummy2.svg"
import Input from 'antd/es/input/Input'
import { Table } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import dummy2 from "../../asset/dummy2.svg"
import Message from "../../asset/Message.svg"
import Calendar from "../../asset/Calendar.svg"
import Location from "../../asset/Location.svg"

import unActiveStar from "../../asset/unActiveStar.svg"
import Heart from "../../asset/Heart.svg"
import chat from "../../asset/Chat.svg"

import detailsUnActive from "../../asset/detailsUnActive.svg"
import "./style.scss"
import { Link } from 'react-router-dom';
import Search from 'antd/es/input/Search';
import List from './List';
const TaskPreview = () => {


    const [selectedItem, setSelectedItem] = useState("Board");

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };
    const imageGalleryData = [
        { src: dummy, label: 'Label 1' },
        { src: dummy2, label: 'Label 2' },
        // Add more image data as needed
    ];
    return (
        // <div>Schedule</div>

        <section className="content-section TaskPreview">


            <Row justify={"space-between"} align="middle">
                <div className='flex'>


                    <p
                        className={`bg-light ${selectedItem === 'list' ? 'selected' : ''}`}
                        onClick={() => handleItemClick('list')}
                    >
                        list
                    </p>
                    <p
                        className={`bg-light ${selectedItem === 'Board' ? 'selected' : ''}`}
                        onClick={() => handleItemClick('Board')}
                    >
                        Board
                    </p>
                    <p
                        className={`bg-light ${selectedItem === 'Timeline' ? 'selected' : ''}`}
                        onClick={() => handleItemClick('Timeline')}
                    >
                        Timeline
                    </p>
                </div>
                {/* <div>
                    <Input size="large" placeholder="Search for People" prefix={<SearchOutlined />} />
                </div> */}
                <Search
                    placeholder="input search text"
                    // onSearch={onSearch}
                    style={{
                        width: "230px",
                        height: "40px"
                    }}
                />
            </Row>
            <Row className='first-div' >
                <Col lg={5} md={12} >
                    <h3>ToDo</h3>
                    <List />
                    <List />
                    <List />



                </Col>
                <Col lg={5} md={12}   >
                    <h3>In Progress</h3>
                    <List />
                    <List />
                    <List />


                </Col>  <Col lg={5} md={12}  >
                    <h3>Done</h3>
                    <List />
                    <List />
                    <List />


                </Col>
                <Col lg={5} md={12} sm={6}  >
                    <h3>TIn Review</h3>
                    <List />
                    <List />

                    <List />


                </Col>

                {/* Add more columns as needed */}
            </Row>
        </section >
    )
}

export default TaskPreview