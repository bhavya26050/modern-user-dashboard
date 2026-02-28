import React from "react";
import StatCard from "./StatCard";

interface StatisticsGridProps {
  stats?: Array<{
    title: string;
    value: string;
    change: number;
    trend: "up" | "down";
    gradientFrom: string;
    gradientTo: string;
  }>;
}

const StatisticsGrid = ({
  stats = [
    {
      title: "Total Users",
      value: "1,234",
      change: 12.5,
      trend: "up",
      gradientFrom: "from-purple-600",
      gradientTo: "to-blue-600",
    },
    {
      title: "Revenue",
      value: "$45,678",
      change: -8.2,
      trend: "down",
      gradientFrom: "from-emerald-600",
      gradientTo: "to-teal-600",
    },
    {
      title: "Active Sessions",
      value: "892",
      change: 23.1,
      trend: "up",
      gradientFrom: "from-pink-600",
      gradientTo: "to-rose-600",
    },
    {
      title: "Conversion Rate",
      value: "3.42%",
      change: 4.3,
      trend: "up",
      gradientFrom: "from-amber-600",
      gradientTo: "to-orange-600",
    },
  ],
}: StatisticsGridProps) => {
  return (
    <div className="w-full bg-transparent p-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            trend={stat.trend}
            gradientFrom={stat.gradientFrom}
            gradientTo={stat.gradientTo}
          />
        ))}
      </div>
    </div>
  );
};

export default StatisticsGrid;
