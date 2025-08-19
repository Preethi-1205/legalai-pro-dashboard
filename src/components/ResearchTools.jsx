import React, { useState } from 'react'
import SectionCard from './SectionCard'
import { researchResults, researchSaved } from '../data/mockData'

export default function ResearchTools() {
  const [query, setQuery] = useState("")
  const results = researchResults.filter(r => r.title.toLowerCase().includes(query.toLowerCase()))

  return (
    <SectionCard title="Research Tools">
      <div className="flex gap-2 mb-3">
        <input
          className="input"
          placeholder="Search legal topics..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button className="btn">Search</button>
      </div>
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-3">
          {results.map((r, i) => (
            <div key={i} className="card p-3">
              <div className="font-semibold">{r.title} <span className="text-xs text-slate-500">{r.match}% Match</span></div>
              <div className="text-xs text-slate-500">{r.court}</div>
              <p className="text-sm mt-1">{r.snippet}</p>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold">Saved Searches</h3>
          {researchSaved.map((s, i) => (
            <div key={i} className="text-sm">{s.title} – {s.results} results</div>
          ))}
        </div>
      </div>
    </SectionCard>
  )
}
