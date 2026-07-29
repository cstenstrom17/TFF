import Head from 'next/head';
import Header from './header';
import Footer from './footer';
import styles from './layout.module.css';
import { site } from '../lib/siteData';

export default function Layout({ children, title, description }) {
  const pageTitle = title ? `${title} | ${site.shortName}` : site.name;
  const pageDescription = description || site.tagline;

  return (
    <div className={styles.siteShell}>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#17324d" />
      </Head>

      <a className={styles.skipLink} href="#main-content">
        Skip to content
      </a>

      <Header />
      <main id="main-content" className={styles.mainContent}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
