import React from "react";

const Card = ({ title, amount, growth }) => {
  return (
    <div className="card bg-white shadow-md rounded-lg p-4">
      <h3 className="text-xl">{title}</h3>
      <p className="text-2xl font-bold mt-2">{amount}</p>
      <span className="text-green-500">{growth}</span>
    </div>
  );
};

export default Card;
