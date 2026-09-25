import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useLocale } from '../i18n/LocaleContext.jsx';

export default function Footer() {
  const footerRef = useRef(null);
  const { t } = useLocale();

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
            <span className="footer__invite-line">{t('footer.line1')}</span>
            <span className="footer__invite-line">{t('footer.line2')}</span>
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
              placeholder={t('footer.emailPlaceholder')}
              aria-label={t('footer.emailAria')}
              required
            />
            <button type="submit" className="footer__invite-btn">
              {t('footer.request')}
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
          <nav className="footer__legal" aria-label={t('footer.legalAria')}>
            <Link to="/contact">{t('footer.terms')}</Link>
            <Link to="/contact">{t('footer.privacy')}</Link>
            <a
              href="https://www.instagram.com/sek.build/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('footer.instagram')}
            </a>
            <a href="mailto:contact@sek-construction.com">{t('footer.email')}</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
