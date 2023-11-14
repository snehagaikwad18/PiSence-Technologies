// src/App.js

import React from 'react';

import { Pie } from 'react-chartjs-2';
import data from './Data.json'
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);


const App = () => {
  const { NAME, 'Behavioral Analytics': behavioralAnalytics } = data;

  // Count the occurrences of each value in the Behavioral Analytics array
  const countOccurrences = (array) => {
    return array.reduce((acc, value) => {
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {});
  };

  // Prepare data for the pie chart
  const occurrences = countOccurrences(behavioralAnalytics);
  const labels = Object.keys(occurrences);
  const dataValues = Object.values(occurrences);

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: dataValues,
        backgroundColor: ['#FF0000', '#36802d'], // You can customize the colors
      },
    ],
  };

  return (
    <div>
      <h1 className='text-2xl font-bold'> Behavioral Analytics</h1>

      <div className="pie-chart">
        <Pie data={chartData} />
      </div>
    </div>
  );
};

export default App;
