import React from "react";
import { Card } from "@/components/ui/card";
import LineChart from "./charts/LineChart";
import BarChart from "./charts/BarChart";

interface ChartGridProps {
  lineChartData?: Array<{ x: string; y: number }>;
  barChartData?: Array<{ label: string; value: number }>;
}

const ChartGrid = ({
  lineChartData = [
    { x: "Jan", y: 10 },
    { x: "Feb", y: 20 },
    { x: "Mar", y: 15 },
    { x: "Apr", y: 25 },
    { x: "May", y: 30 },
  ],
  barChartData = [
    { label: "Jan", value: 65 },
    { label: "Feb", value: 45 },
    { label: "Mar", value: 85 },
    { label: "Apr", value: 35 },
    { label: "May", value: 55 },
  ],
}: ChartGridProps) => {
  return (
    <div className="w-full h-full bg-[#1a1a1a] p-6 space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">Analytics Overview</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="w-full h-[280px]">
          <LineChart data={lineChartData} title="Revenue Trends" height={280} />
        </div>
        <div className="w-full h-[280px]">
          <BarChart data={barChartData} title="Monthly Sales" height={280} />
        </div>
      </div>
    </div>
  );
};

export default ChartGrid;
