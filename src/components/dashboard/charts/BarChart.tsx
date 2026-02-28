import React from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface BarChartProps {
  data?: {
    label: string;
    value: number;
  }[];
  title?: string;
  height?: number;
}

const BarChart = ({
  data = [
    { label: "Jan", value: 65 },
    { label: "Feb", value: 45 },
    { label: "Mar", value: 85 },
    { label: "Apr", value: 35 },
    { label: "May", value: 55 },
  ],
  title = "Monthly Statistics",
  height = 280,
}: BarChartProps) => {
  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <Card className="p-6 bg-[#111] border-neutral-800/50 text-white h-full">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div
        className="flex items-end justify-between gap-2 h-[200px]"
        style={{ height: height - 80 }}
      >
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-2 flex-1">
            <motion.div
              className="w-full bg-pink-500 rounded-t hover:bg-pink-400 transition-colors"
              initial={{ height: 0 }}
              animate={{ height: `${(item.value / maxValue) * 100}%` }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            />
            <span className="text-sm text-gray-400">{item.label}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default BarChart;
