import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import "./style.scss"
function Chart() {
    // Create a reference to the chart container using useRef
    const chartRef = useRef(null);

    useEffect(() => {
        // Initialize ECharts chart instance on component mount
        const myChart = echarts.init(chartRef.current);

        // Define your custom linear gradient for the area background
        const customLinearGradient = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
                offset: 0,
                color: 'rgba(58, 54, 219, 0.50)',
            },
            {
                offset: 1,
                color: 'rgba(255, 105, 180, 0.35)',
            },
        ]);

        // Define your chart options
        const option = {
            color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
            title: {
                text: 'Report',
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985',
                    },
                },
            },
            legend: {
                data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5'],
            },
            toolbox: {
                feature: {
                    saveAsImage: {},
                },
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true,
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                },
            ],
            yAxis: [
                {
                    type: 'value',
                },
            ],
            series: [
                {
                    name: 'Line 1',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                        width: 0,
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,
                        color: customLinearGradient, // Use the custom linear gradient here
                    },
                    emphasis: {
                        focus: 'series',
                    },
                    data: [140, 232, 101, 264, 90, 340, 250],
                },
                // Add other series as needed
            ],
        };

        // Set the chart options
        myChart.setOption(option);

        // Clean up the chart instance when the component unmounts
        return () => {
            myChart.dispose();
        };
    }, []);

    return <div ref={chartRef} className={"scrollable-container "}>

    </div>
}

export default Chart;
