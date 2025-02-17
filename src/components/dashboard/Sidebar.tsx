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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
      href: "/",
      isActive: true,
    },
    {
      icon: <Users className="w-5 h-5" />,
      label: "Users",
      href: "/users",
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      label: "Analytics",
      href: "/analytics",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Messages",
      href: "/messages",
    },
    {
      icon: <Settings className="w-5 h-5" />,
      label: "Settings",
      href: "/settings",
    },
    {
      icon: <HelpCircle className="w-5 h-5" />,
      label: "Help",
      href: "/help",
    },
  ];

  return (
    <div
      className={cn(
        "h-full bg-[#1a1a1a] text-white transition-all duration-300 ease-in-out relative",
        collapsed ? "w-16" : "w-64",
      )}
    >
      {/* Collapse toggle button */}
      <button
        onClick={onToggle}
        className="absolute -right-3 top-6 bg-[#7C3AED] rounded-full p-1.5 hover:bg-[#6D28D9] transition-colors"
      >
        <ChevronRight
          className={cn(
            "w-4 h-4 transition-transform duration-300",
            collapsed ? "" : "rotate-180",
          )}
        />
      </button>

      {/* Logo area */}
      <div className="p-4 h-16 flex items-center border-b border-gray-800">
        <div className="w-8 h-8 bg-[#7C3AED] rounded-lg" />
        {!collapsed && (
          <span className="ml-3 font-semibold text-lg">Dashboard</span>
        )}
      </div>

      {/* Menu items */}
      <nav className="p-2">
        <TooltipProvider>
          {menuItems.map((item, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <a
                  href={item.href}
                  className={cn(
                    "flex items-center h-12 px-3 rounded-lg mb-1 transition-colors",
                    item.isActive
                      ? "bg-[#7C3AED] text-white"
                      : "text-gray-400 hover:bg-gray-800 hover:text-white",
                  )}
                >
                  {item.icon}
                  {!collapsed && <span className="ml-3">{item.label}</span>}
                </a>
              </TooltipTrigger>
              {collapsed && (
                <TooltipContent side="right">{item.label}</TooltipContent>
              )}
            </Tooltip>
          ))}
        </TooltipProvider>
      </nav>
    </div>
  );
};

export default Sidebar;
