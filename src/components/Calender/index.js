import React, { useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import dayLocaleData from 'dayjs/plugin/localeData';
import { Calendar, Select, theme } from 'antd';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
dayjs.extend(dayLocaleData);

const Calender = () => {
    const { token } = theme.useToken();
    const [currentMonth, setCurrentMonth] = useState(dayjs());
    const [selectedDate, setSelectedDate] = useState(dayjs());

    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };

    const goToPreviousMonth = () => {
        setCurrentMonth(currentMonth.subtract(1, 'month'));
    };

    const goToNextMonth = () => {
        setCurrentMonth(currentMonth.add(1, 'month'));
    };

    const wrapperStyle = {
        border: "1px solid #F1F4FA",
        marginTop: 20,
        borderRadius: "7px",
        textAlign: "center",

    };

    return (
        <div style={wrapperStyle}>
            <Calendar

                fullscreen={false}
                headerRender={({ value }) => {
                    return (
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 20px", }}>
                            <div>
                                <p className='date-text'>
                                    {selectedDate.format('MMMM,DD-YYYY')}
                                </p>

                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span onClick={goToPreviousMonth}><CaretLeftOutlined /> </span>
                                <span onClick={goToNextMonth}><CaretRightOutlined /></span>
                            </div>
                        </div>
                    );
                }}
                onSelect={(date) => {
                    setSelectedDate(dayjs(date));
                }}
                onPanelChange={onPanelChange}
                value={currentMonth}
            />
        </div >
    );
};

export default Calender;
