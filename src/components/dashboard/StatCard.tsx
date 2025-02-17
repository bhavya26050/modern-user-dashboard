import React from "react";
import { Card } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface StatCardProps {
  title?: string;
  value?: string;
  change?: number;
  trend?: "up" | "down";
  gradientFrom?: string;
  gradientTo?: string;
}

const StatCard = ({
  title = "Total Users",
  value = "1,234",
  change = 12.5,
  trend = "up",
  gradientFrom = "from-purple-600",
  gradientTo = "to-blue-600",
}: StatCardProps) => {
  return (
    <Card
      className={`w-full h-40 p-6 bg-[#1a1a1a] border-none overflow-hidden relative`}
    >
      <div
        className={`absolute inset-0 opacity-10 bg-gradient-to-br ${gradientFrom} ${gradientTo}`}
      />

      <div className="relative z-10 h-full flex flex-col justify-between">
        <div className="text-gray-400 text-sm font-medium">{title}</div>

        <div className="space-y-2">
          <div className="text-3xl font-bold text-white">{value}</div>

          <div className="flex items-center space-x-2">
            <div
              className={`flex items-center ${trend === "up" ? "text-green-500" : "text-red-500"}`}
            >
              {trend === "up" ? (
                <ArrowUpRight className="w-4 h-4" />
              ) : (
                <ArrowDownRight className="w-4 h-4" />
              )}
              <span className="text-sm font-medium">{Math.abs(change)}%</span>
            </div>
            <span className="text-gray-500 text-sm">vs last month</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default StatCard;
