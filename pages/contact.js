import { useState } from 'react';
import styles from '../styles/Page.module.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className={styles.pageHero}>
        <div className={`container ${styles.pageHeroInner}`}>
          <p className="eyebrow">Contact</p>
          <h1>Start a thoughtful conversation.</h1>
          <p>Use this page for partnership questions, press inquiries, educator resources, and general foundation contact.</p>
        </div>
      </section>
      <section className={styles.contentSection}>
        <div className={`container ${styles.formGrid}`}>
          <aside className={styles.contactAside}>
            <h2>Before this form goes live</h2>
            <p>Connect it to an email service or API route, add spam protection, publish a response-time expectation, and provide a direct mailing address only if the foundation approves it.</p>
          </aside>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" autoComplete="name" required />
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" required />
            </div>
            <div className={styles.field}>
              <label htmlFor="topic">What can we help with?</label>
              <select id="topic" name="topic" defaultValue="">
                <option value="" disabled>Select a topic</option>
                <option>Partnership inquiry</option>
                <option>Literacy resources</option>
                <option>Press or media</option>
                <option>Donation question</option>
                <option>General message</option>
              </select>
            </div>
            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required />
            </div>
            <p className={styles.formNote}>This demo form does not send data. Connect it to a verified form handler before launch.</p>
            {submitted && <p className={styles.success} role="status">Demo submitted. No message was sent.</p>}
            <button className="button" type="submit">Send message</button>
          </form>
        </div>
      </section>
    </>
  );
}
Contact.pageTitle = 'Contact';
Contact.pageDescription = 'Contact the Tortorella Family Foundation.';
