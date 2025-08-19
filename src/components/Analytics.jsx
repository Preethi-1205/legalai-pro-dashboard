import React from 'react'
import SectionCard from './SectionCard'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, CartesianGrid, Legend } from 'recharts'
import { revenueTrend, caseDistribution, monthlyMetrics } from '../data/mockData'

export default function Analytics() {
  return (
    <SectionCard title="Analytics">
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="card p-3 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={revenueTrend}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#1e293b" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="card p-3 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={caseDistribution} dataKey="value" nameKey="name" outerRadius={80} fill="#1e293b" label>
                {caseDistribution.map((_, i) => <Cell key={i} />)}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="card p-3 h-64 lg:col-span-2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyMetrics}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#1e293b" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </SectionCard>
  )
}
