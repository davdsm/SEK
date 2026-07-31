import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        document.body.classList.toggle('bg-white', entry.isIntersecting);
      },
      { rootMargin: '-30% 0% -30% 0%', threshold: 0 }
    );

    observer.observe(footer);

    return () => {
      observer.disconnect();
      document.body.classList.remove('bg-white');
    };
  }, []);

  return (
    <footer className="footer" ref={footerRef} aria-label="Footer" data-section-reveal>
      <div className="footer__card">
        <div className="footer__invite">
          <h2 className="footer__invite-title section-reveal">
            <span className="footer__invite-line">Start shaping a home</span>
            <span className="footer__invite-line">that will hold your legacy.</span>
          </h2>

          <form
            className="footer__invite-form section-reveal"
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

        <div className="footer__wordmark section-reveal" role="img" aria-label="SEK">
          <img
            src="/assets/footer.jpg"
            alt="Luxury Mediterranean interior overlooking the French Riviera"
            className="footer__wordmark-img js-parallax"
            data-parallax="0.18"
            data-cover-scale="1.35"
          />
        </div>

        <div className="footer__bar section-reveal">
          <p className="footer__copy">SEK© 2026</p>
          <nav className="footer__legal" aria-label="Footer links">
            <Link to="/contact">Terms of Service</Link>
            <Link to="/contact">Privacy Policy</Link>
            <a
              href="https://www.instagram.com/sek.build/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a href="mailto:contact@sek-construction.com">Email</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
