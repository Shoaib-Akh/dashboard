import React from 'react';
import './style.scss';
import heart from '../../asset/heart.svg';
import { Card, Col, Row, Rate } from 'antd';
import Chart from '../../components/chart';
import PieChart from '../../components/PieChart';
import RecentOrdersTable from '../../components/RecentOrdersTable';
import product from "../../asset/product.png"


export const DashBoard = () => {
    const DashBoardCard = ({ number, text }) => (
        <Col lg={4} md={6} sm={12} className='full-width'>
            <div className="card">
                <img src={heart} alt="Heart Icon" />
                <div style={{ margin: 11 }}>
                    <p className="number">{number}</p>
                    <p className="text">{text}</p>
                </div>
            </div>
        </Col>
    );

    // Define the data for the cards
    const cardsData = [
        { number: '178+', text: 'Save Products' },
        { number: '178+', text: 'Save Products' },
        { number: '178+', text: 'Save Products' },
        { number: '178+', text: 'Save Products' },
        // Add more card data here
    ];

    return (
        <section className="content-section dashboard">
            {/* <div className='main'> */}

            <Row justify={"space-between"}  >
                {cardsData.map((card, index) => (
                    <DashBoardCard key={index} {...card} />
                ))}


            </Row>

            <Row gutter={10}>
                <Col md={16}>
                    <Card style={{ width: "100%", marginTop: 20 }} >

                        <Chart />
                    </Card>



                </Col>
                <Col md={8} className='full-width'  >
                    <Card style={{ marginTop: 20 }} title='Analytics' >
                        <PieChart />
                    </Card>
                </Col>


            </Row>
            <Row>
                <Col md={16}>

                    <Card title="Recent Orders" bordered={false} style={{ marginTop: 20, marginRight: 10 }}>
                        <RecentOrdersTable />

                    </Card>
                </Col>
                <Col md={8} className='full-width'>
                    <Card title="Top Selling Products" bordered={false} style={{ marginTop: 20 }}>
                        <div style={{ borderBottom: "1px solid #06152B", marginBottom: 20 }}>
                            <div className="order-container">
                                <img src={product} alt="Logo" height={100} width={100} />
                                <div className="order-details">
                                    <h3>NIKE Shoes Black Pattern</h3>
                                    <Rate allowHalf defaultValue={2.5} style={{ color: '#FF69B4' }} />
                                    <h4>$500</h4>
                                </div>
                            </div>
                        </div>
                        <div style={{ borderBottom: "1px solid #06152B", marginBottom: 20 }}>
                            <div className="order-container">
                                <img src={product} alt="Logo" height={100} width={100} />
                                <div className="order-details">
                                    <h3>NIKE Shoes Black Pattern</h3>
                                    <Rate allowHalf defaultValue={2.5} style={{ color: '#FF69B4' }} />
                                    <h4>$500</h4>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>

            {/* </div> */}
        </section >

    );
}

export default DashBoard;
