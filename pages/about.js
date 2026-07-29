import Image from 'next/image';
import styles from '../styles/Page.module.css';

export default function About() {
  return (
    <>
      <section className={styles.pageHero}>
        <div className={`container ${styles.pageHeroInner}`}>
          <p className="eyebrow">About the foundation</p>
          <h1>A family commitment to giving back.</h1>
          <p>The foundation connects personal involvement with trusted organizations working for children, animals, families, and the environment.</p>
        </div>
      </section>
      <section className={styles.contentSection}>
        <div className={`container ${styles.twoColumn}`}>
          <div className={styles.stickyTitle}>
            <h2>Started with gratitude. Built through partnership.</h2>
          </div>
          <div className={styles.prose}>
            <p>After years of supporting community organizations personally and through hockey-related foundations, the Tortorella family created the foundation to reach more children in disadvantaged situations and more animals at risk of abuse and neglect.</p>
            <p>The family&apos;s work includes literacy and creative learning, animal rescue and welfare, and timely support for organizations responding to urgent needs. The goal is not simply to write checks, but to understand the people doing the work and help resources reach the places where they can matter most.</p>
            <p><strong>Before publishing:</strong> replace this condensed starter copy with approved foundation language, current leadership information, tax status, and financial-transparency links.</p>
          </div>
        </div>
      </section>
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.simpleCard}>
            <Image src="/images/tortorella-family.jpg" alt="The Tortorella family with several dogs" width={540} height={540} />
          </div>
        </div>
      </section>
    </>
  );
}
About.pageTitle = 'About';
About.pageDescription = 'Learn about the Tortorella Family Foundation and its commitment to children, animals, and communities.';
