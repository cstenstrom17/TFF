import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './header.module.css';
import { navigation, site } from '../lib/siteData';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} onClick={closeMenu} aria-label="Tortorella Family Foundation home">
          <span className={styles.brandMark} aria-hidden="true">TFF</span>
          <span className={styles.brandText}>
            <strong>{site.shortName}</strong>
            <small>Giving back since 2008</small>
          </span>
        </Link>

        <button
          className={styles.menuButton}
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>

        <nav
          id="primary-navigation"
          className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}
          aria-label="Primary navigation"
        >
          {navigation.map((item) => {
            const active = router.pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? styles.active : ''}
                aria-current={active ? 'page' : undefined}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            );
          })}
          <Link className={styles.donateButton} href={site.donationUrl} onClick={closeMenu}>
            Donate
          </Link>
        </nav>
      </div>
    </header>
  );
}
