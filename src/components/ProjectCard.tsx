import { Link } from 'react-router-dom'
import type { Project } from '../types'
import styles from './ProjectCard.module.css'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`${styles.card} ${styles[project.accent]}`}>
      <div className={styles.topline}>
        <span className={styles.status}>{project.status}</span>
        <span className={styles.owner}>{project.owner.split(' ').map((part) => part[0]).join('')}</span>
      </div>
      <div>
        <h2><Link to={`/projects/${project.id}`}>{project.name}</Link></h2>
        <p>{project.description}</p>
      </div>
      <div className={styles.progressLabel}>
        <span>{project.tasksCompleted}/{project.tasksTotal} tasks</span>
        <strong>{project.progress}%</strong>
      </div>
      <div className={styles.track}><span style={{ width: `${project.progress}%` }} /></div>
      <Link to={`/projects/${project.id}`} className={styles.openLink}>View project <span>→</span></Link>
    </article>
  )
}
