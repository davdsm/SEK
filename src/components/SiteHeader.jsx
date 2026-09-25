import { useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import useSiteHeader from '../hooks/useSiteHeader.js';
import { useLocale } from '../i18n/LocaleContext.jsx';
import '../../css/site-header.css';

export default function SiteHeader() {
  const headerRef = useRef(null);
  const { pathname } = useLocation();
  const { locale, setLocale, locales, t } = useLocale();
  useSiteHeader(headerRef, { isHome: pathname === '/' });

  const linkClass = ({ isActive }) =>
    'site-header__link' + (isActive ? ' site-header__link--active' : '');

  return (
    <header className="site-header" ref={headerRef} aria-label="Site">
      <Link to="/" className="site-header__logo" aria-label="SEK home">
        <img
          src="/logo/SEK-WH.svg"
          alt="SEK"
          className="site-header__logo-img"
          width="96"
          height="26"
        />
      </Link>

      <div className="site-header__end">
        <nav className="site-header__nav" aria-label="Primary">
          <NavLink to="/projects" className={linkClass}>
            {t('nav.portfolio')}
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            {t('nav.contacts')}
          </NavLink>
        </nav>

        <div className="site-header__langs" role="group" aria-label={t('nav.language')}>
          {locales.map((item) => (
            <button
              key={item.code}
              type="button"
              className={
                'site-header__lang' +
                (locale === item.code ? ' site-header__lang--active' : '')
              }
              aria-pressed={locale === item.code}
              onClick={() => setLocale(item.code)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
