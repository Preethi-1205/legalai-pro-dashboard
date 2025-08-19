import React, { useState } from "react";
import SectionCard from "./SectionCard";
import Modal from "./Modal";
import { Eye, Pencil, Check, Plus } from "lucide-react";
import { recentCases as seedCases } from "../data/mockData";

export default function RecentCases() {
  const [rows, setRows] = useState(seedCases);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ id: "", client: "", type: "Litigation", status: "Active", priority: "Medium", next: "" });

  const onSubmit = (e) => {
    e?.preventDefault();
    if (!form.id.trim() || !form.client.trim() || !form.next.trim()) return;
    setRows((prev) => [form, ...prev]);
    setForm({ id: "", client: "", type: "Litigation", status: "Active", priority: "Medium", next: "" });
    setOpen(false);
  };

  return (
    <SectionCard
      title="Recent Cases"
      action={
        <button className="btn btn-primary" onClick={() => setOpen(true)}>
          <Plus className="w-4 h-4" /> New Case
        </button>
      }
    >
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-slate-600">
              <th className="py-2">Case ID</th>
              <th>Client</th>
              <th>Type</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Next Step</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((c, i) => (
              <tr key={c.id + i} className="border-t">
                <td className="py-2 font-medium">{c.id}</td>
                <td>{c.client}</td>
                <td>{c.type}</td>
                <td>{c.status}</td>
                <td>{c.priority}</td>
                <td>{c.next}</td>
                <td className="text-right">
                  <div className="inline-flex gap-2">
                    <button className="btn"><Eye className="w-4 h-4" /></button>
                    <button className="btn"><Pencil className="w-4 h-4" /></button>
                    <button className="btn"><Check className="w-4 h-4" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* New Case Modal */}
      <Modal
        open={open}
        title="Create Case"
        onClose={() => setOpen(false)}
        footer={
          <div className="flex justify-end gap-2">
            <button className="btn" onClick={() => setOpen(false)}>Cancel</button>
            <button className="btn btn-primary" onClick={onSubmit}>Create</button>
          </div>
        }
      >
        <form onSubmit={onSubmit} className="space-y-3">
          <div className="grid grid-cols-4 gap-3 items-center">
            <label className="text-sm text-slate-600 col-span-1">Case ID</label>
            <input className="input col-span-3" value={form.id} onChange={(e) => setForm({ ...form, id: e.target.value })} placeholder="#2025-100" required />
          </div>
          <div className="grid grid-cols-4 gap-3 items-center">
            <label className="text-sm text-slate-600 col-span-1">Client</label>
            <input className="input col-span-3" value={form.client} onChange={(e) => setForm({ ...form, client: e.target.value })} placeholder="Acme Corp" required />
          </div>
          <div className="grid grid-cols-4 gap-3 items-center">
            <label className="text-sm text-slate-600 col-span-1">Next Step</label>
            <input className="input col-span-3" value={form.next} onChange={(e) => setForm({ ...form, next: e.target.value })} placeholder="Discovery Phase" required />
          </div>
          <div className="grid grid-cols-4 gap-3 items-center">
            <label className="text-sm text-slate-600 col-span-1">Type</label>
            <select className="input col-span-3" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
              <option>Litigation</option>
              <option>Corporate Law</option>
              <option>IP</option>
              <option>Employment</option>
            </select>
          </div>
          <div className="grid grid-cols-4 gap-3 items-center">
            <label className="text-sm text-slate-600 col-span-1">Status</label>
            <select className="input col-span-3" value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
              <option>Active</option>
              <option>Pending</option>
              <option>Closed</option>
            </select>
          </div>
          <div className="grid grid-cols-4 gap-3 items-center">
            <label className="text-sm text-slate-600 col-span-1">Priority</label>
            <select className="input col-span-3" value={form.priority} onChange={(e) => setForm({ ...form, priority: e.target.value })}>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>
        </form>
      </Modal>
    </SectionCard>
  );
}
