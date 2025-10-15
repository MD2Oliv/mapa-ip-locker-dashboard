'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import NavigationTabs from '@/components/NavigationTabs'
import SummaryBar from '@/components/SummaryBar'
import FanGuardSection from '@/components/FanGuardSection'
import DashboardContent from '@/components/DashboardContent'
import AlertsContainer from '@/components/AlertsContainer'
import FanGuardModal from '@/components/FanGuardModal'

export default function Home() {
  const [currentRole, setCurrentRole] = useState<'athlete' | 'vendor'>('athlete')
  const [currentTab, setCurrentTab] = useState('timeline')
  const [alerts, setAlerts] = useState<any[]>([])

  useEffect(() => {
    // Initialize alerts
    generateAlerts()
  }, [])

  const generateAlerts = () => {
    setAlerts([
      {
        id: 'premium-due-1',
        type: 'renewal',
        title: 'Premium Due',
        message: 'Athlete equipment insurance coverage expires in 5 days',
        actions: ['Renew Now', 'View Details'],
        timestamp: new Date()
      },
      {
        id: 'rights-conflict-1',
        type: 'conflict',
        title: 'Rights Conflict Detected',
        message: 'Training Video Series has conflicting usage rights',
        actions: ['Resolve Conflict', 'View Details'],
        timestamp: new Date()
      },
      {
        id: 'metadata-missing-1',
        type: 'metadata',
        title: 'Missing Metadata',
        message: 'Athlete NIL Revenue-Share contract missing required fields',
        actions: ['Complete Metadata', 'View Contract'],
        timestamp: new Date()
      }
    ])
  }

  const toggleRole = () => {
    setCurrentRole(currentRole === 'athlete' ? 'vendor' : 'athlete')
    setCurrentTab(currentRole === 'athlete' ? 'vendor-requests' : 'timeline')
  }

  const switchTab = (tabName: string) => {
    setCurrentTab(tabName)
  }

  return (
    <div className="app-container">
      <Header 
        currentRole={currentRole} 
        onToggleRole={toggleRole}
      />
      
      <div className="dashboard-container">
        <AlertsContainer alerts={alerts} />
        
        <NavigationTabs 
          currentRole={currentRole}
          currentTab={currentTab}
          onSwitchTab={switchTab}
        />

        <main className="dashboard-content">
          <SummaryBar currentRole={currentRole} />
          
          <FanGuardSection />
          
          <DashboardContent 
            currentRole={currentRole}
            currentTab={currentTab}
          />
        </main>
      </div>

      <FanGuardModal />
    </div>
  )
}


