import React, { useState } from 'react';
import { Table } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import dummy2 from "../../../asset/dummy2.svg"
import Message from "../../../asset/Message.svg"
import Calendar from "../../../asset/Calendar.svg"
import Button from '../../../components/Button/Index';

const columns = [
    {
        title: 'Invoice Id',
        dataIndex: 'InvoiceId',
    },
    {
        title: 'Name',
        dataIndex: 'Name',
        render: (name) => (
            <>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 20
                }}>
                    <div style={{
                        background: "red",
                        width: "36px",  // Set the same width and height
                        height: "36px",
                        borderRadius: "50%",  // Make the border radius 50% for a circle
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"  // Center the content vertically and horizontally
                    }}>
                        <img src={dummy2} alt="Logo" height={20} width={20} />
                    </div>
                    {name}
                </div>
                {console.log("name", name)}
            </>
        ),
    },
    {
        title: 'Email',
        dataIndex: 'Email',
        render: (Email) => (
            <>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10
                }}>

                    <img src={Message} alt="Logo" height={15} width={15} />
                    {Email}
                </div>


            </>
        )
    },
    {
        title: 'Date',
        dataIndex: 'Date',
        render: (Date) => (
            <>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10
                }}>

                    <img src={Calendar} alt="Logo" height={15} width={15} />
                    {Date}
                </div>


            </>
        )
    },
    {
        title: 'Status',
        dataIndex: 'Status',
        render: (Status) => (
            <>
                {/* <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10
                }}>

                    <img src={Calendar} alt="Logo" height={15} width={15} />
                    {Date}
                </div> */}
                <Button
                    text="Click Me"
                    // onClick={handleClick}
                    backgroundColor="#3A36DB"
                    color="#3A36DB"
                    borderRadius="22.5px"
                    padding="10px"
                />



            </>
        )
    },
    {
        title: (
            <span>
                <DeleteOutlined />
            </span>
        ),
        dataIndex: 'DeleteOutlined',
    },


];
const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        InvoiceId: `Edward King ${i}`,
        Name: "jhon",
        Email: `arroragaur@gmail.com`,
        Date: "12 Dec, 2020",
        Status: "Status"
    });
}
const Invoice = () => {
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
    return (
        <div className='invoice-table'>
            <div
                style={{
                    marginBottom: 16,
                }}
            >

                <span
                    style={{
                        marginLeft: 8,
                    }}
                >
                    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                </span>
            </div>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        </div>
    );
};
export default Invoice;