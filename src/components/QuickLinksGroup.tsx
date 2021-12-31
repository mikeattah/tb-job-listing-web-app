function QuickLinksGroup({ ...props }) {
  return (
    <div className="quick-links-container">
      <p className="quick-links-text">Quick Links</p>
      <ul className="quick-links-group">
        <li className="quick-links-item">
          <a className="quick-links-link">Home</a>
        </li>
        <li className="quick-links-item">
          <a className="quick-links-link">About</a>
        </li>
        <li className="quick-links-item">
          <a className="quick-links-link">Calendar</a>
        </li>
        <li className="quick-links-item">
          <a className="quick-links-link">Terms and condition</a>
        </li>
      </ul>
    </div>
  );
}

export default QuickLinksGroup;
