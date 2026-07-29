import styles from '../styles/Page.module.css';
import { newsItems } from '../lib/siteData';

export default function News() {
  return (
    <>
      <section className={styles.pageHero}>
        <div className={`container ${styles.pageHeroInner}`}>
          <p className="eyebrow">News & stories</p>
          <h1>Updates with a clearer sense of impact.</h1>
          <p>A real launch could pull these posts from a CMS. For this starter, the newest items from the current site are represented as editable data.</p>
        </div>
      </section>
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.newsList}>
            {newsItems.map((item) => (
              <article className={styles.newsItem} key={item.title}>
                <time>{item.date}</time>
                <h2>{item.title}</h2>
                <span>{item.category}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
News.pageTitle = 'News';
News.pageDescription = 'Read recent stories and updates from the Tortorella Family Foundation.';
