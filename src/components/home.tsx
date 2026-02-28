import React, { useState, useEffect, useCallback } from "react";
import DashboardHeader from "./dashboard/DashboardHeader";
import Sidebar from "./dashboard/Sidebar";
import StatisticsGrid from "./dashboard/StatisticsGrid";
import ChartGrid from "./dashboard/ChartGrid";
import RecentContacts from "./dashboard/RecentContacts";
import {
  getAllContacts,
  getContactStats,
  getContactsByMonth,
  getContactsBySource,
  updateContactStatus,
  type Contact,
} from "../lib/contactStore";

const Home = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [stats, setStats] = useState(getContactStats());
  const [lineData, setLineData] = useState(getContactsByMonth());
  const [barData, setBarData] = useState(getContactsBySource());

  const refreshData = useCallback(() => {
    setContacts(getAllContacts());
    setStats(getContactStats());
    setLineData(getContactsByMonth());
    setBarData(getContactsBySource());
  }, []);

  useEffect(() => {
    refreshData();
    // Poll for new contacts every 5 seconds
    const interval = setInterval(refreshData, 5000);
    return () => clearInterval(interval);
  }, [refreshData]);

  const handleStatusChange = (id: string, status: Contact["status"]) => {
    updateContactStatus(id, status);
    refreshData();
  };

  const newCount = contacts.filter((c) => c.status === "new").length;

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden">
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader
          userName="Admin"
          userAvatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin"
          notifications={
            newCount > 0
              ? contacts
                  .filter((c) => c.status === "new")
                  .slice(0, 5)
                  .map((c) => ({
                    id: c.id,
                    message: `New message from ${c.name}`,
                  }))
              : []
          }
        />

        <div className="flex-1 overflow-y-auto bg-[#0a0a0a]">
          <div className="container mx-auto p-6 space-y-6">
            <StatisticsGrid
              stats={[
                {
                  title: "Total Contacts",
                  value: stats.totalContacts.toLocaleString(),
                  change: stats.monthChange,
                  trend: stats.monthChange >= 0 ? "up" : "down",
                  gradientFrom: "from-pink-600",
                  gradientTo: "to-rose-600",
                },
                {
                  title: "New Messages",
                  value: stats.newMessages.toString(),
                  change: stats.newMessages > 0 ? 15 : 0,
                  trend: "up",
                  gradientFrom: "from-fuchsia-600",
                  gradientTo: "to-pink-600",
                },
                {
                  title: "Response Rate",
                  value: `${stats.responseRate}%`,
                  change: 5.2,
                  trend: "up",
                  gradientFrom: "from-rose-600",
                  gradientTo: "to-red-600",
                },
                {
                  title: "This Month",
                  value: stats.thisMonthContacts.toString(),
                  change: stats.monthChange,
                  trend: stats.monthChange >= 0 ? "up" : "down",
                  gradientFrom: "from-pink-500",
                  gradientTo: "to-fuchsia-600",
                },
              ]}
            />

            <ChartGrid lineChartData={lineData} barChartData={barData} />

            <RecentContacts
              contacts={contacts}
              onStatusChange={handleStatusChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
