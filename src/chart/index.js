import React from 'react';
import { Bar } from 'react-chartjs-2';

const options = {
  title: {
    display: false,
    text: 'Population growth (millions): Europe & Africa',
    padding: 25
  },
  legend: {
    display: false,
  },
  scales: {
    yAxes: [
      {
        scaleLabel: {
          display: false,
          labelString: 'Unit: Milion',
          lineHeight: 2,
        },
        ticks: {
          autoSkip: false,
          beginAtZero: true,
        },
        gridLines: {
          display: false
        }
      }
    ],
    xAxes: [
      {
        gridLines: {
          display: false
        }
      },
    ],
  },
}

const Chart = ({ data, lable }) =>
  <div>
    <p><i>({lable})</i></p>
    <Bar datasetKeyProvider={() => Math.random()} data={data} options={options} />
  </div>

export default Chart;
