import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import { TbLocation } from "react-icons/tb";
import { TbLocationFilled } from "react-icons/tb";

// Register chart components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);

const SalesCard = ({ title }) => {
  // Mock data for the chart
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // X-axis labels
    datasets: [
      {
        data: [20, 30, 25, 35, 40, 45, 50], // Sales data
        borderColor: "#4F46E5", // Primary line color
        backgroundColor: "rgba(79, 70, 229, 0.2)", // Shaded area color
        borderWidth: 2,
        tension: 0.4, // Smooth curve
        fill: true, // Fill below the line
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: { display: false }, // Hide legend
      tooltip: {
        enabled: true,
        backgroundColor: "#ffffff",
        titleColor: "#333333",
        bodyColor: "#333333",
        borderColor: "#cccccc",
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        display: false, // Hide X-axis
      },
      y: {
        display: false, // Hide Y-axis
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-90">
      {/* Card Header */}
      <div className="mb-2 flex justify-between items-start">
        <TbLocationFilled color="pink" size={30} />
        <div className="text-gray-400 cursor-pointer">•••</div>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-gray-800 text-lg font-semibold">{title}</h3>
          <p className="text-gray-400 text-xs uppercase font-medium">Sales</p>
        </div>
      </div>

      {/* Sales Value */}
      <div className="mt-4 flex items-center">
        <h2 className="text-2xl font-bold text-gray-800">25,780,561.45</h2>
        <div className="ml-2 bg-green-100 text-green-600 text-sm font-semibold px-2 py-1 rounded-full">
          +49%
        </div>
      </div>

      {/* Line Chart */}
      <div className="mt-4">
        <Line data={chartData} options={chartOptions} height={100} />
      </div>
    </div>
  );
};

export default SalesCard;
