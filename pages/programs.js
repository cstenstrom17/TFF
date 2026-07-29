import Link from 'next/link';
import styles from '../styles/Page.module.css';
import { site } from '../lib/siteData';

export default function Programs() {
  return (
    <>
      <section className={styles.pageHero}>
        <div className={`container ${styles.pageHeroInner}`}>
          <p className="eyebrow">Our work</p>
          <h1>Programs shaped around real needs.</h1>
          <p>Three clear areas of work make the foundation easier to understand—and make it easier for visitors to decide how they want to help.</p>
        </div>
      </section>
      <section className={styles.contentSection}>
        <div className="container">
          <article className={styles.programBlock} id="bears-angels">
            <h2>Bear&apos;s Angels</h2>
            <div>
              <p>Bear&apos;s Angels supports responsible shelters and rescues helping homeless and abused animals. The program can be presented with specific examples of medical care, spay and neuter support, rescue transport, rehabilitation, shelter improvement, and adoption programs.</p>
              <Link className="button buttonOutline" href="/partners">See partner organizations</Link>
            </div>
          </article>
          <article className={styles.programBlock} id="literacy">
            <h2>Enlighten Your World — READ!</h2>
            <div>
              <p>The literacy program encourages reading, writing, music, and art. A modern site should feature the free English and Spanish learning resources visually, explain who they serve, and give educators a direct route to the materials.</p>
              <a className="button buttonOutline" href={site.externalLiteracyUrl} target="_blank" rel="noreferrer">Open the learning site</a>
            </div>
          </article>
          <article className={styles.programBlock} id="community">
            <h2>Community response</h2>
            <div>
              <p>The foundation also responds to time-sensitive situations and supports organizations serving children, families, and communities. This section is intentionally broad until the foundation confirms current program names and eligibility criteria.</p>
              <Link className="button buttonOutline" href="/contact">Ask about current work</Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
Programs.pageTitle = 'Our Work';
Programs.pageDescription = 'Explore the Tortorella Family Foundation programs supporting animal welfare, literacy, and community needs.';
