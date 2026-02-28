import React from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import type { Contact } from "@/lib/contactStore";

interface RecentContactsProps {
  contacts: Contact[];
  onStatusChange?: (id: string, status: Contact["status"]) => void;
}

const statusColors: Record<Contact["status"], string> = {
  new: "bg-pink-500/20 text-pink-400 border-pink-500/30",
  read: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  replied: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  archived: "bg-neutral-500/20 text-neutral-400 border-neutral-500/30",
};

const statusLabels: Record<Contact["status"], string> = {
  new: "New",
  read: "Read",
  replied: "Replied",
  archived: "Archived",
};

const sourceIcons: Record<string, string> = {
  website: "🌐",
  referral: "🤝",
  social: "📱",
  direct: "📧",
};

const RecentContacts = ({ contacts, onStatusChange }: RecentContactsProps) => {
  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    const now = new Date();
    const diff = now.getTime() - d.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days === 0) return "Today";
    if (days === 1) return "Yesterday";
    if (days < 7) return `${days}d ago`;
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  return (
    <Card className="bg-[#111] border-neutral-800/50 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">Recent Contacts</h3>
        <span className="text-sm text-neutral-500">
          {contacts.length} total
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-neutral-800/50">
              <th className="text-left py-3 px-4 text-sm font-medium text-neutral-400">
                Contact
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-neutral-400 hidden md:table-cell">
                Company
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-neutral-400 hidden lg:table-cell">
                Source
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-neutral-400">
                Status
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-neutral-400 hidden sm:table-cell">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {contacts.slice(0, 8).map((contact, idx) => (
              <motion.tr
                key={contact.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="border-b border-neutral-800/30 hover:bg-neutral-900/50 transition-colors group"
              >
                <td className="py-3.5 px-4">
                  <div>
                    <p className="text-sm font-medium text-white group-hover:text-pink-300 transition-colors">
                      {contact.name}
                    </p>
                    <p className="text-xs text-neutral-500">{contact.email}</p>
                  </div>
                </td>
                <td className="py-3.5 px-4 hidden md:table-cell">
                  <span className="text-sm text-neutral-400">
                    {contact.company || "—"}
                  </span>
                </td>
                <td className="py-3.5 px-4 hidden lg:table-cell">
                  <span className="text-sm text-neutral-400">
                    {sourceIcons[contact.source]} {contact.source}
                  </span>
                </td>
                <td className="py-3.5 px-4">
                  <button
                    onClick={() => {
                      if (onStatusChange) {
                        const nextStatus: Record<
                          Contact["status"],
                          Contact["status"]
                        > = {
                          new: "read",
                          read: "replied",
                          replied: "archived",
                          archived: "new",
                        };
                        onStatusChange(contact.id, nextStatus[contact.status]);
                      }
                    }}
                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border transition-all hover:scale-105 ${statusColors[contact.status]}`}
                  >
                    {statusLabels[contact.status]}
                  </button>
                </td>
                <td className="py-3.5 px-4 hidden sm:table-cell">
                  <span className="text-sm text-neutral-500">
                    {formatDate(contact.createdAt)}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {contacts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-neutral-500 text-sm">No contacts yet</p>
          <p className="text-neutral-600 text-xs mt-1">
            Contacts from the website form will appear here
          </p>
        </div>
      )}
    </Card>
  );
};

export default RecentContacts;
