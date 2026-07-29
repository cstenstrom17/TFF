import styles from '../styles/Page.module.css';
import { partners } from '../lib/siteData';

const morePartners = [
  'Animals R Family', 'Blue Dog Therapy', 'Facilitate Rescue', 'LifeCare Alliance',
  'Save Ohio Pets', 'Southern Soul Rescue', 'Spots & Stripes', 'Wyandot Humane Society',
];

export default function Partners() {
  return (
    <>
      <section className={styles.pageHero}>
        <div className={`container ${styles.pageHeroInner}`}>
          <p className="eyebrow">Organizations we support</p>
          <h1>A network of people doing the work.</h1>
          <p>This starter organizes partner names into a clear, scannable directory. Add verified links, locations, years funded, and short impact summaries before launch.</p>
        </div>
      </section>
      <section className={styles.contentSection}>
        <div className="container">
          <ul className={styles.partnerList}>
            {[...partners, ...morePartners].map((partner) => <li key={partner}>{partner}</li>)}
          </ul>
        </div>
      </section>
    </>
  );
}
Partners.pageTitle = 'Partners';
Partners.pageDescription = 'Meet organizations supported by the Tortorella Family Foundation.';
