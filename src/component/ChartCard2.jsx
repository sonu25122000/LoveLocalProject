import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const AvgOrderValueChart = () => {
  // Chart Data
  const data = {
    labels: [
      "Oct 15th",
      "Oct 16th",
      "Oct 17th",
      "Oct 18th",
      "Oct 19th",
      "Today",
    ],
    datasets: [
      {
        label: "Current",
        data: [1000, 1500, 1200, 1800, 1400, 1300],
        borderColor: "#3b82f6", // Blue line
        backgroundColor: "rgba(59, 130, 246, 0.2)", // Blue fill
        tension: 0.4,
        fill: true,
      },
      {
        label: "Previous",
        data: [1200, 1300, 1100, 1600, 1350, 1200],
        borderColor: "#cbd5e1", // Light gray line
        backgroundColor: "rgba(203, 213, 225, 0.2)", // Gray fill
        tension: 0.4,
        fill: true,
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          boxWidth: 10,
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
          stepSize: 100,
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center pb-2 border-b border-gray-200 mb-4">
        <div>
          <div className="text-lg font-semibold text-gray-800">
            AVG Order Value
          </div>
          <div className="text-4xl font-bold">2782</div>
          <span className="text-sm font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-lg">
            +34%
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-blue-500">
            <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
            Current
          </div>
          <div className="flex items-center text-gray-400">
            <span className="w-3 h-3 rounded-full bg-gray-400 mr-2"></span>
            Previous
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="h-80">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default AvgOrderValueChart;
