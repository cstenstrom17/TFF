import Image from 'next/image';
import Link from 'next/link';
import ProgramCard from '../components/programCard';
import SectionHeading from '../components/sectionHeading';
import styles from '../styles/Home.module.css';
import { newsItems, partners, programs, site } from '../lib/siteData';

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className="eyebrow">Children. Animals. Community.</p>
            <h1>Compassion becomes action when we work together.</h1>
            <p className={styles.heroLead}>
              The Tortorella Family Foundation supports people and organizations improving the lives of children and animals—and protecting the communities we all share.
            </p>
            <div className="buttonRow">
              <Link className="button" href="/programs">Explore our work <span aria-hidden="true">→</span></Link>
              <Link className="button buttonOutline" href="/about">Meet the foundation</Link>
            </div>
            <div className={styles.heroNote}>
              <span aria-hidden="true">✦</span>
              <p>Hands-on giving, trusted partnerships, and support that reaches real needs.</p>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.heroImageFrame}>
              <Image
                src="/images/foundation-visit.jpg"
                alt="Foundation supporters visiting with a child and a rescued dog"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
            <div className={styles.impactCard}>
              <strong>20+</strong>
              <span>grant recipients listed for 2025</span>
            </div>
            <div className={styles.sunburst} aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className={`section ${styles.programSection}`}>
        <div className="container">
          <SectionHeading
            eyebrow="How we give back"
            title="Focused programs. Personal involvement. Lasting care."
            body="A clearer site should help visitors understand the foundation's work in seconds, then make it easy to explore, connect, or give."
          />
          <div className={styles.programGrid}>
            {programs.map((program, index) => (
              <ProgramCard key={program.title} program={program} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.bearsSection}`} id="bears-angels">
        <div className={`container ${styles.featureGrid}`}>
          <div className={styles.logoPanel}>
            <div className={styles.logoHalo} aria-hidden="true" />
            <Image
              src="/images/bears-angels.png"
              alt="Bear's Angels program logo"
              width={741}
              height={496}
              sizes="(max-width: 800px) 80vw, 40vw"
            />
          </div>
          <div className={styles.featureCopy}>
            <p className="eyebrow">Featured program</p>
            <h2>Helping animals find safety, care, and a way home.</h2>
            <p>
              Named after the Tortorellas&apos; beloved dog Bear, Bear&apos;s Angels partners with responsible rescues and shelters helping homeless and abused animals. Grants support medical care, spay and neuter programs, rehabilitation, shelter improvements, transport, and adoption.
            </p>
            <ul className={styles.checkList}>
              <li>Emergency and veterinary support</li>
              <li>Rescue, rehabilitation, and transport</li>
              <li>Programs that improve adoption outcomes</li>
            </ul>
            <Link className="button" href="/programs#bears-angels">See Bear&apos;s Angels</Link>
          </div>
        </div>
      </section>

      <section className={`section ${styles.literacySection}`}>
        <div className={`container ${styles.literacyGrid}`}>
          <div>
            <p className="eyebrow">Enlighten Your World — READ!</p>
            <h2>Open a book. Spark a voice. Expand a world.</h2>
            <p>
              Reading and writing create opportunity. Music and art encourage imagination. The foundation&apos;s literacy work brings those experiences together through free story and learning resources for children and educators.
            </p>
            <div className="buttonRow">
              <a className="button" href={site.externalLiteracyUrl} target="_blank" rel="noreferrer">Visit the learning site <span aria-hidden="true">↗</span></a>
              <Link className="button buttonOutline" href="/programs#literacy">Learn more</Link>
            </div>
          </div>
          <div className={styles.bugPanel}>
            <Image
              src="/images/bug-reading.png"
              alt="Colorful illustrated bug character from the foundation's children's literacy program"
              width={760}
              height={856}
              sizes="(max-width: 800px) 70vw, 34vw"
            />
          </div>
        </div>
      </section>

      <section className={`section ${styles.impactSection}`}>
        <div className="container">
          <SectionHeading
            eyebrow="A network of good work"
            title="Built around trusted community partners."
            body="The current site contains a substantial list of supported organizations. The redesign turns that list into a more credible, browsable story of impact."
            align="center"
          />
          <div className={styles.partnerCloud} aria-label="Featured organizations supported by the foundation">
            {partners.map((partner) => <span key={partner}>{partner}</span>)}
          </div>
          <div className={styles.centerButton}>
            <Link className="button buttonOutline" href="/partners">View supported organizations</Link>
          </div>
        </div>
      </section>

      <section className={`section ${styles.storySection}`}>
        <div className={`container ${styles.storyGrid}`}>
          <div className={styles.storyImage}>
            <Image
              src="/images/tortorella-family.jpg"
              alt="The Tortorella family seated outside with several dogs"
              fill
              sizes="(max-width: 800px) 100vw, 45vw"
            />
          </div>
          <div className={styles.storyCopy}>
            <p className="eyebrow">The family behind the foundation</p>
            <h2>Giving back is personal.</h2>
            <p>
              The foundation grew from the Tortorella family&apos;s desire to support children in disadvantaged situations, protect animals from harm, and strengthen the organizations already doing meaningful work.
            </p>
            <blockquote>“Play hard, walk your dog, and do it the right way.”</blockquote>
            <Link className="button buttonOutline" href="/about">Read the family story</Link>
          </div>
        </div>
      </section>

      <section className={`section ${styles.newsSection}`}>
        <div className="container">
          <div className={styles.newsHeader}>
            <SectionHeading eyebrow="News & stories" title="What the foundation is supporting now." />
            <Link href="/news" className={styles.textLink}>View all news <span aria-hidden="true">→</span></Link>
          </div>
          <div className={styles.newsGrid}>
            {newsItems.map((item) => (
              <article className={styles.newsCard} key={item.title}>
                <p className={styles.newsCategory}>{item.category}</p>
                <h3>{item.title}</h3>
                <p className={styles.newsDate}>{item.date}</p>
                <Link href="/news">Read story <span aria-hidden="true">→</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={`container ${styles.ctaInner}`}>
          <div>
            <p className="eyebrow">Turn care into action</p>
            <h2>Help the next child, animal, or community partner move forward.</h2>
          </div>
          <div className="buttonRow">
            <Link className="button buttonLight" href={site.donationUrl}>Donate or connect</Link>
            <Link className={styles.ctaLink} href="/partners">Meet our partners <span aria-hidden="true">→</span></Link>
