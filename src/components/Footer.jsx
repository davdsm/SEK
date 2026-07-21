import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer" aria-label="Footer">
      <div className="footer__card">
        <div className="footer__invite">
          <span className="footer__mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" fill="#0a0a0a"/>
              <path
                d="M8 22V12.5C8 9.5 10.2 7 14 7C17.8 7 20 9.5 20 12.5V14.5H8.8"
                stroke="#fff"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M8 18H22" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/>
              <path d="M8 22H24" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          </span>

          <h2 className="footer__invite-title">
            Start shaping a home<br />that will hold your legacy.
          </h2>

          <form
            className="footer__invite-form"
            action="#"
            method="post"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              className="footer__invite-input"
              placeholder="Your email."
              aria-label="Email address"
              required
            />
            <button type="submit" className="footer__invite-btn">
              Request Invitation
            </button>
          </form>
        </div>

        <div
          className="footer__wordmark"
          role="img"
          aria-label="SEK"
          style={{ backgroundImage: "url('/assets/projects/01-facade-windows.jpg')" }}
        ></div>

        <div className="footer__bar">
          <p className="footer__copy">SEK© 2025</p>
          <nav className="footer__legal" aria-label="Legal">
            <Link to="/contact">Terms of Service</Link>
            <Link to="/contact">Privacy Policy</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
