import { Card, Col, Row } from 'antd'
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
import detailsUnActive from "../../asset/detailsUnActive.svg"
import "./style.scss"
const Schedule = () => {
    const columns = [

        {
            title: 'Date',
            dataIndex: 'Date',
            render: (Date) => (
                <>
                    <div className='table-div'>

                        <img src={Calendar} alt="Logo" height={15} width={15} />
                        {Date}
                    </div>


                </>
            )
        },
        {
            title: 'Time',
            dataIndex: 'Time',
            render: (Time) => (
                <>
                    <div className='table-div'>

                        <FieldTimeOutlined />{Time}
                    </div>

                </>
            ),
        },
        {
            title: 'Location',
            dataIndex: 'Location',
            render: (Status) => (
                <>

                    <Button
                        width=" 162px"
                        height="45px"
                        text={<>
                            <img src={Location} alt="Logo" height={15} width={15} />
                            &nbsp;
                            Complete</>}
                        color="rgba(58, 54, 219, 1)"
                        // onClick={handleClick}
                        backgroundColor="rgba(58, 54, 219, 0.1)"
                        borderRadius="22.5px"
                        padding="10px"
                    />



                </>
            )

        },

        {
            title: ' ',
            dataIndex: 'Status',
            align: 'center',
            render: (Status) => (
                <>  <div className='table-div'
                >


                    <div style={{
                        background: " rgba(3, 168, 158, 0.1)",
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",

                    }}>
                        <EditOutlined style={{ color: " rgba(3, 168, 158, 1)" }} />
                    </div>
                    <div style={{
                        background: "rgba(255, 105, 180, 0.1)",
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <DeleteOutlined style={{ color: "rgba(255, 105, 180, 1)" }} />
                    </div>

                </div>

                </>
            )
        },



    ];
    const data = [];
    for (let i = 0; i < 46; i++) {
        data.push({
            key: i,
            Date: "12 Dec, 2020",

            Time: "10.15AM",
            Location: "Location",
            Status: "Status"
        });
    }
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [loading, setLoading] = useState(false);
    const start = () => {
        setLoading(true);
        // ajax request after empty completing
        setTimeout(() => {
            setSelectedRowKeys([]);
            setLoading(false);
        }, 1000);
    };
    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    const customTableStyle = {
        border: 'none',  // Remove the border
        marginBottom: 0, // Remove the margin at the bottom
    };
    return (
        // <div>Schedule</div>

        <section className="content-section Schedule">


            <Row justify={"space-between"} >
                <Col
                    lg={6}
                    md={24}
                    sm={24}
                >
                    <div className='left-div'>
                        <div style={{ textAlign: "center" }}>

                            <Button
                                text={<><PlusOutlined /> Create Schedule</>}
                                color="#FFFF"
                                // onClick={handleClick}
                                backgroundColor="rgba(58, 54, 219, 1)"
                                borderRadius="7px"
                                padding="15px 30px"
                            />
                            {/* <div style={{ height: 200 }}> */}

                            <Calender />
                            {/* </div> */}
                        </div>
                        <div style={{ marginTop: 20 }}>
                            <h3>Community</h3>
                            <Input size="large" placeholder="Search for People" prefix={<SearchOutlined />} />
                            <div style={{ display: "flex", alignItems: "center", gap: 20, borderBottom: "1px solid gray", marginTop: 20 }}>

                                <div style={{
                                    background: "red",
                                    width: "36px",
                                    height: "36px",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                    <img src={dummy} alt="Logo" height={30} width={30} />
                                </div>
                                <div>
                                    <p className='name'>Eddie Lobanovskiy</p>
                                    <p className='email'>laboanovskiy@gmail.com</p>

                                </div>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: 20, borderBottom: "1px solid gray" }}>

                                <div style={{
                                    background: "red",
                                    width: "36px",
                                    height: "36px",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                    <img src={dummy} alt="Logo" height={30} width={30} />
                                </div>
                                <div>
                                    <p className='name'>Eddie Lobanovskiy</p>
                                    <p className='email'>laboanovskiy@gmail.com</p>

                                </div>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: 20, borderBottom: "1px solid gray" }}>

                                <div style={{
                                    background: "red",
                                    width: "36px",
                                    height: "36px",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                    <img src={dummy} alt="Logo" height={30} width={30} />
                                </div>
                                <div>
                                    <p className='name'>Eddie Lobanovskiy</p>
                                    <p className='email'>laboanovskiy@gmail.com</p>

                                </div>
                            </div>
                        </div>
                    </div>

                </Col>
                <Col
                    xs={18}
                    lg={17}
                    md={24}
                    sm={24}
                >
                    <Card
                        className='schedule-table'

                    >

                        <Table rowSelection={rowSelection} columns={columns} dataSource={data} bordered={false}
                            resposive={"md"}
                            pagination={false}
                            rowClassName={() => "rowClassName1"}
                        />
                    </Card>
                </Col>

            </Row>
        </section>
    )
}

export default Schedule