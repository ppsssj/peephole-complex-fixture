import { Link } from 'react-router-dom'
import styles from './NotFoundPage.module.css'

export function NotFoundPage() {
  return (
    <section className={styles.page}>
      <div className={styles.orbit}><span /></div>
      <span className={styles.code}>404 · Off course</span>
      <h1>This page is outside the workspace.</h1>
      <p>The route may have moved, or it may only exist in another orbit.</p>
      <Link to="/">Return to dashboard</Link>
    </section>
  )
}
