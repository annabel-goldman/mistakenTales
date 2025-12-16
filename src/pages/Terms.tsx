import { Link } from 'react-router-dom'
import styles from '../styles/Legal.module.css'
import termsPdf from '../assets/pdf/Terms of Service.pdf'

export default function Terms() {
  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <Link to="/" className={styles.back}>
          ← Back
        </Link>
        <h1 className={styles.title}>Terms of Service</h1>
        <p className={styles.intro}>
          Review our terms below or download the full document.
        </p>
        <a href={termsPdf} target="_blank" rel="noopener noreferrer" className={styles.download}>
          Open PDF
        </a>
        <object
          data={termsPdf}
          type="application/pdf"
          className={styles.embed}
          aria-label="Terms of Service PDF"
        >
          <p className={styles.fallback}>
            Your browser does not support embedded PDFs.{' '}
            <a href={termsPdf}>Download the Terms of Service</a>.
          </p>
        </object>
      </div>
    </main>
  )
}

