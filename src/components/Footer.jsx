import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer" aria-label="Footer" data-section-reveal>
      <div className="footer__card">
        <div className="footer__cta section-reveal">
          <h2 className="footer__cta-title">Ready to build something extraordinary?</h2>
          <Link to="/contact" className="footer__contact-btn">Contact us</Link>
        </div>
        <div className="footer__body">
          <div className="footer__newsletter section-reveal">
            <h3 className="footer__newsletter-title">Newsletter</h3>
            <p className="footer__newsletter-desc">Insights on craftsmanship, materials, and the projects shaping the built environment, delivered monthly.</p>
            <form className="footer__form" action="#" method="post" onSubmit={(e) => e.preventDefault()}>
              <input type="email" className="footer__input" placeholder="Enter your email" aria-label="Email address" required />
              <button type="submit" className="footer__subscribe">Subscribe</button>
            </form>
          </div>
          <div className="footer__nav">
            <div className="footer__col section-reveal">
              <h4 className="footer__col-title">Company</h4>
              <ul className="footer__col-list">
                <li><Link to="/culture" className="footer__col-link">Our Story</Link></li>
                <li><Link to="/culture" className="footer__col-link">Culture</Link></li>
              </ul>
            </div>
            <div className="footer__col section-reveal">
              <h4 className="footer__col-title">Projects</h4>
              <ul className="footer__col-list">
                <li><Link to="/projects" className="footer__col-link">All Projects</Link></li>
                <li><Link to="/projects" className="footer__col-link">Residential</Link></li>
                <li><Link to="/projects" className="footer__col-link">Commercial</Link></li>
              </ul>
            </div>
            <div className="footer__col section-reveal">
              <h4 className="footer__col-title">Contact</h4>
              <ul className="footer__col-list">
                <li><Link to="/contact" className="footer__col-link">Get in Touch</Link></li>
                <li><Link to="/contact" className="footer__col-link">Locations</Link></li>
              </ul>
              <div className="footer__social">
                <a href="mailto:hello@sek.build" className="footer__social-btn" aria-label="Email">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
                    <path d="M1.5 5l6.5 4.5L14.5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                </a>
                <a href="#" className="footer__social-btn" aria-label="LinkedIn">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1.5" y="1.5" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.3"/>
                    <path d="M4.5 7v4.5M4.5 5.5h.01M7 11.5V9.2c0-1 .8-1.8 1.8-1.8s1.7.8 1.7 1.8V11.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="footer__copy section-reveal">&copy; 2025 SEK.</p>
      </div>
    </footer>
  );
}
