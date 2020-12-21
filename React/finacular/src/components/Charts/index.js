import React, { useState, useEffect } from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { chartData } from './data'
import './style.css';

function DurationTabs() {
    return (
        <div className="duration-btn-container" >
            <button>10</button>
            <button style={{ backgroundColor: 'var(--color-1)', color: 'white' }} >20</button>
            <button>30</button>
        </div>
    )
}

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

export default function Chart({ duration }) {

    const initDataSource = {
        chart: {
            caption: "Annual Projection",
            xAxisName: "No of years",
            yAxisName: "Asset Balance (in Lakhs)",
            numberSuffix: "",
            theme: "fusion",
            palettecolors: "5d62b5",
            usePlotGradientColor: "1",
            plotGradientColor: "#29c3be"
        },
        data: chartData
    }

    // chart configurations
    const chartConfigs = {
        type: "column2d",
        width: "100%",
        height: "350",
        dataFormat: "json",
        dataSource: initDataSource
    };

    const show = chartData.slice(0, duration);
    chartConfigs.dataSource.data = show;

    return (
        <div className="chart-container">
            <DurationTabs />
            <ReactFC {...chartConfigs} />
        </div>
    )
}
