'use client'

export default function FanGuardModal() {
  const closeModal = () => {
    const modal = document.getElementById('fanGuardModal')
    if (modal) {
      modal.classList.remove('active')
    }
  }

  const openBlocksurvey = () => {
    window.open('https://blocksurvey.io/mapanile-athlete-nil-intake-qrO7P.cAQEe2yMACIZTkZA?v=o', '_blank')
  }

  return (
    <div className="modal" id="fanGuardModal">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Fan Guard Fund</h3>
          <button className="modal-close" onClick={closeModal}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="modal-body">
          <div className="nile-logo">
            <div className="nile-symbol">
              <div className="triangle-outer"></div>
              <div className="triangle-inner"></div>
            </div>
            <div className="nile-text">NILE INS</div>
          </div>
          <p>Fan Guard Fund is our upcoming feature that will allow fans to contribute cash, crypto, and other considerations directly to verified athletes. This creates a direct connection between athletes and their supporters, enabling direct financial support for training and equipment, verified athlete and donor verification system, and transparent fund tracking and reporting.</p>
          <div className="modal-actions">
            <button className="btn btn-primary" onClick={openBlocksurvey}>
              Join Waitlist
            </button>
            <button className="btn btn-secondary">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

