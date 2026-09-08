import styles from './StatCard.module.css'

interface StatCardProps {
  label: string
  value: string
  note: string
  tone: 'blue' | 'green' | 'orange' | 'purple'
}

export function StatCard({ label, value, note, tone }: StatCardProps) {
  return (
    <article className={`${styles.card} ${styles[tone]}`}>
      <span className={styles.label}>{label}</span>
      <strong className={styles.value}>{value}</strong>
      <span className={styles.note}>{note}</span>
    </article>
  )
}
