'use client'

import { useState } from 'react'

interface Alert {
  id: string
  type: string
  title: string
  message: string
  actions: string[]
}

interface AlertsContainerProps {
  alerts: Alert[]
}

export default function AlertsContainer({ alerts: initialAlerts }: AlertsContainerProps) {
  const [alerts, setAlerts] = useState<Alert[]>(initialAlerts)

  const dismissAlert = (alertId: string) => {
    setAlerts(prevAlerts => prevAlerts.filter(alert => alert.id !== alertId))
  }

  const handleAlertAction = (alertId: string, action: string) => {
    console.log(`Alert action: ${action} for alert: ${alertId}`)
    // After action, dismiss the alert
    dismissAlert(alertId)
  }

  // Don't render if no alerts
  if (alerts.length === 0) {
    return null
  }

  return (
    <div className="alerts-container">
      {alerts.map((alert) => (
        <div key={alert.id} className={`alert ${alert.type}`}>
          <div className="alert-header">
            <div className="alert-title">{alert.title}</div>
            <button 
              className="alert-close" 
              onClick={() => dismissAlert(alert.id)}
              aria-label="Close alert"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="alert-message">{alert.message}</div>
          <div className="alert-actions">
            {alert.actions.map((action: string) => (
              <button
                key={action}
                className="alert-btn primary"
                onClick={() => handleAlertAction(alert.id, action)}
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

