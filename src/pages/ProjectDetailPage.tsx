import { Link, useParams } from 'react-router-dom'
import projectsData from '../data/projects.json'
import type { Project } from '../types'
import styles from './ProjectDetailPage.module.css'

const projects = projectsData as Project[]

export function ProjectDetailPage() {
  const { id } = useParams()
  const project = projects.find((item) => item.id === id)

  if (!project) {
    return (
      <section className={styles.missing}>
        <span>404</span><h1>Project not found</h1><p>The project “{id}” is not part of this workspace.</p><Link to="/projects">Return to projects</Link>
      </section>
    )
  }

  const date = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(`${project.dueDate}T12:00:00`))

  return (
    <section>
      <Link to="/projects" className={styles.back}>← All projects</Link>
      <header className={styles.hero}>
        <div>
          <span className={styles.status}>{project.status}</span>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
        </div>
        <div className={styles.percent}><strong>{project.progress}%</strong><span>complete</span></div>
      </header>
      <div className={styles.progress}><span style={{ width: `${project.progress}%` }} /></div>

      <div className={styles.details}>
        <article><span>Project owner</span><strong>{project.owner}</strong><small>Primary contact</small></article>
        <article><span>Target date</span><strong>{date}</strong><small>Workspace schedule</small></article>
        <article><span>Task health</span><strong>{project.tasksCompleted} of {project.tasksTotal}</strong><small>Tasks completed</small></article>
      </div>

      <article className={styles.note}>
        <span>Project note</span>
        <h2>Static data, realistic route.</h2>
        <p>This detail view is rendered entirely from bundled JSON. It exercises a dynamic BrowserRouter path without relying on a backend or runtime API.</p>
      </article>
    </section>
  )
}
