'use client'

export default function FanGuardSection() {
  const openModal = () => {
    const modal = document.getElementById('fanGuardModal')
    if (modal) {
      modal.classList.add('active')
    }
  }

  return (
    <div className="fan-guard-integration">
      <div className="nile-logo-large">
        <div className="nile-symbol-large">
          <div className="triangle-outer-large"></div>
          <div className="triangle-inner-large"></div>
        </div>
        <div className="nile-text-large">NILE INS</div>
      </div>
      <h3>NILE Fan Guard Fund</h3>
      <p>Fan Guard Fund is our upcoming feature that will allow fans to contribute cash, crypto, and other considerations directly to verified athletes. This creates a direct connection between athletes and their supporters, enabling:</p>
      <ul style={{ textAlign: 'left', margin: '1rem 0', paddingLeft: '1.5rem' }}>
        <li>Direct financial support for training and equipment</li>
        <li>Verified athlete and donor verification system</li>
        <li>Transparent fund tracking and reporting that reflect true market dynamics for student-athlete fan support and protection</li>
      </ul>
      <button className="btn" onClick={openModal}>
        <i className="fas fa-shield-alt"></i> Learn More & Join Waitlist
      </button>
    </div>
  )
}

