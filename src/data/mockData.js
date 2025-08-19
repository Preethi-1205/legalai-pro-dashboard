export const kpis = [
  { title: 'Active Cases', value: 42, change: '+12%', icon: 'FolderOpen', trend: 'up' },
  { title: 'Total Clients', value: 128, change: '+5%', icon: 'Users', trend: 'up' },
  { title: 'Monthly Revenue', value: '$328K', change: '+8.2%', icon: 'DollarSign', trend: 'up' },
  { title: 'Win Rate', value: '87%', change: '+3.1%', icon: 'Trophy', trend: 'up' },
]

export const recentCases = [
  { id: '#2024-001', client: 'TechStart Inc.', type: 'Corporate Law', status: 'Active', priority: 'High', next: 'Contract Review' },
  { id: '#2024-002', client: 'Global Trading Co.', type: 'Litigation', status: 'Pending', priority: 'Medium', next: 'Discovery Phase' },
  { id: '#2024-003', client: 'Innovate LLC', type: 'IP Law', status: 'Active', priority: 'Low', next: 'Patent Filing' },
]

export const documents = [
  { id: 1, type: 'pdf', size: '2.4 MB', name: 'Contract Agreement.pdf', subtitle: 'TechStart Inc. - Employment Contract', modified: 'Jan 15, 2024' },
  { id: 2, type: 'doc', size: '1.1 MB', name: 'Legal Brief.docx', subtitle: 'Patent Infringement Case Brief', modified: 'Jan 18, 2024' },
  { id: 3, type: 'xls', size: '856 KB', name: 'Case Analysis.xlsx', subtitle: 'Financial Impact Assessment', modified: 'Jan 20, 2024' },
]

export const clients = [
  { initials: 'TS', name: 'TechStart Inc.', person: 'John Smith, CEO', email: 'john@techstart.com', phone: '+1 (555) 123-4567', active: 3 },
  { initials: 'GT', name: 'Global Trading Co.', person: 'Sarah Williams, Legal Director', email: 'sarah@globaltrading.com', phone: '+1 (555) 987-6543', active: 2 },
  { initials: 'IL', name: 'Innovate LLC', person: 'Michael Chen, CTO', email: 'michael@innovate.com', phone: '+1 (555) 456-7890', active: 1 },
]

export const invoices = [
  { id: '#INV-2024-001', client: 'TechStart Inc.', amount: 12500, due: 'Feb 15, 2024', status: 'Pending' },
  { id: '#INV-2024-002', client: 'Global Trading Co.', amount: 8750, due: 'Jan 30, 2024', status: 'Overdue' },
  { id: '#INV-2024-003', client: 'Innovate LLC', amount: 21000, due: 'Feb 20, 2024', status: 'Paid' },
]

export const invoiceSummary = {
  outstanding: 45200,
  overdue: 12800,
  paidThisMonth: 89400,
  pendingCount: 8,
}

export const researchSaved = [
  { title: 'Contract Law Precedents', results: 23 },
  { title: 'Intellectual Property Cases', results: 47 },
  { title: 'Employment Law Regulations', results: 31 },
]

export const researchResults = [
  { title: 'Smith v. Jones Corp', court: '523 U.S. 123 (2023) - Supreme Court', snippet: 'Contractual interpretation and commercial disputes precedent...', match: 95 },
  { title: 'Doe v. XYZ Industries', court: '487 F.3d 789 (2d Cir. 2023)', snippet: 'Employer liability in workplace harassment cases...', match: 87 },
]

export const aiChatSeed = [
  { from: 'user', name: 'SJ', text: 'Can you help me analyze the TechStart contract for potential risks?' },
  { from: 'ai', text: "Hello! I'm your Legal AI Assistant. How can I help you today? I can assist with document review, case research, contract analysis, and legal document drafting." },
  { from: 'ai', text: "I've analyzed the TechStart contract and identified 3 potential risk areas that may require revision." },
]

export const revenueTrend = [
  { month: 'Mar', revenue: 210 },
  { month: 'Apr', revenue: 240 },
  { month: 'May', revenue: 260 },
  { month: 'Jun', revenue: 290 },
  { month: 'Jul', revenue: 310 },
  { month: 'Aug', revenue: 328 },
]

export const caseDistribution = [
  { name: 'Corporate', value: 35 },
  { name: 'Litigation', value: 25 },
  { name: 'IP', value: 20 },
  { name: 'Employment', value: 20 },
]

export const monthlyMetrics = [
  { name: 'Avg Case Value', value: 12450 },
  { name: 'Retention Rate', value: 92 },
  { name: 'Resolution Time', value: 78 },
]
