import { useRef, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import useSiteHeader from '../hooks/useSiteHeader.js';

export default function SiteHeader() {
  const headerRef = useRef(null);
  const [lang, setLang] = useState('en');
  const [switching, setSwitching] = useState(false);

  useSiteHeader(headerRef);

  function handleLang(next) {
    if (lang === next) return;
    setLang(next);
    document.documentElement.lang = next;
    setSwitching(true);
    setTimeout(() => setSwitching(false), 550);
  }

  const navLinkClass = ({ isActive }) =>
    'hero__nav-link' + (isActive ? ' hero__nav-link--active' : '');

  return (
    <div className="page-header">
      <header className="hero__nav" ref={headerRef}>
        <nav className="hero__nav-left" aria-label="Primary">
          <NavLink to="/" end className={navLinkClass}>
            <span className="hero__nav-num">01</span> HOME
          </NavLink>
          <NavLink to="/culture" className={navLinkClass}>
            <span className="hero__nav-num">02</span> VISION
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              'hero__nav-link' + (isActive ? ' hero__nav-link--active' : '')
            }
          >
            <span className="hero__nav-num">03</span> PORTFOLIO
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            <span className="hero__nav-num">04</span> CONTACT
          </NavLink>
        </nav>
        <Link to="/" className="hero__logo" aria-label="SEK home">
          <img src="/logo/SEK-WH.svg" alt="SEK" className="hero__logo-img" width="96" height="26" />
        </Link>
        <div className="hero__nav-right">
          <div className={`hero__lang${switching ? ' is-switching' : ''}`} role="group" aria-label="Language" data-active={lang}>
            <span className="hero__lang-indicator" aria-hidden="true"></span>
            <button
              type="button"
              className={`hero__lang-btn${lang === 'fr' ? ' hero__lang-btn--active' : ''}`}
              data-lang="fr"
              aria-pressed={lang === 'fr'}
              onClick={() => handleLang('fr')}
            >
              FR
            </button>
            <button
              type="button"
              className={`hero__lang-btn${lang === 'en' ? ' hero__lang-btn--active' : ''}`}
              data-lang="en"
              aria-pressed={lang === 'en'}
              onClick={() => handleLang('en')}
            >
              EN
            </button>
          </div>
          <button type="button" className="hero__menu" aria-label="Open menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
    </div>
  );
}
