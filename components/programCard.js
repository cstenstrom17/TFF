import Link from 'next/link';
import styles from './programCard.module.css';

function Icon({ type }) {
  const paths = {
    paw: (
      <>
        <circle cx="8" cy="7" r="2.1" /><circle cx="16" cy="7" r="2.1" />
        <circle cx="5" cy="12" r="1.8" /><circle cx="19" cy="12" r="1.8" />
        <path d="M12 11.5c-3.3 0-6.2 2.5-6.2 5.3 0 2 1.6 3.2 3.4 2.6 1.8-.6 3.8-.6 5.6 0 1.8.6 3.4-.6 3.4-2.6 0-2.8-2.9-5.3-6.2-5.3Z" />
      </>
    ),
    book: <path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H12v17H7.5A3.5 3.5 0 0 0 4 22V5.5Zm16 0A3.5 3.5 0 0 0 16.5 2H12v17h4.5A3.5 3.5 0 0 1 20 22V5.5Z" />,
    heart: <path d="M20.8 5.7a5.2 5.2 0 0 0-7.4 0L12 7.1l-1.4-1.4a5.2 5.2 0 1 0-7.4 7.4L12 22l8.8-8.9a5.2 5.2 0 0 0 0-7.4Z" />,
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {paths[type]}
    </svg>
  );
}

export default function ProgramCard({ program, index }) {
  return (
    <article className={styles.card}>
      <div className={styles.topline}>
        <span className={styles.number}>0{index + 1}</span>
        <span className={styles.icon}><Icon type={program.icon} /></span>
      </div>
      <p className={styles.kicker}>{program.kicker}</p>
      <h3>{program.title}</h3>
      <p className={styles.description}>{program.description}</p>
      <Link href={program.href} className={styles.link}>Learn about this work <span aria-hidden="true">→</span></Link>
    </article>
  );
}
