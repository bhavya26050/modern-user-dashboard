import React, { useState, useRef, useEffect } from "react";
import { Bell, Settings, User, LogOut, ChevronDown, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface DashboardHeaderProps {
  userName?: string;
  userAvatar?: string;
  notifications?: Array<{ id: string; message: string }>;
}

const DashboardHeader = ({
  userName = "Admin",
  userAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=Admin",
  notifications = [],
}: DashboardHeaderProps) => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const initials = userName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <header className="w-full h-16 bg-[#0a0a0a] border-b border-neutral-800/50 px-6 flex items-center justify-between">
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-sm text-neutral-400 hover:text-pink-400 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Website
      </button>

      <div className="flex items-center gap-3">
        {/* Bell */}
        <button
          title="Notifications"
          className="relative p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
        >
          <Bell className="h-5 w-5" />
          {notifications.length > 0 && (
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-pink-500 animate-pulse" />
          )}
        </button>

        {/* User Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen((o) => !o)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-neutral-800 transition-colors"
          >
            {/* Avatar */}
            <div className="h-8 w-8 rounded-full overflow-hidden bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center flex-shrink-0">
              <img
                src={userAvatar}
                alt={userName}
                className="h-full w-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
              <span className="text-white text-xs font-bold absolute">{initials}</span>
            </div>
            <span className="text-sm text-neutral-200">{userName}</span>
            <ChevronDown className={`h-4 w-4 text-neutral-400 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-[#111] border border-neutral-800 rounded-xl shadow-xl z-50 py-1 overflow-hidden">
              <button className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors">
                <User className="h-4 w-4" />
                Profile
              </button>
              <button className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors">
                <Settings className="h-4 w-4" />
                Settings
              </button>
              <div className="my-1 border-t border-neutral-800" />
              <button className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-red-400 hover:bg-neutral-800 transition-colors">
                <LogOut className="h-4 w-4" />
                Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
