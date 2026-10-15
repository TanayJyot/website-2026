import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Nav.css';

const LINKS = [
  { to: '/#about', label: 'About' },
  { to: '/#experience', label: 'Experience' },
  { to: '/#projects', label: 'Projects' },
  { to: '/blog', label: 'Writings', page: true },
  { to: '/#contact', label: 'Contact' },
];

const MENU_ID = 'site-nav-menu';

export default function Nav() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [scrolled, setScrolled] = useState(() => typeof window !== 'undefined' && window.scrollY > 50);
  // The menu is open only for the location it was opened on, so any navigation closes it.
  const [openFor, setOpenFor] = useState(null);
  const open = openFor === location.key;
  const navRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpenFor(null);
        buttonRef.current?.focus();
      }
    };
    const onPointer = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenFor(null);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [open]);

  const close = () => setOpenFor(null);
  const pill = isHome && scrolled;

  const className = [
    'site-nav',
    isHome ? 'site-nav--home' : 'site-nav--static',
    pill && 'site-nav--pill',
    open && 'site-nav--open',
  ].filter(Boolean).join(' ');

  return (
    <nav className={className} aria-label="Main" ref={navRef}>
      <div className="site-nav__inner">
        <Link to="/" className="site-nav__brand" onClick={close}>Tanayjyot</Link>

        <button
          ref={buttonRef}
          type="button"
          className="site-nav__toggle"
          aria-expanded={open}
          aria-controls={MENU_ID}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpenFor(open ? null : location.key)}
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>

        <ul id={MENU_ID} className="site-nav__links">
          {LINKS.map(({ to, label, page }) => (
            <li key={to}>
              {page ? (
                <NavLink to={to} className="site-nav__link site-nav__link--page" onClick={close}>{label}</NavLink>
              ) : (
                <Link to={to} className="site-nav__link" onClick={close}>{label}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
