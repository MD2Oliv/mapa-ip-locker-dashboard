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
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div className="benefit-content">
                  <h5>Comprehensive IP Protection</h5>
                  <p>Advanced intellectual property monitoring and protection services</p>
                </div>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fas fa-tools"></i>
                </div>
                <div className="benefit-content">
                  <h5>Equipment Coverage & Insurance</h5>
                  <p>Full coverage for training equipment and athletic gear</p>
                </div>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <div className="benefit-content">
                  <h5>Enhanced Monetization Tools</h5>
                  <p>Advanced analytics and revenue optimization features</p>
                </div>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fas fa-gift"></i>
                </div>
                <div className="benefit-content">
                  <h5>Gift Management</h5>
                  <p>Streamlined fan contribution and gift tracking system</p>
                </div>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fas fa-headset"></i>
                </div>
                <div className="benefit-content">
                  <h5>Priority Support & Consultation</h5>
                  <p>24/7 dedicated support and expert consultation services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderAssets = () => (
    <div className="widget">
      <div className="widget-header">
        <h2>Assets & Rights</h2>
        <div className="widget-actions">
          <button className="btn btn-primary">
            <i className="fas fa-upload"></i> Upload Asset
          </button>
          <button className="btn btn-secondary">
            <i className="fas fa-tag"></i> Tag Rights
          </button>
          <button className="btn btn-secondary">
            <i className="fas fa-user-shield"></i> Request Guardian Approval
          </button>
        </div>
      </div>
      <div className="assets-table">
        <table>
          <thead>
            <tr>
              <th>Asset Name</th>
              <th>Rights</th>
              <th>Expiration</th>
              <th>Guardian Status</th>
              <th>Linked Contracts</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Training Video Series</strong></td>
              <td><span className="status-exclusive">Exclusive</span></td>
              <td><span className="text-gray-600">Indefinite</span></td>
              <td><span className="status-pending">Required</span></td>
              <td><span className="text-gray-600">2 contracts</span></td>
            </tr>
            <tr>
              <td><strong>Social Media Content</strong></td>
              <td><span className="status-shared">Shared</span></td>
              <td><span className="text-gray-600">2025-12-31</span></td>
              <td><span className="status-active">Approved</span></td>
              <td><span className="text-gray-600">1 contract</span></td>
            </tr>
            <tr>
              <td><strong>Brand Photos</strong></td>
              <td><span className="status-licensed">Licensed</span></td>
              <td><span className="text-gray-600">2026-06-30</span></td>
              <td><span className="text-gray-600">N/A</span></td>
              <td><span className="text-gray-600">3 contracts</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )

  const renderApprovals = () => (
    <div className="widget">
      <div className="widget-header">
        <h2>Approvals (Guardian)</h2>
        <div className="widget-actions">
          <button className="btn btn-secondary">
            <i className="fas fa-paper-plane"></i> Resend Approval
          </button>
          <button className="btn btn-secondary">
            <i className="fas fa-edit"></i> Edit Rights
          </button>
        </div>
      </div>
      <div className="approvals-grid">
        <div className="approval-card">
          <div className="approval-header">
            <h4>Training Video Series</h4>
            <span className="status-badge blocked">Blocked</span>
          </div>
          <div className="approval-details">
            <p><strong>Submitted:</strong> Jan 10, 2024</p>
            <p><strong>Expires:</strong> Jan 17, 2024</p>
            <p><strong>Status:</strong> Pending Guardian Review</p>
          </div>
          <div className="approval-actions">
            <button className="btn btn-primary">View Details</button>
            <button className="btn btn-secondary">Resend</button>
          </div>
        </div>
        <div className="approval-card">
          <div className="approval-header">
            <h4>Brand Partnership Photos</h4>
            <span className="status-badge active">Approved</span>
          </div>
          <div className="approval-details">
            <p><strong>Submitted:</strong> Jan 5, 2024</p>
            <p><strong>Approved:</strong> Jan 8, 2024</p>
            <p><strong>Status:</strong> Active</p>
          </div>
          <div className="approval-actions">
            <button className="btn btn-primary">View Details</button>
            <button className="btn btn-secondary">Edit Rights</button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderValuation = () => (
    <div className="widget">
      <div className="widget-header">
        <h2>Valuation & Tier</h2>
        <div className="widget-actions">
          <button className="btn btn-primary">
            <i className="fas fa-download"></i> Download Valuation Report
          </button>
        </div>
      </div>
      <div className="valuation-content">
        <div className="valuation-metrics">
          <div className="metric-card">
            <div className="metric-label">Rights Ownership Index</div>
            <div className="metric-description">Percentage of assets with verified ownership</div>
            <div className="metric-value">87%</div>
            <div className="metric-delta positive">+5%</div>
          </div>
          <div className="metric-card">
            <div className="metric-label">Verified Revenue Actions</div>
            <div className="metric-description">Total monetization activities completed</div>
            <div className="metric-value">$2.4M</div>
            <div className="metric-delta positive">+12%</div>
          </div>
          <div className="metric-card">
            <div className="metric-label">Engagement Integrity</div>
            <div className="metric-description">Authentic Engagement</div>
            <div className="metric-value">94%</div>
            <div className="metric-delta positive">+3%</div>
          </div>
          <div className="metric-card">
            <div className="metric-label">Composite NIL Value</div>
            <div className="metric-description">Total estimated NIL valuation</div>
            <div className="metric-value">$2.4M</div>
            <div className="metric-delta positive">+8%</div>
          </div>
        </div>
        <div className="tier-progress">
          <h4>Progress to Platinum Tier</h4>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '75%' }}></div>
          </div>
          <p className="progress-text">75% complete - $600K more needed for Platinum</p>
          
          <div className="unlock-criteria">
            <h5>Unlock Criteria for Platinum Tier:</h5>
            <ul className="criteria-list">
              <li className="criteria-item completed">
                <i className="fas fa-check-circle"></i>
                <span>Complete 150+ verified revenue actions</span>
              </li>
              <li className="criteria-item completed">
                <i className="fas fa-check-circle"></i>
                <span>Maintain 90%+ engagement integrity</span>
              </li>
              <li className="criteria-item pending">
                <i className="fas fa-clock"></i>
                <span>Complete 3 more verified revenue actions</span>
              </li>
              <li className="criteria-item pending">
                <i className="fas fa-clock"></i>
                <span>Add 2 more exclusive asset rights</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )

  const renderRequests = () => (
    <div className="widget">
      <div className="widget-header">
        <h2>Requests Inbox</h2>
        <div className="widget-actions">
          <button className="btn btn-primary">
            <i className="fas fa-eye"></i> View All Requests
          </button>
        </div>
      </div>
      <div className="requests-table">
        <table>
          <thead>
            <tr>
              <th>Vendor</th>
              <th>Asset Requested</th>
              <th>Rights Scope</th>
              <th>Duration</th>
              <th>Due</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Local Radio Deal</strong></td>
              <td><span className="text-gray-600">Training Video Series</span></td>
              <td><span className="text-gray-600">Promotional Use</span></td>
              <td><span className="text-gray-600">60 days</span></td>
              <td><span className="text-red-600">Feb 04, 2025</span></td>
              <td>
                <div className="action-buttons">
                  <button className="action-btn approve">Approve</button>
                  <button className="action-btn deny">Deny</button>
                  <button className="action-btn view">View Vendor</button>
                </div>
              </td>
            </tr>
            <tr>
              <td><strong>Sports Marketing Co.</strong></td>
              <td><span className="text-gray-600">Brand Photos</span></td>
              <td><span className="text-gray-600">Commercial Use</span></td>
              <td><span className="text-gray-600">90 days</span></td>
              <td><span className="text-gray-600">Mar 15, 2025</span></td>
              <td>
                <div className="action-buttons">
                  <button className="action-btn approve">Approve</button>
                  <button className="action-btn deny">Deny</button>
                  <button className="action-btn view">View Vendor</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        
        {/* Alerts Section */}
        <div className="requests-alerts">
          <h4><i className="fas fa-exclamation-triangle"></i> Important Alerts</h4>
          <div className="alert-item urgent">
            <div className="alert-icon"><i className="fas fa-clock"></i></div>
            <div className="alert-content">
              <div className="alert-title">Local Radio Deal Request Expires Soon</div>
              <div className="alert-message">Response needed by Feb 04, 2025 - 3 days remaining</div>
            </div>
            <div className="alert-action">
              <button className="btn btn-sm btn-primary">Respond Now</button>
            </div>
          </div>
          <div className="alert-item warning">
            <div className="alert-icon"><i className="fas fa-info-circle"></i></div>
            <div className="alert-content">
              <div className="alert-title">Equipment Protection Coverage Update</div>
              <div className="alert-message">New coverage options available for your equipment</div>
            </div>
            <div className="alert-action">
              <button className="btn btn-sm btn-secondary">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderVendorRequests = () => (
    <div className="widget">
      <div className="widget-header">
        <h2>Requests & Approvals</h2>
        <div className="widget-actions">
          <button className="btn btn-primary">
            <i className="fas fa-search"></i> Find Athlete & Request Asset
          </button>
        </div>
      </div>
      <div className="vendor-requests-table">
        <table>
          <thead>
            <tr>
              <th>Athlete</th>
              <th>Asset</th>
              <th>Requested Rights</th>
              <th>Duration</th>
              <th>Status</th>
              <th>SLA Countdown</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Alex Johnson</strong></td>
              <td><span className="text-gray-600">Training Video Series</span></td>
              <td><span className="text-gray-600">Commercial Use</span></td>
              <td><span className="text-gray-600">30 days</span></td>
              <td><span className="status-pending">Pending</span></td>
              <td><span className="text-yellow-600">2 days left</span></td>
              <td>
                <div className="action-buttons">
                  <button className="action-btn edit">Edit Request</button>
                  <button className="action-btn withdraw">Withdraw</button>
                </div>
              </td>
            </tr>
            <tr>
              <td><strong>Sarah Martinez</strong></td>
              <td><span className="text-gray-600">Brand Photos</span></td>
              <td><span className="text-gray-600">Promotional Use</span></td>
              <td><span className="text-gray-600">60 days</span></td>
              <td><span className="status-active">Approved</span></td>
              <td><span className="text-green-600">Completed</span></td>
              <td>
                <div className="action-buttons">
                  <button className="action-btn view">View License</button>
                  <button className="action-btn renew">Renew</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )

  const renderLicensedAssets = () => (
    <div className="widget">
      <div className="widget-header">
        <h2>Licensed Assets</h2>
        <div className="widget-actions">
          <button className="btn btn-primary">
            <i className="fas fa-sync"></i> Renew License
          </button>
          <button className="btn btn-secondary">
            <i className="fas fa-edit"></i> Replace Creative
          </button>
        </div>
      </div>
      <div className="licensed-assets-table">
        <table>
          <thead>
            <tr>
              <th>Asset</th>
              <th>Athlete</th>
              <th>License Type</th>
              <th>Start-End</th>
              <th>Watermark</th>
              <th>Compliance Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Training Video Series</strong></td>
              <td><span className="text-gray-600">Alex Johnson</span></td>
              <td><span className="text-gray-600">Commercial</span></td>
              <td><span className="text-gray-600">Jan 15 - Feb 15, 2025</span></td>
              <td><span className="status-active">Applied</span></td>
              <td><span className="status-active">Compliant</span></td>
            </tr>
            <tr>
              <td><strong>Brand Photos</strong></td>
              <td><span className="text-gray-600">Sarah Martinez</span></td>
              <td><span className="text-gray-600">Promotional</span></td>
              <td><span className="text-gray-600">Jan 10 - Mar 10, 2025</span></td>
              <td><span className="status-active">Applied</span></td>
              <td><span className="status-active">Compliant</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )

  const renderCampaignAnalytics = () => (
    <div className="widget">
      <div className="widget-header">
        <h2>Campaign Analytics</h2>
        <div className="widget-actions">
          <button className="btn btn-primary">
            <i className="fas fa-download"></i> Export CSV
          </button>
        </div>
      </div>
      <div className="analytics-cards">
        <div className="analytics-card">
          <div className="analytics-label">Impressions</div>
          <div className="analytics-value">2.4M</div>
          <div className="analytics-delta positive">+15%</div>
        </div>
        <div className="analytics-card">
          <div className="analytics-label">CTR</div>
          <div className="analytics-value">3.2%</div>
          <div className="analytics-delta positive">+8%</div>
        </div>
        <div className="analytics-card">
          <div className="analytics-label">Conversions</div>
          <div className="analytics-value">1,247</div>
          <div className="analytics-delta positive">+22%</div>
        </div>
        <div className="analytics-card">
          <div className="analytics-label">Attribution</div>
          <div className="analytics-value">87%</div>
          <div className="analytics-delta positive">+5%</div>
        </div>
      </div>
      <div className="analytics-note">
        <p><i className="fas fa-info-circle"></i> Note: Analytics are read-only until analytics API is connected.</p>
      </div>
    </div>
  )

  const renderVendorLibrary = () => (
    <div className="widget">
      <div className="widget-header">
        <h2>Vendor IP Library</h2>
        <div className="widget-actions">
          <button className="btn btn-primary">
            <i className="fas fa-upload"></i> Upload Asset
          </button>
          <button className="btn btn-secondary">
            <i className="fas fa-check-circle"></i> Verify Ownership
          </button>
        </div>
      </div>
      <div className="vendor-library-table">
        <table>
          <thead>
            <tr>
              <th>Logo/Visual</th>
              <th>Type</th>
              <th>Ownership Verified</th>
              <th>Approved Uses</th>
              <th>Linked Campaigns</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Company Logo</strong></td>
              <td><span className="text-gray-600">Brand Asset</span></td>
              <td><span className="status-active">Yes</span></td>
              <td><span className="text-gray-600">Commercial, Promotional</span></td>
              <td><span className="text-gray-600">3 campaigns</span></td>
            </tr>
            <tr>
              <td><strong>Product Images</strong></td>
              <td><span className="text-gray-600">Visual Asset</span></td>
              <td><span className="status-active">Yes</span></td>
              <td><span className="text-gray-600">Commercial</span></td>
              <td><span className="text-gray-600">2 campaigns</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )

  const renderIntegrationHealth = () => (
    <div className="widget">
      <div className="widget-header">
        <h2>Integration Health</h2>
        <div className="widget-actions">
          <button className="btn btn-primary">
            <i className="fas fa-sync"></i> Refresh Status
          </button>
        </div>
      </div>
      <div className="integration-status">
        <div className="integration-item">
          <div className="integration-name">
            <i className="fas fa-chart-line"></i>
            <span>Analytics API</span>
          </div>
          <div className="integration-status-badge healthy">
            <i className="fas fa-check"></i>
            <span>Connected</span>
          </div>
        </div>
        <div className="integration-item">
          <div className="integration-name">
            <i className="fas fa-credit-card"></i>
            <span>Payments API</span>
          </div>
          <div className="integration-status-badge healthy">
            <i className="fas fa-check"></i>
            <span>Connected</span>
          </div>
        </div>
        <div className="integration-item">
          <div className="integration-name">
            <i className="fas fa-database"></i>
            <span>Asset Management</span>
          </div>
          <div className="integration-status-badge healthy">
            <i className="fas fa-check"></i>
            <span>Connected</span>
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
        case 'assets':
          return renderAssets()
        case 'contracts':
          return renderContracts()
        case 'approvals':
          return renderApprovals()
        case 'valuation':
          return renderValuation()
        case 'requests':
          return renderRequests()
        case 'join':
          return renderJoin()
        default:
          return (
            <div className="widget">
              <div className="widget-header">
                <h2>Welcome to MAPA IP Locker</h2>
              </div>
              <div style={{ padding: '2rem', textAlign: 'center' }}>
                <p>Select a tab to view your dashboard content.</p>
              </div>
            </div>
          )
      }
    } else {
      switch (currentTab) {
        case 'vendor-requests':
          return renderVendorRequests()
        case 'licensed-assets':
          return renderLicensedAssets()
        case 'campaign-analytics':
          return renderCampaignAnalytics()
        case 'vendor-library':
          return renderVendorLibrary()
        case 'integration-health':
          return renderIntegrationHealth()
        case 'join':
          return renderJoin()
        default:
          return (
            <div className="widget">
              <div className="widget-header">
                <h2>Welcome to MAPA IP Locker</h2>
              </div>
              <div style={{ padding: '2rem', textAlign: 'center' }}>
                <p>Select a tab to view your vendor dashboard content.</p>
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

