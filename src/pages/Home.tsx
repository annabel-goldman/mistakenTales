import { Link } from 'react-router-dom'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>mistakenTales</h1>
        <p className={styles.tagline}>
          We craft Alternate Reality Games: immersive, puzzle-driven narratives that blur the line
          between fiction and the real world.
        </p>
        <nav className={styles.nav}>
          <Link to="/privacy" className={styles.link}>
            Privacy Notice
          </Link>
          <span className={styles.sep}>·</span>
          <Link to="/terms" className={styles.link}>
            Terms of Service
          </Link>
        </nav>
      </div>
    </main>
  )
}

