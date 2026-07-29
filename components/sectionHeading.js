import styles from './sectionHeading.module.css';

export default function SectionHeading({ eyebrow, title, body, align = 'left' }) {
  return (
    <div className={`${styles.heading} ${align === 'center' ? styles.center : ''}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {body && <p className={styles.body}>{body}</p>}
    </div>
  );
}
