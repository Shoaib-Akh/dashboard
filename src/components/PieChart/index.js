import React from 'react';
import ReactECharts from 'echarts-for-react';
import '../../components/RecentOrdersTable/style.scss';

const DoughnutChart = () => {
    const colors = {
        sales: '#3A36DB',
        distribute: '#03A89E',
        return: '#FF69B4',
    };
    const data = {
        labels: ['Return', 'Distribution', 'Sales'],
        percentages: [30, 10, 20],
    };

    const remainingPercentage = 100 - data.percentages.reduce((acc, percentage) => acc + percentage, 0);

    const option = {
        title: {
            text: `Transactions`,
            subtext: `${remainingPercentage}% `,
            left: 'center',
            top: 'center',
            fontSize: window.innerWidth > 350 ? 16 : 10,

            colors: "#06152B"
        },
        clickable: false,
        tooltip: {
            show: false,
        },
        avoidLabelOverlap: true,
        series: [
            {
                label: {
                    show: false,
                    position: 'center',
                },
                name: 'Transaction Types',
                type: 'pie',
                radius: ['60%', '80%'],
                clickable: true,
                data: [
                    {
                        value: data.percentages[0],
                        name: data.labels[0],
                        itemStyle: {
                            color: colors.return,
                        },
                    },
                    {
                        value: data.percentages[1],
                        name: data.labels[1],
                        itemStyle: {
                            color: colors.distribute,
                        },
                    },
                    {
                        value: data.percentages[2],
                        name: data.labels[2],
                        itemStyle: {
                            color: colors.sales,
                        },
                    },
                    {
                        value: remainingPercentage,
                        name: 'Remaining Transactions',
                        itemStyle: {
                            color: 'rgba(241, 244, 250, 1)',
                        },
                    },
                ],
            },
        ],
    };

    const legendData = [
        { label: 'Return', color: colors.return },
        { label: 'Distribution', color: colors.distribute },
        { label: 'Sales', color: colors.sales },
    ];

    return (
        <div className="doughnut-chart-container">
            <ReactECharts option={option} style={{ height: '100%', width: "100%" }} />
            <div className="legend">
                {legendData.map((item, index) => (
                    <div key={index} className="legend-item">
                        <div className="legend-color" style={{ background: item.color }}></div>
                        <span>{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DoughnutChart;
