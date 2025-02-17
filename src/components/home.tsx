import React, { useState } from "react";
import DashboardHeader from "./dashboard/DashboardHeader";
import Sidebar from "./dashboard/Sidebar";
import StatisticsGrid from "./dashboard/StatisticsGrid";
import ChartGrid from "./dashboard/ChartGrid";

const Home = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-[#1a1a1a] text-white overflow-hidden">
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader
          userName="John Doe"
          userAvatar="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
          notifications={[
            { id: "1", message: "New user registration" },
            { id: "2", message: "System update completed" },
          ]}
        />

        <div className="flex-1 overflow-y-auto">
          <div className="container mx-auto p-6 space-y-6">
            <StatisticsGrid
              stats={[
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
              ]}
            />

            <ChartGrid
              lineChartData={[
                { x: "Jan", y: 10 },
                { x: "Feb", y: 20 },
                { x: "Mar", y: 15 },
                { x: "Apr", y: 25 },
                { x: "May", y: 30 },
              ]}
              barChartData={[
                { label: "Jan", value: 65 },
                { label: "Feb", value: 45 },
                { label: "Mar", value: 85 },
                { label: "Apr", value: 35 },
                { label: "May", value: 55 },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
