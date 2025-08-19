import React from 'react'

export default function SectionCard({ title, action, children }) {
  return (
    <section className="card p-4">
      <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
        <h2 className="font-semibold">{title}</h2>
        {action && <div>{action}</div>}
      </div>
      {children}
    </section>
  )
}
