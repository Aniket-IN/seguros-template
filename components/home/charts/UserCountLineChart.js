import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  interaction: {
    intersect: false,
  },
  scales: {
    x: {
      border: {
        display: false,
      },
      ticks: {
        font: {
          size: 14,
          weight: 700,
          color: 'black',
        },
      },
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};


const labels = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC', 'ENE'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Users',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 250 })),
      borderColor: '#1555ED',
      backgroundColor: labels.map(() => '#fff') ,
      pointRadius: 3,
      pointHoverRadius: 4,
      pointBorderWidth: 3,
    },
  ],
};

const UserCountLineChart = () => {
  return (
    <div>
      <Line options={options} data={data} />
    </div>
  )
}

export default UserCountLineChart