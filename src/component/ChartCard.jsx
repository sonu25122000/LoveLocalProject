import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DirectVsIndirectChart = () => {
  const data = {
    labels: ["Mar 22", "Apr 22", "May 22", "Jun 22", "Jul 22", "Aug 22"],
    datasets: [
      {
        label: "Direct",
        data: [30, 60, 90, 45, 60, 40],
        backgroundColor: "#6b21a8", // Purple color
        barPercentage: 0.6,
      },
      {
        label: "Indirect",
        data: [10, 40, 80, 50, 80, 60],
        backgroundColor: "#3b82f6", // Blue color
        barPercentage: 0.6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          boxWidth: 12,
          padding: 15,
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        bodyFont: {
          size: 12,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
          },
        },
      },
      y: {
        grid: {
          drawBorder: false,
          color: "#e5e7eb", // Light gray grid lines
        },
        ticks: {
          stepSize: 30,
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="flex flex-col justify-between pb-2 border-b border-gray-200 mb-4">
        <div className="text-lg font-semibold text-gray-800">
          Direct VS Indirect
        </div>
        <hr className="w-full m-3" />
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-purple-700">
            <span className="w-3 h-3 rounded-full bg-purple-700 mr-2"></span>
            1.7Cr Direct
          </div>
          <div className="flex items-center text-blue-500">
            <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>2.4Cr
            Indirect
          </div>
        </div>
      </div>
      <div className="h-80">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default DirectVsIndirectChart;
