import React from "react";
import { Doughnut } from '@reactchartjs/react-chart.js';
import 'chartjs-plugin-labels';

const DoughnutWrapper = ({ data }) => {
  
  const options = {
    title: {
      display: true, text: "Número de registros", fontColor: "white"
    },
    legend: {
      position: "right", align: "start", labels: { fontColor: "white" }
    },
    layout: {
      padding: 15
    },
    plugins: {
      labels: { render: "percentage", fontColor: "white" }
    }
  }

  const processedData = {
    labels: data.map(i => i.label),
    datasets: [{
      label: "# of votes",
      data: data.map(i => i.value),
      backgroundColor: data.map(i => i.bg),
      borderColor: data.map(i => i.bd),
      borderWidth: 1
    }]
  }
  
  return (
    <div className="Doughnut">
      <div className="CenterWrapper">
        <p>{processedData.datasets.map(i => i.data.reduce((i, j) => i + j))[0]}</p>
      </div>
      <Doughnut data={processedData} options={options} />
    </div>
  )
}

export default DoughnutWrapper;