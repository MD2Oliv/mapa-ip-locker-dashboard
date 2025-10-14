'use client'

interface DashboardContentProps {
  currentRole: 'athlete' | 'vendor'
  currentTab: string
}

export default function DashboardContent({ currentRole, currentTab }: DashboardContentProps) {
  const mockData = {
    athlete: {
      timeline: [
        {
          date: '2024-01-15',
          type: 'Contract',
          title: 'Nike Endorsement Deal',
          status: 'Active',
          linkedItems: '3 Assets',
          actions: ['View', 'Renew']
        },
        {
          date: '2024-01-12',
          type: 'Asset',
          title: 'Training Video Series',
          status: 'Pending Approval',
          linkedItems: '1 Contract',
          actions: ['View', 'Share-disabled']
        },
        {
          date: '2024-01-10',
          type: 'Approval',
          title: 'Guardian Approval Required',
          status: 'Blocked',
          linkedItems: '2 Assets',
          actions: ['View', 'Resend']
        }
      ],
      contracts: [
        {
          name: 'Nike Endorsement Deal',
          partner: 'Nike Inc.',
          termStart: '2023-01-01',
          termEnd: '2025-12-31',
          status: 'Active',
          linkedAssets: 3,
          nextAction: 'Renew by Dec 2025'
        },
        {
          name: 'EA SPORTS Athlete Participation',
          partner: 'EA SPORTS College Football',
          termStart: '2025-05-01',
          termEnd: '2026-04-30',
          status: 'Active',
          linkedAssets: 3,
          nextAction: 'View / Download PDF'
        }
      ]
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const renderTimeline = () => (
    <div className="widget">
      <div className="widget-header">
        <h2>IP Locker Timeline</h2>
        <div className="widget-actions">
          <select className="filter-select">
            <option>All Types</option>
            <option>Contract</option>
            <option>Asset</option>
            <option>Approval</option>
          </select>
          <select className="filter-select">
            <option>All Status</option>
            <option>Active</option>
            <option>Pending</option>
            <option>Expired</option>
            <option>Blocked</option>
          </select>
        </div>
      </div>
      <div className="timeline-table">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Item Type</th>
              <th>Title</th>
              <th>Status</th>
              <th>Linked Items</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockData.athlete.timeline.map((item, index) => (
              <tr key={index}>
                <td>{formatDate(item.date)}</td>
                <td><span className={`status-${item.type.toLowerCase()}`}>{item.type}</span></td>
                <td><strong>{item.title}</strong></td>
                <td><span className={`status-${item.status.toLowerCase()}`}>{item.status}</span></td>
                <td><span className="text-gray-600">{item.linkedItems}</span></td>
                <td>
                  <div className="action-buttons">
                    {item.actions.map((action, actionIndex) => (
                      <button key={actionIndex} className={`action-btn ${action.toLowerCase().replace(' ', '-')}`}>
                        {action}
                      </button>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )

  const renderContracts = () => (
    <div className="widget">
      <div className="widget-header">
        <h2>Contracts</h2>
        <div className="widget-actions">
          <button className="btn btn-primary">
            <i className="fas fa-upload"></i> Upload Contract
          </button>
          <button className="btn btn-secondary">
            <i className="fas fa-link"></i> Link Assets
          </button>
        </div>
      </div>
      <div className="contracts-table">
        <table>
          <thead>
            <tr>
              <th>Contract Name</th>
              <th>Partner</th>
              <th>Term Start-End</th>
              <th>Status</th>
              <th>Linked Assets</th>
              <th>Next Action</th>
            </tr>
          </thead>
          <tbody>
            {mockData.athlete.contracts.map((contract, index) => (
              <tr key={index}>
                <td><strong>{contract.name}</strong></td>
                <td><span className="text-gray-600">{contract.partner}</span></td>
                <td><span className="text-gray-600">{formatDate(contract.termStart)} - {formatDate(contract.termEnd)}</span></td>
                <td><span className={`status-${contract.status.toLowerCase()}`}>{contract.status}</span></td>
                <td><span className="text-gray-600">{contract.linkedAssets} assets</span></td>
                <td><span className="text-gray-600">{contract.nextAction}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )

  const renderJoin = () => (
    <div className="widget">
      <div className="widget-header">
        <h2>Join NILE Fan Guard Fund</h2>
        <div className="widget-actions">
          <button className="btn btn-secondary" onClick={() => {
            const modal = document.getElementById('fanGuardModal')
            if (modal) modal.classList.add('active')
          }}>
            <i className="fas fa-info-circle"></i> Learn More
          </button>
        </div>
      </div>
      <div className="join-content">
        <div className="join-hero">
          <div className="nile-logo-large">
            <div className="nile-symbol-large">
              <div className="triangle-outer-large"></div>
              <div className="triangle-inner-large"></div>
            </div>
            <div className="nile-text-large">NILE INS</div>
          </div>
          <h3>Join the NILE Fan Guard Fund Waitlist</h3>
          <p>Be among the first to access comprehensive protection for your intellectual property, equipment coverage, and enhanced monetization opportunities.</p>
        </div>
        
        <div className="waitlist-form-container">
          <div className="blocksurvey-embed">
            <embed 
              src="https://blocksurvey.io/mapanile-athlete-nil-intake-qrO7P.cAQEe2yMACIZTkZA?v=o" 
              style={{ width: '100%', height: '50vh', border: 'none', borderRadius: '12px' }}
            />
          </div>
          
          <div className="waitlist-benefits">
            <h4>What You'll Get:</h4>
            <ul>
              <li><i className="fas fa-shield-alt"></i> Comprehensive IP Protection</li>
              <li><i className="fas fa-tools"></i> Equipment Coverage & Insurance</li>
              <li><i className="fas fa-chart-line"></i> Enhanced Monetization Tools</li>
              <li><i className="fas fa-gift"></i> Gift Management</li>
              <li><i className="fas fa-headset"></i> Priority Support & Consultation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )

  const renderContent = () => {
    if (currentRole === 'athlete') {
      switch (currentTab) {
        case 'timeline':
          return renderTimeline()
        case 'contracts':
          return renderContracts()
        case 'join':
          return renderJoin()
        default:
          return renderTimeline()
      }
    } else {
      // Vendor dashboard content
      switch (currentTab) {
        case 'join':
          return renderJoin()
        default:
          return (
            <div className="widget">
              <div className="widget-header">
                <h2>Vendor Dashboard</h2>
              </div>
              <div style={{ padding: '2rem', textAlign: 'center' }}>
                <p>Vendor dashboard content coming soon...</p>
              </div>
            </div>
          )
      }
    }
  }

  return (
    <div className="dashboard">
      {renderContent()}
    </div>
  )
}

