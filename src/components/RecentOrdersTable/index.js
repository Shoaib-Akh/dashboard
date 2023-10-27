import React from 'react';
import { Space, Table, Tag } from 'antd';
import product from "../../asset/product.png"
import "./style.scss"

const columns = [
    { responsive: ["xs"] },
    {
        title: 'Tracking no',
        dataIndex: 'TrackingNo',
        key: 'TrackingNo',
        render: (text) => text,
        sorter: (a, b) => a.TrackingNo.length - b.TrackingNo.length, // Change 'name' to 'TrackingNo'
    },
    {
        title: 'Product Name',
        dataIndex: 'ProductName',
        key: 'ProductName',
        sorter: (a, b) => a.ProductName.length - b.ProductName.length,
        render: (_, { ProductName }) => (
            <>
                <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                    <img src={product} alt="Logo" height={30} width={30} />
                    {ProductName}
                </div>
            </>
        ),
    },
    {
        title: 'Price',
        dataIndex: 'Price',
        key: 'Price',
        sorter: (a, b) => a.Price.length - b.Price.length,
    },
    {
        title: 'Total Order',
        key: 'tags',
        dataIndex: 'tags',
        sorter: (a, b) => a.tags.length - b.tags.length,
        render: (_, { tags }) => (
            <>
                <div style={{ textAlign: 'center' }}>
                    <Space>
                        <Tag color={"geekblue"}>{tags}</Tag>
                    </Space>
                </div>
            </>
        ),
    },
    {
        title: 'TotalAmount',
        dataIndex: 'TotalAmount',
        key: 'TotalAmount',
        render: (_, { TotalAmount }) => (
            <>
                <div style={{ textAlign: 'center' }}>
                    <Space>{TotalAmount}</Space>
                </div>
            </>
        ),
    },
];

const data = [
    {
        key: '1',
        TrackingNo: '#45646',
        ProductName: "Camera Lens",
        Price: '$3443',
        tags: ['$456'],
        TotalAmount: " $500"
    },
    {
        key: '2',
        TrackingNo: '#45646',
        ProductName: "Camera Lens",
        Price: '$3443',
        tags: ['$456'],
        TotalAmount: " $500"
    },
    {
        key: '2',
        TrackingNo: '#45646',
        ProductName: "Camera Lens",
        Price: '$3443',
        tags: ['$456'],
        TotalAmount: " $500"
    }, {
        key: '2',
        TrackingNo: '#45646',
        ProductName: "Camera Lens",
        Price: '$3443',
        tags: ['$456'],
        TotalAmount: " $500"
    },
    // Add more data objects here for additional rows
];

const RecentOrdersTable = () => (
    <div className="table-container">
        {/* Apply the custom class for the scrollbar */}
        <Table columns={columns} dataSource={data} pagination={false} bordered={false} size="small" />
    </div>
);

export default RecentOrdersTable;
