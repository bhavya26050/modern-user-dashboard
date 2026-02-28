import React from "react";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  Settings,
  HelpCircle,
  ChevronRight,
  BarChart3,
  Mail,
} from "lucide-react";

interface SidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
}

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive?: boolean;
}

const Sidebar = ({ collapsed = false, onToggle = () => {} }: SidebarProps) => {
  const menuItems: MenuItem[] = [
    {
      icon: <LayoutDashboard className="w-5 h-5" />,
      label: "Dashboard",
      href: "/dashboard",
      isActive: true,
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Messages",
      href: "/dashboard",
    },
    {
      icon: <Users className="w-5 h-5" />,
      label: "Contacts",
      href: "/dashboard",
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      label: "Analytics",
      href: "/dashboard",
    },
    {
      icon: <Settings className="w-5 h-5" />,
      label: "Settings",
      href: "/dashboard",
    },
    {
      icon: <HelpCircle className="w-5 h-5" />,
      label: "Help",
      href: "/dashboard",
    },
  ];

  return (
    <div
      className={cn(
        "h-full bg-[#0a0a0a] text-white transition-all duration-300 ease-in-out relative border-r border-neutral-800/50",
        collapsed ? "w-16" : "w-64",
      )}
    >
      {/* Collapse toggle button */}
      <button
        onClick={onToggle}
        className="absolute -right-3 top-6 bg-pink-600 rounded-full p-1.5 hover:bg-pink-700 transition-colors"
      >
        <ChevronRight
          className={cn(
            "w-4 h-4 transition-transform duration-300",
            collapsed ? "" : "rotate-180",
          )}
        />
      </button>

      {/* Logo area */}
      <div className="p-4 h-16 flex items-center border-b border-neutral-800">
        <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg" />
        {!collapsed && (
          <span className="ml-3 font-semibold text-lg">Contacts</span>
        )}
      </div>

      {/* Menu items */}
      <nav className="p-2">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            title={collapsed ? item.label : undefined}
            className={cn(
              "flex items-center h-12 px-3 rounded-lg mb-1 transition-colors",
              item.isActive
                ? "bg-pink-600 text-white"
                : "text-gray-400 hover:bg-neutral-800 hover:text-white",
            )}
          >
            {item.icon}
            {!collapsed && <span className="ml-3">{item.label}</span>}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
