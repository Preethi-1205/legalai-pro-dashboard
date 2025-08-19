import React from "react";
import StatCard from "../components/StatCard";
import Analytics from "../components/Analytics";
import RecentCases from "../components/RecentCases";
import Documents from "../components/Documents";
import Clients from "../components/Clients";
import Invoices from "../components/Invoices";
import ChatAssistant from "../components/ChatAssistant";
import { Folder, Users, DollarSign, Trophy } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* ===== Title ===== */}
      <h1 className="text-2xl font-bold text-slate-800">Dashboard Overview</h1>

      {/* ===== KPI Stats ===== */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard title="Active Cases" value="42" change="+12%" icon={Folder} />
        <StatCard title="Total Clients" value="128" change="+5%" icon={Users} />
        <StatCard title="Monthly Revenue" value="$328K" change="+8.2%" icon={DollarSign} />
        <StatCard title="Win Rate" value="87%" change="+3.1%" icon={Trophy} />
      </div>

      {/* ===== Analytics Section ===== */}
      <Analytics />

      {/* ===== Grid: Cases + Invoices ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentCases />
        <Invoices />
      </div>

      {/* ===== Grid: Clients + Documents ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Clients />
        <Documents />
      </div>

      {/* ===== AI Chat Assistant ===== */}
      <ChatAssistant />
    </div>
  );
}
