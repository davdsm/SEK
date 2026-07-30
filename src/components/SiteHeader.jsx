import { useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import useSiteHeader from '../hooks/useSiteHeader.js';
import '../../css/site-header.css';

export default function SiteHeader() {
  const headerRef = useRef(null);
  const { pathname } = useLocation();
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

      <nav className="site-header__nav" aria-label="Primary">
        <NavLink to="/projects" className={linkClass}>
          Portfolio
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          Contacts
        </NavLink>
      </nav>
    </header>
  );
}
