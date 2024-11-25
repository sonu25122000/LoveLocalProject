import React from "react";
import Card from "./Card";
import SalesCard from "./Aa";
import DirectVsIndirectChart from "./ChartCard";
import AvgOrderValueChart from "./ChartCard2";

const Overview = () => {
  return (
    <div>
      <div className="overview grid grid-cols-3 gap-4 p-6">
        {/* <Card title="Retail Sales" amount="25,780,561.45" growth="+4.9%" />
      <Card title="Customer Sales" amount="19,333,489.93" growth="+3.4%" />
      <Card title="Key Account" amount="9,962,350.11" growth="+2.3%" /> */}
        <SalesCard title="Retail Sales" />
        <SalesCard title="Customer Sales" />

        <SalesCard title="Key Account" />
      </div>
      <div className="flex justify-between gap-3 p-6">
        <DirectVsIndirectChart />
        <AvgOrderValueChart />
      </div>
    </div>
  );
};

export default Overview;
