import React, { useState } from "react";
import SectionCard from "./SectionCard";
import Modal from "./Modal";
import { Eye, Send, Plus } from "lucide-react";
import { invoices as seedInvoices, invoiceSummary as seedSummary } from "../data/mockData";

const nextId = () => {
  const now = new Date();
  const y = now.getFullYear();
  const n = String(now.getTime()).slice(-3);
  return `#INV-${y}-${n}`;
};

function Status({ status }) {
  const classes = {
    Paid: "badge badge-green",
    Pending: "badge badge-yellow",
    Overdue: "badge badge-red",
  };
  return <span className={classes[status] || "badge badge-blue"}>{status}</span>;
}

export default function Invoices() {
  const [invoices, setInvoices] = useState(seedInvoices);
  const [summary, setSummary] = useState(seedSummary);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ client: "", amount: "", due: "" });

  const onSubmit = (e) => {
    e?.preventDefault();
    const amt = parseFloat(form.amount);
    if (!form.client.trim() || !amt || !form.due) return;

    const newInv = { id: nextId(), client: form.client.trim(), amount: amt, due: form.due, status: "Pending" };
    setInvoices((prev) => [newInv, ...prev]);
    setSummary((s) => ({ ...s, outstanding: s.outstanding + amt, pendingCount: s.pendingCount + 1 }));
    setForm({ client: "", amount: "", due: "" });
    setOpen(false);
  };

  return (
    <SectionCard
      title="Invoices"
      action={
        <button className="btn btn-primary" onClick={() => setOpen(true)}>
          <Plus className="w-4 h-4" /> New Invoice
        </button>
      }
    >
      <div className="grid sm:grid-cols-4 gap-3 mb-4">
        <div className="card p-3"><div className="text-sm">Outstanding</div><div className="text-lg font-bold">${summary.outstanding}</div></div>
        <div className="card p-3"><div className="text-sm">Overdue</div><div className="text-lg font-bold">${summary.overdue}</div></div>
        <div className="card p-3"><div className="text-sm">Paid This Month</div><div className="text-lg font-bold">${summary.paidThisMonth}</div></div>
        <div className="card p-3"><div className="text-sm">Pending</div><div className="text-lg font-bold">{summary.pendingCount}</div></div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-slate-600">
              <th className="py-2">Invoice #</th>
              <th>Client</th>
              <th>Amount</th>
              <th>Due</th>
              <th>Status</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv) => (
              <tr key={inv.id} className="border-t">
                <td className="py-2">{inv.id}</td>
                <td>{inv.client}</td>
                <td>${inv.amount}</td>
                <td>{inv.due}</td>
                <td><Status status={inv.status} /></td>
                <td className="text-right">
                  <div className="inline-flex gap-2">
                    <button className="btn"><Eye className="w-4 h-4" /></button>
                    <button className="btn"><Send className="w-4 h-4" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* New Invoice Modal */}
      <Modal
        open={open}
        title="Create Invoice"
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
            <label className="text-sm text-slate-600 col-span-1">Client</label>
            <input className="input col-span-3" value={form.client} onChange={(e) => setForm({ ...form, client: e.target.value })} placeholder="Acme Corp" required />
          </div>
          <div className="grid grid-cols-4 gap-3 items-center">
            <label className="text-sm text-slate-600 col-span-1">Amount ($)</label>
            <input type="number" min="0" step="0.01" className="input col-span-3" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} placeholder="1000" required />
          </div>
          <div className="grid grid-cols-4 gap-3 items-center">
            <label className="text-sm text-slate-600 col-span-1">Due Date</label>
            <input type="date" className="input col-span-3" value={form.due} onChange={(e) => setForm({ ...form, due: e.target.value })} required />
          </div>
          <p className="text-xs text-slate-500">Status starts as <b>Pending</b>. You can mark as Paid later.</p>
        </form>
      </Modal>
    </SectionCard>
  );
}
