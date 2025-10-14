'use client'

interface AlertsContainerProps {
  alerts: any[]
}

export default function AlertsContainer({ alerts }: AlertsContainerProps) {
  const dismissAlert = (alertId: string) => {
    // In a real app, you'd update state here
    console.log('Dismissing alert:', alertId)
  }

  const handleAlertAction = (alertId: string, action: string) => {
    console.log(`Alert action: ${action} for alert: ${alertId}`)
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

