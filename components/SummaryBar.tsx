'use client'

interface SummaryBarProps {
  currentRole: 'athlete' | 'vendor'
}

export default function SummaryBar({ currentRole }: SummaryBarProps) {
  if (currentRole === 'athlete') {
    return (
      <div className="summary-bar">
        <div className="summary-card">
          <div className="summary-label">Tier & Valuation</div>
          <div className="summary-content">
            <span className="tier-badge">Gold</span>
            <span className="valuation">$2.4M</span>
            <span className="delta positive">+12%</span>
          </div>
        </div>
        <div className="summary-card">
          <div className="summary-label">Contracts</div>
          <div className="summary-content">
            <span className="count active">8 Active</span>
            <span className="count pending">3 Pending Renewal</span>
            <span className="count expired">2 Expired</span>
          </div>
        </div>
        <div className="summary-card">
          <div className="summary-label">Assets</div>
          <div className="summary-content">
            <span className="count active">24 Total Tagged</span>
            <span className="count pending">5 Pending Approval</span>
            <span className="count expired">1 Rights Conflict</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="summary-bar">
      <div className="summary-card">
        <div className="summary-label">Integration Status</div>
        <div className="summary-content">
          <span className="status-badge healthy">Analytics</span>
          <span className="status-badge healthy">Payments</span>
        </div>
      </div>
      <div className="summary-card">
        <div className="summary-label">Licenses</div>
        <div className="summary-content">
          <span className="count active">12 Active</span>
          <span className="count pending">4 Pending Approval</span>
          <span className="count expired">3 Expired</span>
        </div>
      </div>
      <div className="summary-card">
        <div className="summary-label">Campaigns</div>
        <div className="summary-content">
          <span className="count active">8 Live</span>
          <span className="count pending">5 Scheduled</span>
          <span className="count">23 Completed</span>
        </div>
      </div>
    </div>
  )
}


