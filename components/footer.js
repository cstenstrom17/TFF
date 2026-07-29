import Link from 'next/link';
import styles from './footer.module.css';
import { navigation, site } from '../lib/siteData';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.intro}>
          <span className={styles.brandMark} aria-hidden="true">TFF</span>
          <h2>{site.shortName}</h2>
          <p>
            Supporting children, animals, and communities through thoughtful partnerships and hands-on giving.
          </p>
        </div>

        <div>
          <h3>Explore</h3>
          <ul>
            {navigation.map((item) => (
              <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Programs</h3>
          <ul>
            <li><Link href="/programs#bears-angels">Bear&apos;s Angels</Link></li>
            <li><Link href="/programs#literacy">Enlighten Your World — READ!</Link></li>
            <li><a href={site.externalLiteracyUrl} target="_blank" rel="noreferrer">Children&apos;s learning site</a></li>
          </ul>
        </div>

        <div className={styles.action}>
          <h3>Help make a difference</h3>
          <p>Connect with the foundation or add the verified donation link before launch.</p>
          <Link className="button buttonLight" href={site.donationUrl}>Get involved</Link>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© {new Date().getFullYear()} {site.name}</p>
        <p>Starter redesign concept — review all copy and links before publishing.</p>
      </div>
    </footer>
  );
}
