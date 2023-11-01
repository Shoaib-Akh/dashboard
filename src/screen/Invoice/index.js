import React, { useState } from 'react';
import { Table } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import dummy2 from "../../asset/dummy2.svg"
import Message from "../../asset/Message.svg"
import Calendar from "../../asset/Calendar.svg"
import Button from '../../components/Button/Index';
import activeStar from "../../asset/activeStar.svg"
import unActiveStar from "../../asset/unActiveStar.svg"
import detailsUnActive from "../../asset/detailsUnActive.svg"
import "./style.scss"
import { Dropdown } from 'antd';
const items = [
    {
        key: '1',
        label: (
            // <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            <>
                <EditOutlined style={{ fontSize: '16px', color: '#3A36DB' }} /> &nbsp;
                <span
                    style={{ fontSize: '16px', color: '#3A36DB' }}
                >Edit</span></>

        ),
    },
    {
        key: '2',
        label: (
            <>
                <DeleteOutlined style={{ fontSize: '16px', color: '#FF69B4' }} /> &nbsp;
                <span
                    style={{ fontSize: '16px', color: '#FF69B4' }}
                >Delete</span></>





        ),
    },

];
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
                    gap: 20,
                    whiteSpace: "nowrap"
                }}>
                    <div style={{
                        background: "red",
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
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
                    gap: 10,
                    whiteSpace: "nowrap"
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
        align: 'center',
        render: (Status) => (
            <>

                <Button
                    width=" 162px"
                    height="45px"
                    text="Complete"
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
        title: (
            <span>
                <DeleteOutlined />
            </span>
        ),
        dataIndex: 'DeleteOutlined',
        render: (Date) => (
            <>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 20
                }}>

                    <img src={activeStar} alt="Logo" height={15} width={15} />
                    <Dropdown
                        menu={{
                            items,
                        }}
                        placement="bottomRight"
                        arrow
                    >
                        <img src={detailsUnActive} alt="Logo" height={15} width={15} />
                    </Dropdown>


                    {Date}
                </div>


            </>
        )
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
    const customTableStyle = {
        border: 'none',  // Remove the border
        marginBottom: 0, // Remove the margin at the bottom
    };
    return (
        // <section className="content-section dashboard">

        <section className='invoice-table content-section'>
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
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} bordered={false}
                resposive={"md"}
                pagination={false}
                rowClassName={() => "rowClassName1"}
            />
        </section>
        // </section>

    );
};
export default Invoice;