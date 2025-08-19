import React from 'react'
import * as Icons from 'lucide-react'
import clsx from 'clsx'

export default function StatCard({ title, value, change, icon = 'Circle', trend = 'up' }) {
  const Icon = Icons[icon] || Icons.Circle
  return (
    <div className="card p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-slate-100 border border-slate-200">
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <div className="text-sm text-slate-500">{title}</div>
          <div className="text-xl font-semibold">{value}</div>
        </div>
      </div>
      <div className={clsx("text-xs font-medium", trend === 'up' ? "text-emerald-600" : "text-rose-600")}>
        {change}
      </div>
    </div>
  )
}
