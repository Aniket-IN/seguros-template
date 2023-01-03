import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
          color: "black",
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

const labels = [
  "ENE",
  "FEB",
  "MAR",
  "ABR",
  "MAY",
  "JUN",
  "JUL",
  "AGO",
  "SEP",
  "OCT",
  "NOV",
  "DIC",
  "ENE",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Users",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: labels.map((label, index, row) =>
        index + 1 === row.length ? "black" : "#1555ED"
      ),
    },
  ],
};

const UserCountBarChart = () => {
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default UserCountBarChart;
