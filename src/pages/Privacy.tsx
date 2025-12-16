import { Link } from 'react-router-dom'
import styles from '../styles/Legal.module.css'
import privacyPdf from '../assets/pdf/Privacy Notice.pdf'

export default function Privacy() {
  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <Link to="/" className={styles.back}>
          ← Back
        </Link>
        <h1 className={styles.title}>Privacy Notice</h1>
        <p className={styles.intro}>
          Review our privacy practices below or download the full document.
        </p>
        <a href={privacyPdf} target="_blank" rel="noopener noreferrer" className={styles.download}>
          Open PDF
        </a>
        <object
          data={privacyPdf}
          type="application/pdf"
          className={styles.embed}
          aria-label="Privacy Notice PDF"
        >
          <p className={styles.fallback}>
            Your browser does not support embedded PDFs.{' '}
            <a href={privacyPdf}>Download the Privacy Notice</a>.
          </p>
        </object>
      </div>
    </main>
  )
}

