import React, { useMemo, useState } from "react";
import SectionCard from "./SectionCard";
import Modal from "./Modal";
import { Mail, Phone, Plus } from "lucide-react";
import { clients as seedClients } from "../data/mockData";

const initialsFrom = (name) =>
  (name || "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0]?.toUpperCase())
    .join("") || "CL";

function Avatar({ initials }) {
  return (
    <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold">
      {initials}
    </div>
  );
}

export default function Clients() {
  const [list, setList] = useState(seedClients);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", person: "", email: "", phone: "" });
  const initials = useMemo(() => initialsFrom(form.name), [form.name]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;
    setList((prev) => [
      ...prev,
      {
        initials,
        name: form.name.trim(),
        person: form.person.trim() || "—",
        email: form.email.trim(),
        phone: form.phone.trim() || "—",
        active: 0,
      },
    ]);
    setForm({ name: "", person: "", email: "", phone: "" });
    setOpen(false);
  };

  return (
    <SectionCard
      title="Clients"
      action={
        <button className="btn btn-primary" onClick={() => setOpen(true)}>
          <Plus className="w-4 h-4" /> Add Client
        </button>
      }
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map((c) => (
          <div key={c.name} className="card p-3">
            <div className="flex items-center gap-3">
              <Avatar initials={c.initials} />
              <div>
                <div className="font-medium">{c.name}</div>
                <div className="text-xs text-slate-500">{c.person}</div>
              </div>
            </div>
            <div className="mt-3 text-sm space-y-1">
              <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> {c.email}</div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> {c.phone}</div>
              <div className="text-xs text-slate-500">{c.active} Active Cases</div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Client Modal */}
      <Modal open={open} title="Add Client" onClose={() => setOpen(false)}
        footer={
          <div className="flex justify-end gap-2">
            <button className="btn" onClick={() => setOpen(false)}>Cancel</button>
            <button className="btn btn-primary" onClick={onSubmit}>Save Client</button>
          </div>
        }
      >
        <form onSubmit={onSubmit} className="space-y-3">
          <div className="grid grid-cols-4 gap-3 items-center">
            <label className="text-sm text-slate-600 col-span-1">Name</label>
            <input className="input col-span-3" value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Acme Corp" required />
          </div>
          <div className="grid grid-cols-4 gap-3 items-center">
            <label className="text-sm text-slate-600 col-span-1">Contact</label>
            <input className="input col-span-3" value={form.person}
              onChange={(e) => setForm({ ...form, person: e.target.value })} placeholder="Jane Doe, Legal Director" />
          </div>
          <div className="grid grid-cols-4 gap-3 items-center">
            <label className="text-sm text-slate-600 col-span-1">Email</label>
            <input type="email" className="input col-span-3" value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="legal@acme.com" required />
          </div>
          <div className="grid grid-cols-4 gap-3 items-center">
            <label className="text-sm text-slate-600 col-span-1">Phone</label>
            <input className="input col-span-3" value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+1 (555) 000-0000" />
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            Preview avatar initials: <span className="font-semibold">{initials}</span>
          </div>
        </form>
      </Modal>
    </SectionCard>
  );
}
