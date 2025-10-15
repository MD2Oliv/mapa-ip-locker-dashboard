'use client'

interface HeaderProps {
  currentRole: 'athlete' | 'vendor'
  onToggleRole: () => void
}

export default function Header({ currentRole, onToggleRole }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <i className="fas fa-shield-alt"></i>
          <span>MAPA IP Locker</span>
        </div>
        <div className="user-info">
          <div className="user-avatar">
            <i className="fas fa-user"></i>
          </div>
          <div className="user-details">
            <span className="user-name">Alex Johnson</span>
            <span className="user-role">{currentRole === 'athlete' ? 'Athlete' : 'Vendor'}</span>
          </div>
          <button className="role-switch" onClick={onToggleRole}>
            <i className="fas fa-exchange-alt"></i>
          </button>
        </div>
      </div>
    </header>
  )
}


