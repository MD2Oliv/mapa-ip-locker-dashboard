'use client'

interface NavigationTabsProps {
  currentRole: 'athlete' | 'vendor'
  currentTab: string
  onSwitchTab: (tab: string) => void
}

export default function NavigationTabs({ currentRole, currentTab, onSwitchTab }: NavigationTabsProps) {
  const athleteTabs = [
    { id: 'timeline', label: 'IP Locker Timeline' },
    { id: 'assets', label: 'Assets & Rights' },
    { id: 'contracts', label: 'Contracts' },
    { id: 'approvals', label: 'Approvals' },
    { id: 'valuation', label: 'Valuation & Tier' },
    { id: 'requests', label: 'Requests Inbox' },
    { id: 'join', label: 'Join' }
  ]

  const vendorTabs = [
    { id: 'vendor-requests', label: 'Requests & Approvals' },
    { id: 'licensed-assets', label: 'Licensed Assets' },
    { id: 'campaign-analytics', label: 'Campaign Analytics' },
    { id: 'vendor-library', label: 'Vendor IP Library' },
    { id: 'integration-health', label: 'Integration Health' },
    { id: 'join', label: 'Join' }
  ]

  const tabs = currentRole === 'athlete' ? athleteTabs : vendorTabs

  return (
    <nav className="nav-tabs">
      <div className="tab-group">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab ${currentTab === tab.id ? 'active' : ''}`}
            onClick={() => onSwitchTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  )
}

